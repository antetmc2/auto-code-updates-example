import { Command, flags } from '@oclif/command';
import { Input, OutputArgs, OutputFlags } from '@oclif/parser';

export default class AbstractCommand extends Command {
  static flags = {
    help: flags.help({ char: 'h' }),
  };

  protected args: OutputArgs = {};
  protected flags: OutputFlags<any> = {};

  async init() {
    const { args, flags } = this.parse(<Input<any>>this.constructor);

    this.args = args;
    this.flags = flags;
  }

  run(): PromiseLike<any> {
    throw new Error('Method run is not implemented');
  }
}
