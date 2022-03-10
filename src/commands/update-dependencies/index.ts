import { exec, cd } from 'shelljs';

import AbstractMigration from '../../class/abstract-migration';

export default class DeprecateI18nImporter extends AbstractMigration {
  static description = 'Adds the "lint:fix" command if missing in the projects';

  static examples = ['$ auto-code-updates-example update-dependencies ~/test_projects/02-project-update-dependencies'];
  // For running locally: ./bin/run update-dependencies ./test_projects/02-project-update-dependencies

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async migrate(): Promise<boolean> {
    const pathToProject = this.args.path;

    cd(pathToProject);

    await this.step('Updating "react" and "react-dom" to 17.x', () => {
      exec('npm install -P react@17.x');
      exec('npm install -P react-dom@17.x');
      exec('npm install -D @types/react@17.x');
      exec('npm install -D @types/react-dom@17.x');
    });

    return true;
  }
}
