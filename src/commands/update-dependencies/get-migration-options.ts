import AbstractMigrationOptions from '../../class/abstract-migration-options';
import { JobOptions } from '../../types';
import { PackageJson } from '../../class/package-json';
import { WebPRJobNames, WebPRJobParams } from '../../types/create-web-pr';

export default class EslintUpgradeCommandsGetMigrationOptions extends AbstractMigrationOptions {
  static examples = [
    '$ auto-code-updates-example update-dependencies:get-migration-options DEVOPSJS-01 ~/test_projects/02-project-update-dependencies/package.json',
  ];
  // For running locally: ./bin/run update-dependencies:get-migration-options DEVOPSJS-01 ./test_projects/02-project-update-dependencies/package.json

  static args = [...AbstractMigrationOptions.args];

  async getOptions(packageJson: PackageJson): Promise<JobOptions<WebPRJobNames, WebPRJobParams>> {
    return {
      name: packageJson.getPRName(),
      params: {
        GIT_URL: packageJson.getRepository(),
        GIT_BRANCH: 'main',
        BRANCH_NAME: 'update-dependencies',
        JOB_COMMAND: 'npx -p auto-code-updates-example auto-code-updates-example update-dependencies',
        PR_TITLE: 'update-dependencies',
        TASK_ID: this.args.migrationTask,
      },
    };
  }
}
