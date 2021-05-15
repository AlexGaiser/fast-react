export const clone = (target, map = new WeakMap()) => {
  if (typeof target === 'object') {
    const cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};

export const pipe = (...args) => (x) =>
  args.reduce((v, f) => f(v), x);
