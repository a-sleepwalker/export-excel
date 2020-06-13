export function loadModules<T>(modules: any, target: T): T {
  const isArray = Array.isArray(target);
  return modules.keys().reduce((p: any, c: string) => {
    const name = c.replace(/(?<path>\.\/)|(?<ext>\.\w+$)/g, '');
    return isArray
      ? [...p, modules(c).default]
      : {...p, [name]: modules(c).default};
  }, target);
}
