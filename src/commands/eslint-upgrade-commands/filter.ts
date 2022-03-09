import AbstractFilter from '../../class/abstract-filter';
import { PackageJson } from '../../class/package-json';
import { FilterResult } from '../../types';

export default class EslintUpgradeCommandsFilter extends AbstractFilter {
  static examples = [
    '$ auto-code-updates-example eslint-upgrade-commands:filter ~/test_projects/01-project-package-json-with-eslint/package.json',
  ];
  // For running locally: ./bin/run eslint-upgrade-commands:filter ./test_projects/01-project-package-json-with-eslint/package.json

  static flags = {
    ...AbstractFilter.flags,
  };

  static args = [...AbstractFilter.args];

  async filter(packageJson: PackageJson): Promise<FilterResult> {
    if (!packageJson.hasDependency('eslint')) {
      return FilterResult.FALSE;
    }

    return super.filter(packageJson);
  }
}
