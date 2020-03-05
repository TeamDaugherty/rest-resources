---
id: install
title: Install
---

Rest Resources utilizes a common, core package `@daugherty/rest-resources` which all implementations will require.
```commandline
npm i @daugherty/rest-resources
```

To use Rest Resources, you will need to also install the appropriate package for your http provider. Rest resources currently supports:
* [axios](https://github.com/axios/axios) - `@daugherty/rest-resources-axios`
* _fetch (coming soon)_
* _angular (coming soon)_

For example, to use Rest Resources with `axios`, you will additionally install:
```commandline
npm i @daugherty/rest-resources-axios
```
