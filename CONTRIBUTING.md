# Contributing to React

idc-op-interface is 2016-2018 IDC laboratory server related operation interface built with electron.js.

## [Code of Conduct](https://code.facebook.com/codeofconduct)

Hustlion has adopted a Code of Conduct from facebook that he expect project participants to adhere to. Please read [the full text](https://code.facebook.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

## Our Development Process


### `master` is unsafe

We will do our best to keep `master` in good shape, with tests passing at all times. But in order to move fast, we will make API changes that your application might not be compatible with. We will do our best to communicate these changes and always version appropriately so you can lock into a specific version if need be.

### Test Suite

Use `grunt test` to run the full test suite with PhantomJS.

This command is just a facade to [Jest](https://facebook.github.io/jest/). You may optionally run `npm install -g jest-cli` and use Jest commands directly to have more control over how tests are executed.

For example, `jest --watch` lets you automatically run the test suite on every file change.

You can also run a subset of tests by passing a prefix to `jest`. For instance, `jest ReactDOMSVG` will only run tests in the files that start with `ReactDOMSVG`, such as `ReactDOMSVG-test.js`.

When you know which tests you want to run, you can achieve a fast feedback loop by using these two features together. For example, `jest ReactDOMSVG --watch` will re-run only the matching tests on every change.

Just make sure to run the whole test suite before submitting a pull request!

### Pull Requests

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

*Before* submitting a pull request, please make sure the following is done…

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests!
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`grunt test`).
5. Make sure your code lints (`grunt lint`).

## Bugs

### Where to Find Known Issues

We will be using GitHub Issues for our public bugs. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. jsFiddle, jsBin, and other sites provide a way to give live examples. Those are especially helpful though may not work for `JSX`-based code.


## Style Guide

Our linter will catch most styling issues that may exist in your code.
You can check the status of your code styling by simply running: `grunt lint`

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

### Code Conventions

* Use semicolons `;`
* Commas last `,`
* 2 spaces for indentation (no tabs)
* Prefer `'` over `"`
* `'use strict';`
* 80 character line length
* Write "attractive" code
* Do not use the optional parameters of `setTimeout` and `setInterval`

### Documentation

* Do not wrap lines at 80 characters

## License

By contributing to idc-op-interface, you agree that your contributions will be licensed under its MIT license.