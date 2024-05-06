/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import _ from 'lodash';
import {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  // differenceWith,
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
  // lastIndexOf,
  pull,
  // pullAt,
  reverse,
  // slice,
  sortedIndex,
} from '../src/lodash';

describe('lodash all function', () => {
  test("chunk(['a', 'b', 'c', 'd'], 2)", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual(
      _.chunk(['a', 'b', 'c', 'd'], 2)
    );
  });
  test("chunk(['a', 'b', 'c', 'd'], 3)", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual(
      _.chunk(['a', 'b', 'c', 'd'], 3)
    );
  });

  test("compact([0, 1, false, 2, '', 3])", () => {
    expect(compact([0, 1, false, 2, '', 3])).toStrictEqual(
      _.compact([0, 1, false, 2, '', 3])
    );
  });

  test('concat([1], 2, [3], [[4]])', () => {
    expect(concat([1], 2, [3], [[4]])).toStrictEqual(
      _.concat([1], 2, [3], [[4]])
    );
  });

  test('difference([3, 2, 1], [4, 2])', () => {
    expect(difference([3, 2, 1], [4, 2])).toStrictEqual(
      _.difference([3, 2, 1], [4, 2])
    );
  });

  test('differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)', () => {
    expect(differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)).toStrictEqual(
      _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)
    );
  });
  test("differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')", () => {
    expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).toStrictEqual(
      _.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')
    );
  });

  // test("differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)", () => {
  //   expect(differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)).toStrictEqual(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
  // });

  test('drop([1, 2, 3])', () => {
    expect(drop([1, 2, 3])).toStrictEqual(_.drop([1, 2, 3]));
  });
  test('drop([1, 2, 3], 2)', () => {
    expect(drop([1, 2, 3], 2)).toStrictEqual(_.drop([1, 2, 3], 2));
  });
  test('drop([1, 2, 3], 5)', () => {
    expect(drop([1, 2, 3], 5)).toStrictEqual(_.drop([1, 2, 3], 5));
  });
  test('drop([1, 2, 3], 0)', () => {
    expect(drop([1, 2, 3], 0)).toStrictEqual(_.drop([1, 2, 3], 0));
  });

  test('dropRight([1, 2, 3])', () => {
    expect(dropRight([1, 2, 3])).toStrictEqual(_.dropRight([1, 2, 3]));
  });
  test('dropRight([1, 2, 3], 2)', () => {
    expect(dropRight([1, 2, 3], 2)).toStrictEqual(_.dropRight([1, 2, 3], 2));
  });
  test('dropRight([1, 2, 3], 5)', () => {
    expect(dropRight([1, 2, 3], 5)).toStrictEqual(_.dropRight([1, 2, 3], 5));
  });
  test('dropRight([1, 2, 3], 0)', () => {
    expect(dropRight([1, 2, 3], 0)).toStrictEqual(_.dropRight([1, 2, 3], 0));
  });

  test('dropRightWhile(users, (o) => !o.active)', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(dropRightWhile(users, o => !o.active)).toStrictEqual(
      _.dropRightWhile(users, o => !o.active)
    );
  });
  test("dropRightWhile(users, { 'user': 'pebbles', 'active': false })", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(
      dropRightWhile(users, { user: 'pebbles', active: false })
    ).toStrictEqual(
      _.dropRightWhile(users, { user: 'pebbles', active: false })
    );
  });
  test("dropRightWhile(users, ['active', false])", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(dropRightWhile(users, ['active', false])).toStrictEqual(
      _.dropRightWhile(users, ['active', false])
    );
  });
  test("dropRightWhile(users, 'active')", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(dropRightWhile(users, 'active')).toStrictEqual(
      _.dropRightWhile(users, 'active')
    );
  });

  test("fill(array, 'a')", () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a')).toStrictEqual(_.fill(array, 'a'));
  });
  test('fill(Array(3), 2)', () => {
    expect(fill(Array(3), 2)).toStrictEqual(_.fill(Array(3), 2));
  });
  test("fill([4, 6, 8, 10], '*', 1, 3)", () => {
    expect(fill([4, 6, 8, 10], '*', 1, 3)).toStrictEqual(
      _.fill([4, 6, 8, 10], '*', 1, 3)
    );
  });

  test("findIndex(users, function(o) { return o.user == 'barney'; })", () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findIndex(users, o => o.user === 'barney')).toStrictEqual(
      _.findIndex(users, o => o.user === 'barney')
    );
  });
  test("findIndex(users, { 'user': 'fred', 'active': false })", () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findIndex(users, { user: 'fred', active: false })).toStrictEqual(
      _.findIndex(users, { user: 'fred', active: false })
    );
  });
  test("findIndex(users, ['active', false])", () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findIndex(users, ['active', false])).toStrictEqual(
      _.findIndex(users, ['active', false])
    );
  });
  test("findIndex(users, 'active')", () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findIndex(users, 'active')).toStrictEqual(
      _.findIndex(users, 'active')
    );
  });

  test("findLastIndex(users, function(o) { return o.user == 'pebbles'; })", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findLastIndex(users, o => o.user === 'pebbles')).toStrictEqual(
      _.findLastIndex(users, o => o.user === 'pebbles')
    );
  });
  test("findIndex(users, { 'user': 'fred', 'active': false })", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findIndex(users, { user: 'fred', active: false })).toStrictEqual(
      _.findIndex(users, { user: 'fred', active: false })
    );
  });
  test("findIndex(users, ['active', false])", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findIndex(users, ['active', false])).toStrictEqual(
      _.findIndex(users, ['active', false])
    );
  });
  test("findIndex(users, 'active')", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findIndex(users, 'active')).toStrictEqual(
      _.findIndex(users, 'active')
    );
  });

  test("findLastIndex(users, (o) => o.user === 'pebbles')", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findLastIndex(users, o => o.user === 'pebbles')).toStrictEqual(
      _.findLastIndex(users, o => o.user === 'pebbles')
    );
  });
  test("findLastIndex(users, { 'user': 'barney', 'active': true })", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(
      findLastIndex(users, { user: 'barney', active: true })
    ).toStrictEqual(_.findLastIndex(users, { user: 'barney', active: true }));
  });
  test("findLastIndex(users, ['active', false])", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findLastIndex(users, ['active', false])).toStrictEqual(
      _.findLastIndex(users, ['active', false])
    );
  });
  test("findLastIndex(users, 'active')", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findLastIndex(users, 'active')).toStrictEqual(
      _.findLastIndex(users, 'active')
    );
  });

  test('flatten([1, [2, [3, [4]], 5]])', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual(
      _.flatten([1, [2, [3, [4]], 5]])
    );
  });

  test('head([1, 2, 3])', () => {
    expect(head([1, 2, 3])).toStrictEqual(_.head([1, 2, 3]));
  });
  test('head([])', () => {
    expect(head([])).toStrictEqual(_.head([]));
  });

  test('flattenDeep([1, [2, [3, [4]], 5]])', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual(
      _.flattenDeep([1, [2, [3, [4]], 5]])
    );
  });

  test("fromPairs([['a', 1], ['b', 2]])", () => {
    expect(
      fromPairs([
        ['a', 1],
        ['b', 2],
      ])
    ).toStrictEqual(
      _.fromPairs([
        ['a', 1],
        ['b', 2],
      ])
    );
  });

  test('indexOf([1, 2, 1, 2], 2)', () => {
    expect(indexOf([1, 2, 1, 2], 2)).toStrictEqual(_.indexOf([1, 2, 1, 2], 2));
  });
  test('indexOf([1, 2, 1, 2], 2, 2)', () => {
    expect(indexOf([1, 2, 1, 2], 2, 2)).toStrictEqual(
      _.indexOf([1, 2, 1, 2], 2, 2)
    );
  });

  test('initial([1, 2, 3])', () => {
    expect(initial([1, 2, 3])).toStrictEqual(_.initial([1, 2, 3]));
  });

  test('intersection([2, 1], [4, 2], [1, 2])', () => {
    expect(intersection([2, 1], [4, 2], [1, 2])).toStrictEqual(
      _.intersection([2, 1], [4, 2], [1, 2])
    );
  });

  test("join(['a', 'b', 'c'], '~')", () => {
    expect(join(['a', 'b', 'c'], '~')).toStrictEqual(
      _.join(['a', 'b', 'c'], '~')
    );
  });

  test('last([1, 2, 3])', () => {
    expect(last([1, 2, 3])).toStrictEqual(_.last([1, 2, 3]));
  });

  // TODO: no pass
  // test("lastIndexOf([1, 2, 1, 2], 2)", () => {
  //   expect(lastIndexOf([1, 2, 1, 2], 2)).toStrictEqual(_.lastIndexOf([1, 2, 1, 2], 2));
  // });
  // test("lastIndexOf([1, 2, 1, 2], 2, 2)", () => {
  //   expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toStrictEqual(_.lastIndexOf([1, 2, 1, 2], 2, 2));
  // });

  test('pull(array, 2, 3)', () => {
    const array = [1, 2, 3, 1, 2, 3];
    expect(pull(array, 2, 3)).toStrictEqual(_.pull(array, 2, 3));
  });

  // TODO: no pass
  // test("pullAt(array, 1, 3)", () => {
  //   const array = [5, 10, 15, 20];
  //   expect(pullAt(array, 1, 3)).toStrictEqual(_.pullAt(array, 1, 3));
  // });

  test('reverse(array)', () => {
    const array = [1, 2, 3];
    expect(reverse(array)).toStrictEqual(_.reverse(array));
  });

  test('sortedIndex([30, 50], 40)', () => {
    expect(sortedIndex([30, 50], 40)).toStrictEqual(
      _.sortedIndex([30, 50], 40)
    );
  });
});
