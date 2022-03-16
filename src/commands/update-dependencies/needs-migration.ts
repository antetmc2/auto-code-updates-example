import AbstractNeedsMigration from '../../class/abstract-needs-migration';
import AbstractMigration from '../../class/abstract-migration';

export default class EslintUpgradeCommandsNeedsMigration extends AbstractNeedsMigration {
  static examples = [
    '$ auto-code-updates-example update-dependencies:needs-migrate ~/test_projects/02-project-update-dependencies',
  ];
  // For running locally: ./bin/run update-dependencies:needs-migration ./test_projects/02-project-update-dependencies

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async check(): Promise<boolean> {
    return true;
  }
}
