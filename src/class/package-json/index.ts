import _ from 'lodash';
import editJsonFile from 'edit-json-file';
import semver from 'semver';

import { WebPRJobNames } from '../../types/create-web-pr';

import { DEPENDENCIES_FIELDS } from './constants';
import { extractSemverVersion, prefixVersion } from './utils';

export class PackageJson {
  file: any;
  data: any;
  nodeVersion: number;

  constructor(path: string) {
    this.file = editJsonFile(path, {
      autosave: true,
    });
    this.data = this.file.data;
    this.nodeVersion = this.determineNodeVersion();
  }

  hasDependency(name: string): boolean {
    const versions = this.getAllDependencyVersions(name);
    return versions.length > 0;
  }

  hasAnyDependency(names: string[]): boolean {
    return names.some((name) => this.hasDependency(name));
  }

  isDependencyOlder(name: string, version: string): boolean {
    const currentVersion = this.getLowestDependencyVersion(name);
    return semver.lt(currentVersion, version);
  }

  hasSingleDependencyVersion(name: string): boolean {
    const versions = this.getAllDependencyVersions(name);
    const uniqueVersions = _.uniq(versions);
    return uniqueVersions.length === 1;
  }

  getLowestDependencyVersion(name: string): string {
    const versions = this.getAllDependencyVersions(name);
    if (versions.length === 0) {
      throw new Error(`${name} is missing in package.json`);
    }

    return semver.sort(versions)[0];
  }

  setDependencyVersion(name: string, version: string) {
    DEPENDENCIES_FIELDS.forEach((field) => {
      const currentVersion = this.data[field]?.[name];
      if (currentVersion) {
        // the edit-json-file lib uses set-value lib for setting value in JSON file
        // see why preservePaths: false is needed here https://github.com/jonschlinkert/set-value#optionspreservepaths
        this.file.set(`${field}.${name}`, prefixVersion(version, currentVersion), { preservePaths: false });
      }
    });
  }

  getRepository(): string {
    return this.data.clonePath || this.data.repository.url;
  }

  isNodeVersion(version: string) {
    const { engines = {} } = this.data;
    const nodeVersion = engines.node || '';

    const CORRECT_VERSION = new RegExp(`(${version}\\.)(\\d+\\.)(\\d+)`, 'gi');
    return CORRECT_VERSION.test(nodeVersion);
  }

  getPRName() {
    return WebPRJobNames[`NODE_${this.nodeVersion}`];
  }

  testName(regExp: RegExp): boolean {
    return regExp.test(this.data.name);
  }

  testRepo(regExp: RegExp): boolean {
    const repo = this.getRepository();
    return regExp.test(repo);
  }

  hasCommand(command: string): boolean {
    const { scripts = {} } = this.data;
    return !!scripts[command];
  }

  hasWorkspaces(): boolean {
    return !!this.data.workspaces;
  }

  private getAllDependencyVersions(name: string): string[] {
    return DEPENDENCIES_FIELDS.map((field) => this.data[field]?.[name])
      .filter((version) => version !== undefined)
      .map((version) => extractSemverVersion(version));
  }

  private determineNodeVersion(): number {
    const { engines = {} } = this.data;
    let nodeVersion: string = engines.node || '12'; // Default to Node 12 if no version specified

    nodeVersion = semver.clean(nodeVersion) || nodeVersion;

    return semver.minVersion(nodeVersion)?.major || 12; // Default to Node 12 if no result (because minVersion can be undefined)
  }
}
