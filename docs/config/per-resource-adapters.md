---
id: per-resource-adapters
title: Per-Resource Adapters
---

In some cases, using a single `ResourceAdapter` for all `Resource`s is insufficient. A `Resource` may interact with an API that follows a different convention than the default. For example, an API might return data in a different structure for one `Resource` vs another, some additional logic may need to be performed when getting data for one `Resource`, and/or you might be transitioning from one API pattern to another and not all `Resource`s have been migrated to that pattern. For this case, a `ResourceAdapter` can be "registered" to a `Resource` prototype which will be used instead of the default.

...TODO show examples.
