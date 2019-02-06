const RESOURCE_API_KEY = 'RESOURCE_API_KEY'

function ResourceApi(apiUrl: string) {
  return (target: any) => {
    Reflect.defineMetadata(RESOURCE_API_KEY, apiUrl, target)
  }
}

function applyDefaultResourceApi(target: any) {
  ResourceApi('TODO-DEFAULT-API')(target)
}

export {
  RESOURCE_API_KEY,
  ResourceApi,
  applyDefaultResourceApi
}
