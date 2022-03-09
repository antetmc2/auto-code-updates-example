import editJsonFile from 'edit-json-file';

import AbstractMigration from '../../class/abstract-migration';

export default class DeprecateI18nImporter extends AbstractMigration {
  static description = 'Adds the "lint:fix" command if missing in the projects';

  static examples = [
    '$ auto-code-updates-example eslint-upgrade-commands ~/test_projects/01-project-package-json-with-eslint',
  ];
  // For running locally: ./bin/run eslint-upgrade-commands ./test_projects/01-project-package-json-with-eslint

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async migrate(): Promise<boolean> {
    const pathToProject = this.args.path;

    await this.step('Adding the "lint:fix" command', () => {
      const file = editJsonFile(`${pathToProject}/package.json`, {
        autosave: true,
      });

      const lintFixScript = file.get('scripts.lint:fix');

      if (!lintFixScript) {
        file.set('scripts.lint:fix', 'npm run lint -- --fix');
      }
    });

    return true;
  }
}
