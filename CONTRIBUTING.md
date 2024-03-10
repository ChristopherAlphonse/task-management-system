# Contributing

## Questions

If you have questions about implementation details, help or support, then please use our dedicated community forum at [Github Discussions](https://github.com/task-management-system/discussions) **PLEASE NOTE:** If you choose to instead open an issue for your question, your issue will be immediately closed and redirected to the forum.

## Reporting Issues

If you have found what you think is a bug, please [file an issue](https://github.com/ChristopherAlphonse/task-management-system/issues/new), Track issues [kanban](https://github.com/users/ChristopherAlphonse/projects/4/views/2).

## Suggesting new features

If you are here to suggest a feature, first create an issue if it does not already exist. From there, we will discuss use-cases for the feature and then finally discuss how it could be implemented.

## Development

Before proceeding with development, ensure you match one of the following criteria:

- Fixing a small bug
- Fixing a larger issue that has been previously discussed and agreed-upon by maintainers
- Adding a new feature that has been previously discussed and agreed-upon by maintainers

## Development Workflow

- Fork this repository, we prefer the `feat-*` branch name style
- Ensure you have `pnpm` installed
- Update to the [Node LTS](https://nodejs.org/en)
- Install projects dependencies and linkages by running `pnpm install`
- Auto-build and auto-test files as you edit by running `pnpm dev`
- Implement your changes and tests
- To run examples, follow their individual directions. Usually this includes:
  - Installing dependencies with `pnpm install` (from the root directory of the workspace)
  - Starting the dev server with `pnpm start` (from the example directory)
- To test in your own projects:
  - Build/watch for changes with `pnpm build`/`pnpm dev`
- Document your changes in the appropriate documentation website markdown pages
- Commit your work and open a pull request
- Submit PR for review
