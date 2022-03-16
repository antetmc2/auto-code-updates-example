oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g auto-code-updates-example
$ auto-code-updates-example COMMAND
running command...
$ auto-code-updates-example (--version)
auto-code-updates-example/0.0.1 win32-x64 node-v16.13.0
$ auto-code-updates-example --help [COMMAND]
USAGE
  $ auto-code-updates-example COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g auto-code-updates-example
$ auto-code-updates-example COMMAND
running command...
$ auto-code-updates-example (--version)
auto-code-updates-example/0.0.0 win32-x64 node-v16.13.0
$ auto-code-updates-example --help [COMMAND]
USAGE
  $ auto-code-updates-example COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`auto-code-updates-example eslint-upgrade-commands [PATH]`](#auto-code-updates-example-eslint-upgrade-commands-path)
* [`auto-code-updates-example eslint-upgrade-commands:filter PACKAGEJSONPATH`](#auto-code-updates-example-eslint-upgrade-commandsfilter-packagejsonpath)
* [`auto-code-updates-example eslint-upgrade-commands:get-migration-options MIGRATIONTASK PACKAGEJSONPATH`](#auto-code-updates-example-eslint-upgrade-commandsget-migration-options-migrationtask-packagejsonpath)
* [`auto-code-updates-example eslint-upgrade-commands:needs-migration [PATH]`](#auto-code-updates-example-eslint-upgrade-commandsneeds-migration-path)
* [`auto-code-updates-example hello PERSON`](#auto-code-updates-example-hello-person)
* [`auto-code-updates-example hello:world`](#auto-code-updates-example-helloworld)
* [`auto-code-updates-example help [COMMAND]`](#auto-code-updates-example-help-command)

## `auto-code-updates-example eslint-upgrade-commands [PATH]`

Adds the "lint:fix" command if missing in the projects

```
USAGE
  $ auto-code-updates-example eslint-upgrade-commands [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Adds the "lint:fix" command if missing in the projects

EXAMPLES
  $ auto-code-updates-example eslint-upgrade-commands ~/test_projects/01-project-package-json-with-eslint
```

_See code: [dist/commands/eslint-upgrade-commands/index.ts](https://github.com/antetmc2/auto-code-updates-example/blob/v0.0.1/dist/commands/eslint-upgrade-commands/index.ts)_

## `auto-code-updates-example eslint-upgrade-commands:filter PACKAGEJSONPATH`

Check files in project

```
USAGE
  $ auto-code-updates-example eslint-upgrade-commands:filter [PACKAGEJSONPATH] [-h]

ARGUMENTS
  PACKAGEJSONPATH  [default: ./package.json] Path package.json

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Check files in project

EXAMPLES
  $ auto-code-updates-example eslint-upgrade-commands:filter ~/test_projects/01-project-package-json-with-eslint/package.json
```

_See code: [dist/commands/eslint-upgrade-commands/filter.ts](https://github.com/antetmc2/auto-code-updates-example/blob/v0.0.1/dist/commands/eslint-upgrade-commands/filter.ts)_

## `auto-code-updates-example eslint-upgrade-commands:get-migration-options MIGRATIONTASK PACKAGEJSONPATH`

```
USAGE
  $ auto-code-updates-example eslint-upgrade-commands:get-migration-options [MIGRATIONTASK] [PACKAGEJSONPATH] [-h]

ARGUMENTS
  MIGRATIONTASK    TaskId for PR and branch name
  PACKAGEJSONPATH  [default: ./package.json] Path package.json

FLAGS
  -h, --help  show CLI help

EXAMPLES
  $ auto-code-updates-example eslint-upgrade-commands:get-migration-options DEVOPSJS-01 ~/test_projects/01-project-package-json-with-eslint/package.json
```

_See code: [dist/commands/eslint-upgrade-commands/get-migration-options.ts](https://github.com/antetmc2/auto-code-updates-example/blob/v0.0.1/dist/commands/eslint-upgrade-commands/get-migration-options.ts)_

## `auto-code-updates-example eslint-upgrade-commands:needs-migration [PATH]`

Checks if project was migrated

```
USAGE
  $ auto-code-updates-example eslint-upgrade-commands:needs-migration [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Checks if project was migrated

EXAMPLES
  $ auto-code-updates-example eslint-upgrade-commands:needs-migrate ~/test_projects/01-project-package-json-with-eslint
```

_See code: [dist/commands/eslint-upgrade-commands/needs-migration.ts](https://github.com/antetmc2/auto-code-updates-example/blob/v0.0.1/dist/commands/eslint-upgrade-commands/needs-migration.ts)_

## `auto-code-updates-example hello PERSON`

Say hello

```
USAGE
  $ auto-code-updates-example hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/antetmc2/auto-code-updates-example/blob/v0.0.1/dist/commands/hello/index.ts)_

## `auto-code-updates-example hello:world`

Say hello world

```
USAGE
  $ auto-code-updates-example hello:world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/antetmc2/auto-code-updates-example/blob/v0.0.1/dist/commands/hello/world.ts)_

## `auto-code-updates-example help [COMMAND]`

Display help for auto-code-updates-example.

```
USAGE
  $ auto-code-updates-example help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for auto-code-updates-example.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_
<!-- commandsstop -->
