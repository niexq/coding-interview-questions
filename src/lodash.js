/* eslint-disable consistent-return */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
const compact = (arr) => arr.filter(Boolean);
const concat = (...args) => [].concat(...args);
const difference = (arr, ...args) => arr.filter((item) => args.every((arg) => !arg.includes(item)));
const differenceBy = (array, values, iteratee) => {
  const fn = typeof iteratee === 'function' ? iteratee : item => item[iteratee];
  const valuesSet = new Set(values.map(fn));
  return array.filter(item => !valuesSet.has(fn(item)));
};
const differenceWith = (array, values, comparator) => array.filter(item => !values.some(value => comparator(item, value)));
const drop = (arr, n = 1) => arr.slice(n);
const dropRight = (arr, n = 1) => (n >= arr.length ? [] : arr.slice(0, arr.length - n));
const dropRightWhile = (array, iteratee) => {
  let right = array.length - 1;
  if (typeof iteratee === 'function') {
    while (iteratee(array[right])) {
      right--;
    }
  }
  if (typeof iteratee === 'object' && !Array.isArray(iteratee)) {
    const entries = Object.entries(iteratee);
    while (entries.every(([key, value]) => array[right][key] === value)) {
      right--;
    }
  }
  if (Array.isArray(iteratee) && iteratee.length === 2) {
    const [key, value] = iteratee;
    while (array[right][key] === value) {
      right--;
    }
  }
  return array.slice(0, right + 1);
};
const fill = (arr, value, start = 0, end = arr.length) => arr.fill(value, start, end);
const findIndex = (arr, iteratee) => {
  if (typeof iteratee === "function") {
    return arr.findIndex(iteratee);
  }
  if (Array.isArray(iteratee) && iteratee.length === 2) {
    const [key, value] = iteratee;
    return arr.findIndex((item) => item[key] === value);
  }
  if (typeof iteratee === "string") {
    return arr.findIndex((item) => item[iteratee]);
  }
  if (typeof iteratee === "object") {
    return arr.findIndex((item) => Object.keys(iteratee).every((key) => item[key] === iteratee[key]));
  }
};
const findLastIndex = (arr, predicate) => {
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
      const match = keys.every((key) => predicate[key] === arr[i][key]);
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
const head = arr => arr[0];
const flatten = arr => [].concat(...arr);
const flattenDeep = arr => [].concat(...arr.map(v => (Array.isArray(v) ? flattenDeep(v) : v)));
const fromPairs = arr => arr.reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});
const indexOf = (arr, val, fromIndex = 0) => arr.findIndex((item, index) => index >= fromIndex && item === val);
const initial = arr => arr.slice(0, -1);
const intersection = (...arr) => [
  ...new Set(arr.reduce((a, b) => a.filter(v => b.includes(v)))),
];
const join = (arr, separator = ',') => arr.reduce((res, val, i) => `${res}${i ? separator : ''}${val}`, '');
const last = arr => arr[arr.length - 1];
const lastIndexOf = (arr, val) => arr.lastIndexOf(val);
const pull = (arr, ...args) => arr.filter(item => !args.includes(item));
const pullAt = (arr, ...args) => args.map(index => arr.splice(index, 1)[0]);
const reverse = arr => [...arr].reverse();
const slice = (arr, start, end) => arr.slice(start, end);

const module = {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  fill,
  findIndex,
  findLastIndex,
  head,
  flatten,
  flattenDeep,
  fromPairs,
  indexOf,
  initial,
  intersection,
  join,
  last,
  lastIndexOf,
  pull,
  pullAt,
  reverse,
  slice,
};

module.exports = module;

export default module;
