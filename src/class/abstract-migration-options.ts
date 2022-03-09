import { JobOptions } from '../types';

import AbstractCommand from './abstract-command';
import { PackageJson } from './package-json';

export default class AbstractMigrationOptions extends AbstractCommand {
  static flags = {
    ...AbstractCommand.flags,
  };

  static args = [
    {
      name: 'migrationTask',
      required: true,
      description: 'TaskId for PR and branch name',
    },
    {
      name: 'packageJsonPath',
      required: true,
      description: 'Path package.json',
      default: './package.json',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getOptions(packageJson: PackageJson): Promise<JobOptions<string, any>> {
    throw new Error('Method "getOptions" is not implemented');
  }

  async run(): Promise<any> {
    const packageJsonPath = this.args.packageJsonPath;

    const file = new PackageJson(packageJsonPath);

    const result = await this.getOptions(file);

    this.log(`${JSON.stringify(result)}`);
  }
}
