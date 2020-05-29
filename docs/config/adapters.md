---
id: adapters
title: Adapters
---

REST Resources relies on a `ResourceAdapter` to make http requests, regardless of http provider. Each http provider that REST Resources supports ships with an adapter that can be used as-is or extended from. Alternatively, any adapter meeting the [`IResourceAdapter`](resources.md#iresourcepaths) interface can be used

## Default Adapter
The simplest REST Resources setup using all default configuration requires only the configuration of a `defaultResourceAdapter`.

## Provided Adapters
* Axios
```typescript
import {ResourceConfig} from '@daugherty/rest-resources'
import {AxiosResourceAdapter} from '@daugherty/rest-resources-axios'
import axios from 'axios'

ResourceConfig.defaultResourceAdapter = AxiosResourceAdapter.bind(null, axios)
```
