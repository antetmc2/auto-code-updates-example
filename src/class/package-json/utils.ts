import semver from 'semver';

/**
 * Extracts semver version (major.minor.patch) from package version
 * ^1.2.3 -> 1.2.3
 * ~1.2.3 -> 1.2.3
 * >=1.2.3 -> 1.2.3
 * 1.2.3 -> 1.2.3
 */
export function extractSemverVersion(version: string): string {
  const semverVersion = semver.coerce(version)?.version;
  if (!semverVersion) {
    throw new Error(`Invalid version ${version}`);
  }
  return semverVersion;
}

/**
 * Prefixes semver version with a prefix taken from current version
 */
export function prefixVersion(newSemverVersion: string, currentVersion: string): string {
  const prefix = choosePrefixForNewVersion(currentVersion);
  return `${prefix}${newSemverVersion}`;
}

export function choosePrefixForNewVersion(currentVersion: string): string {
  if (isTildeVersion(currentVersion)) {
    return '~';
  }
  if (isStrictVersion(currentVersion)) {
    return '';
  }
  return '^';
}

export function isTildeVersion(version: string): boolean {
  return version[0] === '~';
}

export function isStrictVersion(version: string): boolean {
  return /[0-9]+/.test(version[0]);
}
