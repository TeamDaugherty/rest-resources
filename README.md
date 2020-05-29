# REST Resources
A framework-agnostic pattern for integrating with RESTful APIs without boilerplate.

[![Build Status](https://travis-ci.org/TeamDaugherty/rest-resources.svg?branch=master)](https://travis-ci.org/TeamDaugherty/rest-resources) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Usage

For instructions on how to use rest-resources, see the [documentation](https://teamdaugherty.github.io/rest-resources/)

## Contributing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running, you will need to install the following:

* [Node v10](https://nodejs.org)

### Installing

* Install dependencies: `npm i`
* Bootstrap Lerna: `npm run lerna boostrap`
* Install docs dependencies (if necessary): `npm run docs:install`

## Running the tests

Run tests from the repository root: `npm test`

## Editing the Docs

Any good library requires complete and up-to-date documentation. If functionality is added, altered, or removed, the documentation must be changed with it corresponding to the correct version.

The documentation is built with [Docusaurus](https://docusaurus.io). Follow the documentation there when editing files in the `website` and `docs` folders

### Running the docs locally

Simply run `npm run docs:start` to run and open the docs at `http://localhost:3000/rest-resources`. As you edit, the docs will auto-reload in the browser with the resulting build.

## Publishing

Publishing requires permission for this package through npmjs.org.

To publish, run `npm publish`. Publishing uses Lerna.

## Built With

* Lerna
* TypeScript

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/teamdaugherty/rest-resources/tags). 

## Authors

* **Alex White** - *Initial version, documentation*

See also the list of [contributors](https://github.com/teamdaugherty/rest-resources/contributors) who participated in this project.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details
