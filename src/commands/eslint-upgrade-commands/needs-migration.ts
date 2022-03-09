import AbstractNeedsMigration from '../../class/abstract-needs-migration';
import AbstractMigration from '../../class/abstract-migration';
import { PackageJson } from '../../class/package-json';

export default class EslintUpgradeCommandsNeedsMigration extends AbstractNeedsMigration {
  static examples = [
    '$ auto-code-updates-example eslint-upgrade-commands:needs-migrate ~/test_projects/01-project-package-json-with-eslint',
  ];
  // For running locally: ./bin/run eslint-upgrade-commands:needs-migration ./test_projects/01-project-package-json-with-eslint

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async check(): Promise<boolean> {
    const path = this.args.path;
    const packageJson = new PackageJson(`${path}/package.json`);

    return !packageJson.hasCommand('lint:fix');
  }
}
