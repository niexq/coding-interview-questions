// 数组方法
export const append = (el, arr) => [...arr, el];

export const prepend = (el, arr) => [el, ...arr];

export const concat = (...arrays) =>
  arrays.reduce((result, array) => [...result, ...array], []);

export const contains = (val, arr) => arr.includes(val);

export const drop = (n, arr) => arr.slice(n);

export const dropLast = (n, arr) => arr.slice(0, -n || arr.length);

export const filter = (predicate, arr) => arr.filter(predicate);

export const find = (predicate, arr) => arr.find(predicate);

export const findIndex = (predicate, arr) => arr.findIndex(predicate);

export const flatten = arr => [].concat(...arr);

export const head = arr => arr[0];

export const indexOf = (val, arr) => arr.indexOf(val);

export const init = arr => arr.slice(0, -1);

export const join = (separator, arr) => arr.join(separator);

export const last = arr => arr[arr.length - 1];

export const map = (fn, arr) => arr.map(fn);

export const pluck = (key, arr) => arr.map(obj => obj[key]);

export const reduce = (fn, initial, arr) => arr.reduce(fn, initial);

export const reject = (predicate, arr) => arr.filter(x => !predicate(x));

export const reverse = arr => [...arr].reverse();

export const slice = (start, end, arr) => arr.slice(start, end);

export const sort = (compareFn, arr) => [...arr].sort(compareFn);

export const tail = arr => arr.slice(1);

export const take = (n, arr) => arr.slice(0, n);

export const takeLast = (n, arr) => arr.slice(Math.max(0, arr.length - n));

export const uniq = arr => [...new Set(arr)];

export const update = (idx, val, arr) => {
  const result = [...arr];
  result[idx] = val;
  return result;
};

export const without = (values, arr) => arr.filter(item => !values.includes(item));

export const zip = (...arrays) =>
  arrays[0].map((_, i) => arrays.map(array => array[i]));

export const zipObj = (keys, values) =>
  keys.reduce((obj, key, i) => ({ ...obj, [key]: values[i] }), {});

// 对象方法
export const assoc = (prop, val, obj) => ({ ...obj, [prop]: val });

export const dissoc = (prop, obj) => {
  const result = { ...obj };
  delete result[prop];
  return result;
};

export const has = (prop, obj) => prop in obj;

export const keys = obj => Object.keys(obj);

export const lens = (getter, setter) => ({
  get: getter,
  set: setter,
});

export const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });

export const omit = (props, obj) => {
  const propsArray = Array.isArray(props) ? props : [props];
  const result = { ...obj };
  propsArray.forEach(prop => {
    delete result[prop];
  });
  return result;
};

export const path = (pathArr, obj) => {
  let val = obj;
  for (const prop of pathArr) {
    if (val == null) return undefined;
    val = val[prop];
  }
  return val;
};

export const pick = (props, obj) => {
  const propsArray = Array.isArray(props) ? props : [props];
  return propsArray.reduce((result, prop) => {
    if (prop in obj) {
      result[prop] = obj[prop];
    }
    return result;
  }, {});
};

export const prop = (p, obj) => obj[p];

export const toPairs = obj => Object.entries(obj);

export const values = obj => Object.values(obj);

// 函数方法
export const always = x => () => x;

export const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

export const curry = (fn, arity = fn.length) =>
  function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };

export const flip = fn => (a, b, ...args) => fn(b, a, ...args);

export const identity = x => x;

export const memoize = fn => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

export const tap = fn => x => {
  fn(x);
  return x;
};

// 逻辑方法
export const all = (predicate, arr) => arr.every(predicate);

export const any = (predicate, arr) => arr.some(predicate);

export const both = (pred1, pred2) => (...args) => pred1(...args) && pred2(...args);

export const either = (pred1, pred2) => (...args) => pred1(...args) || pred2(...args);

export const equals = (a, b) => {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!equals(a[i], b[i])) return false;
    }
    return true;
  }
  if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (!equals(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
};

export const isEmpty = x => {
  if (x == null) return true;
  if (Array.isArray(x) || typeof x === 'string') return x.length === 0;
  if (typeof x === 'object') return Object.keys(x).length === 0;
  return false;
};

export const not = x => !x;

// 字符串方法
export const match = (regex, str) => str.match(regex) || [];

export const replace = (pattern, replacement, str) => str.replace(pattern, replacement);

export const split = (sep, str) => str.split(sep);

export const test = (pattern, str) => pattern.test(str);

export const toLower = str => str.toLowerCase();

export const toUpper = str => str.toUpperCase();

export const trim = str => str.trim();
