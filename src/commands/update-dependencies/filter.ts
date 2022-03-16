import AbstractFilter from '../../class/abstract-filter';
import { PackageJson } from '../../class/package-json';
import { FilterResult } from '../../types';

export default class UpdateDependenciesFilter extends AbstractFilter {
  static examples = [
    '$ auto-code-updates-example update-dependencies:filter ~/test_projects/02-project-update-dependencies/package.json',
  ];
  // For running locally: ./bin/run update-dependencies:filter ./test_projects/02-project-update-dependencies/package.json

  static flags = {
    ...AbstractFilter.flags,
  };

  static args = [...AbstractFilter.args];

  async filter(packageJson: PackageJson): Promise<FilterResult> {
    if (!packageJson.hasDependency('react') || !packageJson.hasDependency('react-dom')) {
      return FilterResult.FALSE;
    }

    if (!packageJson.isDependencyOlder('react', '17.0.0') && !packageJson.isDependencyOlder('react-dom', '17.0.0')) {
      return FilterResult.FALSE;
    }

    return super.filter(packageJson);
  }
}
