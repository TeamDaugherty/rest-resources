const RESOURCE_KEY_KEY = 'RESOURCE_KEY_KEY';

function ResourceKey() {
  return (target: any, property: string) => {
    Reflect.defineMetadata(RESOURCE_KEY_KEY, property, target.constructor);
  };
}

export {
  RESOURCE_KEY_KEY,
  ResourceKey
};
