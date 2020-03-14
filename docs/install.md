---
id: install
title: Install
---

REST Resources utilizes a common, core package `@daugherty/rest-resources` which all implementations will require.
```commandline
npm i @daugherty/rest-resources
```

To use REST Resources, you will need to also install the appropriate package for your http provider. REST resources currently supports:
* [axios](https://github.com/axios/axios) - `@daugherty/rest-resources-axios`
* _fetch (coming soon)_
* _angular (coming soon)_

For example, to use REST Resources with `axios`, you will additionally install:
```commandline
npm i @daugherty/rest-resources-axios
```
