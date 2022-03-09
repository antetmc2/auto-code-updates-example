import { lastSlash } from '../utils/last-slash';

import AbstractCommand from './abstract-command';

export default class AbstractNeedsMigration extends AbstractCommand {
  static description = 'Checks if project was migrated';

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

  async check(): Promise<boolean> {
    throw new Error('Method "check" is not implemented');
  }

  async run(): Promise<any> {
    const result = await this.check();

    this.log(`${result}`);
  }
}
