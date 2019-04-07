const map: Map<any, any> = new Map();
export function register(instance: any) {
  return {
    as(clazz: any) {
      map.set(clazz, instance);
    }
  }
}

export function Inject(clazz: any): PropertyDecorator {
  return function(target: any, propertyKey) {
    Object.defineProperty(target, propertyKey, {
      get() {
        return map.get(clazz);
      }
    });
  }
}
