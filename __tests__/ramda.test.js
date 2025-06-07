import {
  // 数组方法
  append,
  prepend,
  contains,
  drop,
  dropLast,
  filter,
  find,
  findIndex,
  flatten,
  head,
  indexOf,
  init,
  join,
  last,
  map,
  pluck,
  reduce,
  reject,
  reverse,
  slice,
  sort,
  tail,
  take,
  takeLast,
  uniq,
  update,
  without,
  zip,
  zipObj,
  // 对象方法
  assoc,
  dissoc,
  has,
  keys,
  lens,
  merge,
  omit,
  path,
  pick,
  prop,
  toPairs,
  values,
  // 函数方法
  always,
  compose,
  curry,
  flip,
  identity,
  memoize,
  pipe,
  tap,
  // 逻辑方法
  all,
  any,
  both,
  either,
  equals,
  isEmpty,
  not,
  // 字符串方法
  match,
  replace,
  split,
  test,
  toLower,
  toUpper,
  trim
} from '../src/ramda';

describe('Ramda 数组方法', () => {
  test('append', () => {
    expect(append('tests', ['write', 'more'])).toEqual(['write', 'more', 'tests']);
    expect(append('c', ['a', 'b'])).toEqual(['a', 'b', 'c']);
    expect(append('c', [])).toEqual(['c']);
  });

  test('prepend', () => {
    expect(prepend('fee', ['fi', 'fo', 'fum'])).toEqual(['fee', 'fi', 'fo', 'fum']);
    expect(prepend('a', ['b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(prepend('a', [])).toEqual(['a']);
  });

  test('contains', () => {
    expect(contains(3, [1, 2, 3])).toBe(true);
    expect(contains(4, [1, 2, 3])).toBe(false);
  });

  test('drop', () => {
    expect(drop(1, ['foo', 'bar', 'baz'])).toEqual(['bar', 'baz']);
    expect(drop(2, ['foo', 'bar', 'baz'])).toEqual(['baz']);
    expect(drop(3, ['foo', 'bar', 'baz'])).toEqual([]);
  });

  test('dropLast', () => {
    expect(dropLast(1, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar']);
    expect(dropLast(2, ['foo', 'bar', 'baz'])).toEqual(['foo']);
    expect(dropLast(3, ['foo', 'bar', 'baz'])).toEqual([]);
  });

  test('filter', () => {
    const isEven = x => x % 2 === 0;
    expect(filter(isEven, [1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test('find', () => {
    const isEven = x => x % 2 === 0;
    expect(find(isEven, [1, 2, 3, 4])).toBe(2);
    expect(find(isEven, [1, 3, 5])).toBeUndefined();
  });

  test('findIndex', () => {
    const isEven = x => x % 2 === 0;
    expect(findIndex(isEven, [1, 2, 3, 4])).toBe(1);
    expect(findIndex(isEven, [1, 3, 5])).toBe(-1);
  });

  test('flatten', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });

  test('head', () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head([])).toBeUndefined();
  });

  test('indexOf', () => {
    expect(indexOf(2, [1, 2, 3, 2])).toBe(1);
    expect(indexOf(4, [1, 2, 3])).toBe(-1);
  });

  test('init', () => {
    expect(init([1, 2, 3])).toEqual([1, 2]);
    expect(init([1, 2])).toEqual([1]);
    expect(init([1])).toEqual([]);
  });

  test('join', () => {
    expect(join('~', ['a', 'b', 'c'])).toBe('a~b~c');
    expect(join('', ['a', 'b', 'c'])).toBe('abc');
  });

  test('last', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([])).toBeUndefined();
  });

  test('map', () => {
    const double = x => x * 2;
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
  });

  test('pluck', () => {
    const people = [
      { name: 'fred', age: 29 },
      { name: 'wilma', age: 27 }
    ];
    expect(pluck('age', people)).toEqual([29, 27]);
    expect(pluck('name', people)).toEqual(['fred', 'wilma']);
  });

  test('reduce', () => {
    const add = (a, b) => a + b;
    expect(reduce(add, 0, [1, 2, 3, 4])).toBe(10);
  });

  test('reject', () => {
    const isEven = x => x % 2 === 0;
    expect(reject(isEven, [1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  });

  test('reverse', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('slice', () => {
    expect(slice(1, 3, [1, 2, 3, 4, 5])).toEqual([2, 3]);
  });

  test('sort', () => {
    expect(sort((a, b) => a - b, [3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });

  test('tail', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
    expect(tail([1])).toEqual([]);
  });

  test('take', () => {
    expect(take(2, [1, 2, 3, 4, 5])).toEqual([1, 2]);
    expect(take(3, [1, 2])).toEqual([1, 2]);
  });

  test('takeLast', () => {
    expect(takeLast(2, [1, 2, 3, 4, 5])).toEqual([4, 5]);
    expect(takeLast(3, [1, 2])).toEqual([1, 2]);
  });

  test('uniq', () => {
    expect(uniq([1, 1, 2, 1])).toEqual([1, 2]);
    expect(uniq([1, '1'])).toEqual([1, '1']);
  });

  test('update', () => {
    expect(update(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
  });

  test('without', () => {
    expect(without([1, 2], [1, 2, 1, 3, 4])).toEqual([3, 4]);
  });

  test('zip', () => {
    expect(zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  test('zipObj', () => {
    expect(zipObj(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
  });
});

describe('Ramda 对象方法', () => {
  test('assoc', () => {
    expect(assoc('c', 3, { a: 1, b: 2 })).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('dissoc', () => {
    expect(dissoc('b', { a: 1, b: 2, c: 3 })).toEqual({ a: 1, c: 3 });
  });

  test('has', () => {
    expect(has('a', { a: 1, b: 2 })).toBe(true);
    expect(has('c', { a: 1, b: 2 })).toBe(false);
  });

  test('keys', () => {
    expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
  });

  test('lens', () => {
    const nameLens = lens(
      obj => obj.name,
      (val, obj) => ({ ...obj, name: val })
    );
    const person = { name: 'Alice', age: 30 };
    expect(nameLens.get(person)).toBe('Alice');
    expect(nameLens.set('Bob', person)).toEqual({ name: 'Bob', age: 30 });
  });

  test('merge', () => {
    expect(merge({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('omit', () => {
    expect(omit(['a', 'c'], { a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, d: 4 });
  });

  test('path', () => {
    expect(path(['a', 'b'], { a: { b: 2 } })).toBe(2);
    expect(path(['a', 'b'], { c: { b: 2 } })).toBeUndefined();
  });

  test('pick', () => {
    expect(pick(['a', 'c'], { a: 1, b: 2, c: 3, d: 4 })).toEqual({ a: 1, c: 3 });
  });

  test('prop', () => {
    expect(prop('x', { x: 100 })).toBe(100);
    expect(prop('x', {})).toBeUndefined();
  });

  test('toPairs', () => {
    expect(toPairs({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  });

  test('values', () => {
    expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
  });
});

describe('Ramda 函数方法', () => {
  test('always', () => {
    const t = always('Tee');
    expect(t()).toBe('Tee');
    expect(t()).toBe('Tee');
  });

  test('compose', () => {
    const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last;
    const yellGreeting = compose(s => s.toUpperCase(), classyGreeting);
    expect(yellGreeting({ first: 'James', last: 'Bond' })).toBe("THE NAME'S BOND, JAMES BOND");
  });

  test('curry', () => {
    const add = curry((a, b, c) => a + b + c);
    expect(add(1)(2)(3)).toBe(6);
    expect(add(1, 2)(3)).toBe(6);
    expect(add(1)(2, 3)).toBe(6);
    expect(add(1, 2, 3)).toBe(6);
  });

  test('flip', () => {
    const mergeThree = (a, b, c) => [].concat(a, b, c);
    expect(flip(mergeThree)(1, 2, 3)).toEqual([2, 1, 3]);
  });

  test('identity', () => {
    expect(identity(1)).toBe(1);
    expect(identity('hello')).toBe('hello');
    expect(identity({ a: 1 })).toEqual({ a: 1 });
  });

  test('memoize', () => {
    let callCount = 0;
    const fn = memoize(x => {
      callCount++;
      return x * 2;
    });

    expect(fn(2)).toBe(4);
    expect(callCount).toBe(1);
    expect(fn(2)).toBe(4);
    expect(callCount).toBe(1); // 应该使用缓存，不增加调用次数
  });

  test('pipe', () => {
    const f = pipe(x => x + 1, x => x * 2);
    expect(f(3)).toBe(8); // (3 + 1) * 2 = 8
  });

  test('tap', () => {
    let sideEffect = '';
    const sayX = x => { sideEffect = 'x is ' + x; };
    const result = tap(sayX)(100);
    expect(result).toBe(100);
    expect(sideEffect).toBe('x is 100');
  });
});

describe('Ramda 逻辑方法', () => {
  test('all', () => {
    expect(all(x => x <= 5, [1, 2, 3, 4, 5])).toBe(true);
    expect(all(x => x <= 4, [1, 2, 3, 4, 5])).toBe(false);
  });

  test('any', () => {
    expect(any(x => x > 4, [1, 2, 3, 4, 5])).toBe(true);
    expect(any(x => x > 5, [1, 2, 3, 4, 5])).toBe(false);
  });

  test('both', () => {
    const gt10 = x => x > 10;
    const lt20 = x => x < 20;
    const f = both(gt10, lt20);
    expect(f(15)).toBe(true);
    expect(f(30)).toBe(false);
    expect(f(5)).toBe(false);
  });

  test('either', () => {
    const gt20 = x => x > 20;
    const lt5 = x => x < 5;
    const f = either(gt20, lt5);
    expect(f(15)).toBe(false);
    expect(f(25)).toBe(true);
    expect(f(3)).toBe(true);
  });

  test('equals', () => {
    expect(equals(1, 1)).toBe(true);
    expect(equals(1, '1')).toBe(false);
    expect(equals([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(equals([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(equals({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(equals({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
  });

  test('isEmpty', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('not', () => {
    expect(not(true)).toBe(false);
    expect(not(false)).toBe(true);
    expect(not(0)).toBe(true);
    expect(not(1)).toBe(false);
  });
});

describe('Ramda 字符串方法', () => {
  test('match', () => {
    expect(match(/([a-z]a)/g, 'bananas')).toEqual(['ba', 'na', 'na']);
    expect(match(/a/, 'b')).toEqual([]);
  });

  test('replace', () => {
    expect(replace('foo', 'bar', 'foo foo foo')).toBe('bar foo foo');
    expect(replace(/foo/g, 'bar', 'foo foo foo')).toBe('bar bar bar');
  });

  test('split', () => {
    expect(split('.', 'a.b.c.xyz.d')).toEqual(['a', 'b', 'c', 'xyz', 'd']);
  });

  test('test', () => {
    expect(test(/^x/, 'xyz')).toBe(true);
    expect(test(/^y/, 'xyz')).toBe(false);
  });

  test('toLower', () => {
    expect(toLower('XYZ')).toBe('xyz');
  });

  test('toUpper', () => {
    expect(toUpper('abc')).toBe('ABC');
  });

  test('trim', () => {
    expect(trim('   xyz  ')).toBe('xyz');
  });
});
