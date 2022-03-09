import { lastSlash } from '../utils/last-slash';

import AbstractCommand from './abstract-command';
import { PackageJson } from './package-json';

export default class AbstractMigration extends AbstractCommand {
  static flags = {
    ...AbstractCommand.flags,
  };

  static args = [
    {
      name: 'path',
      required: false,
      description: 'Path to project',
      default: './',
      parse: lastSlash,
    },
  ];

  async migrate(): Promise<boolean> {
    throw new Error('Method "migrate" is not implemented');
  }

  async run(): Promise<any> {
    const result = await this.migrate();
    this.log(`${result}`);
  }

  async step(description: string, handler: () => void | string | Promise<void | string>) {
    this.log(`### ${description} ###`);
    const result = await handler.apply(this);
    this.log(`### ${description} - done ###`, result || '');
    this.log('');
  }

  getPackageJSON(): PackageJson {
    return new PackageJson(`${this.args.path}package.json`);
  }
}
