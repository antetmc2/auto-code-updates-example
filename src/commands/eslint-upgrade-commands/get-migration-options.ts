import AbstractMigrationOptions from '../../class/abstract-migration-options';
import { JobOptions } from '../../types';
import { PackageJson } from '../../class/package-json';
import { WebPRJobNames, WebPRJobParams } from '../../types/create-web-pr';

export default class EslintUpgradeCommandsGetMigrationOptions extends AbstractMigrationOptions {
  static examples = [
    '$ auto-code-updates-example eslint-upgrade-commands:get-migration-options DEVOPSJS-01 ~/test_projects/01-project-package-json-with-eslint/package.json',
  ];
  // For running locally: ./bin/run eslint-upgrade-commands:get-migration-options DEVOPSJS-01 ./test_projects/01-project-package-json-with-eslint/package.json

  static args = [...AbstractMigrationOptions.args];

  async getOptions(packageJson: PackageJson): Promise<JobOptions<WebPRJobNames, WebPRJobParams>> {
    return {
      name: packageJson.getPRName(),
      params: {
        GIT_URL: packageJson.getRepository(),
        GIT_BRANCH: 'main',
        BRANCH_NAME: 'eslint-upgrade',
        JOB_COMMAND: 'npx -p auto-code-updates-example auto-code-updates-example eslint-upgrade-commands',
        PR_TITLE: 'eslint-upgrade-commands',
        TASK_ID: this.args.migrationTask,
      },
    };
  }
}
