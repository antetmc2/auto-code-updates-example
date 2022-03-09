import { FilterResult } from '../types';

import AbstractCommand from './abstract-command';
import { PackageJson } from './package-json';

export default class AbstractFilter extends AbstractCommand {
  static description = 'Check files in project';

  static flags = {
    ...AbstractCommand.flags,
  };

  static args = [
    {
      name: 'packageJsonPath',
      required: true,
      description: 'Path package.json',
      default: './package.json',
    },
  ];

  async run(): Promise<any> {
    const packageJsonPath = this.args.packageJsonPath;

    const file = new PackageJson(packageJsonPath);

    const result = await this.filter(file);

    this.log(`${result}`);
  }

  async filter(packageJson: PackageJson): Promise<FilterResult> {
    if (this.isArchivedProject(packageJson) || this.isEducationalProject(packageJson)) {
      this.debug('Project is not correct');
      return FilterResult.FALSE;
    }

    this.debug('This is correct project');

    return FilterResult.TRUE;
  }

  protected isArchivedProject(packageJson: PackageJson): boolean {
    return packageJson.testName(/archive/);
  }

  // Educational, orientation week projects
  protected isEducationalProject(packageJson: PackageJson): boolean {
    return packageJson.testRepo(/\/engw\//);
  }
}
