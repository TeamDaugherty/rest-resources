import {applyDefaultResourcePaths, RESOURCE_PATHS_KEY} from './resource-paths.decorator';

const RESOURCE_NAME_KEY = 'RESOURCE_NAME_KEY';

function Resource(resourceName: string) {
  return (target: any) => {
    Reflect.defineMetadata(RESOURCE_NAME_KEY, resourceName, target);

    // Define default paths if not already defined by @ResourcePaths
    if (!Reflect.getMetadata(RESOURCE_PATHS_KEY, target)) {
      applyDefaultResourcePaths(resourceName, target);
    }
  };
}

export {
  RESOURCE_NAME_KEY,
  Resource
};
