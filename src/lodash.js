/* eslint-disable consistent-return */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export const compact = arr => arr.filter(Boolean);

export const concat = (...args) => [].concat(...args);

export const difference = (arr, ...args) =>
  arr.filter(item => args.every(arg => !arg.includes(item)));

export const differenceBy = (array, values, iteratee) => {
  const fn = typeof iteratee === 'function' ? iteratee : item => item[iteratee];
  const valuesSet = new Set(values.map(fn));
  return array.filter(item => !valuesSet.has(fn(item)));
};

export const differenceWith = (array, values, comparator) =>
  array.filter(item => !values.some(value => comparator(item, value)));

export const drop = (arr, n = 1) => arr.slice(n);

export const dropRight = (arr, n = 1) =>
  n >= arr.length ? [] : arr.slice(0, arr.length - n);

export const dropRightWhile = (array, iteratee) => {
  let right = array.length - 1;
  if (typeof iteratee === 'function') {
    while (right >= 0 && iteratee(array[right])) {
      right--;
    }
  }
  if (typeof iteratee === 'object' && !Array.isArray(iteratee)) {
    const entries = Object.entries(iteratee);
    while (right >= 0 && entries.every(([key, value]) => array[right][key] === value)) {
      right--;
    }
  }
  if (Array.isArray(iteratee) && iteratee.length === 2) {
    const [key, value] = iteratee;
    while (right >= 0 && array[right][key] === value) {
      right--;
    }
  }
  if (typeof iteratee === 'string') {
    while (right >= 0 && array[right][iteratee]) {
      right--;
    }
  }
  return array.slice(0, right + 1);
};

export const fill = (arr, value, start = 0, end = arr.length) =>
  arr.fill(value, start, end);

export const findIndex = (arr, predicate) => {
  if (typeof predicate === 'function') {
    return arr.findIndex(predicate);
  }
  if (typeof predicate === 'object' && !Array.isArray(predicate)) {
    return arr.findIndex(item => {
      return Object.keys(predicate).every(key => item[key] === predicate[key]);
    });
  }
  if (Array.isArray(predicate)) {
    const [key, value] = predicate;
    return arr.findIndex(item => item[key] === value);
  }
  if (typeof predicate === 'string') {
    return arr.findIndex(item => item[predicate]);
  }
  return -1;
};

export const findLastIndex = (arr, predicate) => {
  if (typeof predicate === 'function') {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (predicate(arr[i], i, arr)) {
        return i;
      }
    }
  } else if (Array.isArray(predicate)) {
    const [key, value] = predicate;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i][key] === value) {
        return i;
      }
    }
  } else if (typeof predicate === 'object') {
    for (let i = arr.length - 1; i >= 0; i--) {
      const keys = Object.keys(predicate);
      const match = keys.every(key => predicate[key] === arr[i][key]);
      if (match) {
        return i;
      }
    }
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] && arr[i][predicate]) {
        return i;
      }
    }
  }
  return -1;
};

export const head = arr => arr[0];

export const flatten = arr => [].concat(...arr);

export const flattenDeep = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? flattenDeep(v) : v)));

export const fromPairs = arr =>
  arr.reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

export const indexOf = (arr, val, fromIndex = 0) =>
  arr.findIndex((item, index) => index >= fromIndex && item === val);

export const initial = arr => arr.slice(0, -1);

export const intersection = (...arr) => [
  ...new Set(arr.reduce((a, b) => a.filter(v => b.includes(v)))),
];

export const join = (arr, separator = ',') =>
  arr.reduce((res, val, i) => `${res}${i ? separator : ''}${val}`, '');

export const last = arr => arr[arr.length - 1];

export const pull = (arr, ...args) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

export const reverse = arr => {
  arr.reverse();
  return arr;
};

export const sortedIndex = (arr, value) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

export const tail = arr => arr.slice(1);

export const take = (arr, n = 1) => arr.slice(0, n);

export const takeRight = (arr, n = 1) => arr.slice(-n);

export const union = (...args) => [...new Set(args.flat())];

export const uniq = arr => [...new Set(arr)];

export const without = (arr, ...args) => arr.filter(item => !args.includes(item));

export const zip = (...arrays) =>
  arrays[0].map((_, i) => arrays.map(array => array[i]));

export const countBy = (arr, iteratee) => {
  const fn = typeof iteratee === 'function' ? iteratee : val => val[iteratee];
  return arr.reduce((acc, val) => {
    const key = fn(val);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};

export const each = (collection, iteratee) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        iteratee(collection[key], key, collection);
      }
    }
  }
  return collection;
};

export const forEach = each;

export const filter = (collection, predicate) => {
  if (typeof predicate === 'function') {
    return collection.filter(predicate);
  }
  if (typeof predicate === 'object' && !Array.isArray(predicate)) {
    return collection.filter(item =>
      Object.keys(predicate).every(key => item[key] === predicate[key])
    );
  }
  if (Array.isArray(predicate)) {
    const [key, value] = predicate;
    return collection.filter(item => item[key] === value);
  }
  if (typeof predicate === 'string') {
    return collection.filter(item => item[predicate]);
  }
  return collection;
};

export const find = (collection, predicate) => {
  const filtered = filter(collection, predicate);
  return filtered[0];
};

export const map = (collection, iteratee) => {
  if (typeof iteratee === 'function') {
    return collection.map(iteratee);
  }
  if (typeof iteratee === 'string') {
    return collection.map(item => item[iteratee]);
  }
  return collection.map(iteratee);
};

export const reduce = (collection, iteratee, accumulator) => {
  if (Array.isArray(collection)) {
    return collection.reduce(iteratee, accumulator);
  }
  let acc = accumulator;
  for (const key in collection) {
    if (collection.hasOwnProperty(key)) {
      acc = iteratee(acc, collection[key], key, collection);
    }
  }
  return acc;
};

export const size = obj => {
  if (Array.isArray(obj) || typeof obj === 'string') {
    return obj.length;
  }
  return Object.keys(obj).length;
};

export const debounce = (func, wait, options = {}) => {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let result;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;

  if (typeof options === 'boolean') {
    leading = options;
    options = {};
  }

  leading = !!options.leading;
  maxing = 'maxWait' in options;
  trailing = 'trailing' in options ? !!options.trailing : trailing;

  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    lastInvokeTime = time;
    timeoutId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? Math.min(timeWaiting, options.maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= options.maxWait)
    );
  }

  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timeoutId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timeoutId = undefined;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timeoutId = undefined;
  }

  function flush() {
    return timeoutId === undefined ? result : trailingEdge(Date.now());
  }

  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeoutId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timeoutId === undefined) {
      timeoutId = setTimeout(timerExpired, wait);
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
};

export const throttle = (func, wait, options = {}) => {
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;

  const later = () => {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  return function(...newArgs) {
    const now = Date.now();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = newArgs;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

export const get = (obj, path, defaultValue) => {
  const keys = Array.isArray(path) ? path : path.split(/[.[\]]+/).filter(Boolean);
  let result = obj;

  for (const key of keys) {
    if (result == null) {
      return defaultValue;
    }
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
};

export const set = (obj, path, value) => {
  const keys = Array.isArray(path) ? path : path.split(/[.[\]]+/).filter(Boolean);
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {};
    }
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return obj;
};

export const has = (obj, path) => {
  const keys = Array.isArray(path) ? path : path.split(/[.[\]]+/).filter(Boolean);
  let current = obj;

  for (const key of keys) {
    if (current == null || !(key in current)) {
      return false;
    }
    current = current[key];
  }

  return true;
};

export const omit = (obj, props) => {
  const propsArray = Array.isArray(props) ? props : [props];
  const result = { ...obj };
  propsArray.forEach(prop => {
    delete result[prop];
  });
  return result;
};

export const pick = (obj, props) => {
  const propsArray = Array.isArray(props) ? props : [props];
  return propsArray.reduce((result, prop) => {
    if (prop in obj) {
      result[prop] = obj[prop];
    }
    return result;
  }, {});
};

export const keys = obj => Object.keys(obj);

export const values = obj => Object.values(obj);

export const merge = (...objects) => {
  const result = {};

  const mergeDeep = (target, source) => {
    Object.keys(source).forEach(key => {
      if (
        typeof target[key] === 'object' &&
        target[key] !== null &&
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(target[key]) &&
        !Array.isArray(source[key])
      ) {
        target[key] = mergeDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
    return target;
  };

  for (const obj of objects) {
    if (obj) {
      mergeDeep(result, obj);
    }
  }

  return result;
};
