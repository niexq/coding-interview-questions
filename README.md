# 🔥 coding-interview-questions

前端常用工具库及高频面试题

### 目录

| 序号 | 系列                                                                                 | 测试    |
| ---- | ------------------------------------------------------------------------------------ | ------- |
| 1    | [✅ Lodash 函数列表](#lodash-函数列表)                                               | ✅ 通过 |
| 2    | [✅ Ramda 函数列表](#ramda-函数列表)                                                 | ✅ 通过 |
| 3    | [✅ React 面试题](#react-面试题)                                                     | ✅ 通过 |
| 4    | [✅ Vue 面试题](#vue-面试题)                                                         | ✅ 通过 |
| 5    | [✅ JavaScript 面试题](#javascript-面试题)                                           | ✅ 通过 |
| 6    | [✅ TypeScript 面试题](#typescript-面试题)                                           | ✅ 通过 |

## Lodash

> Lodash 是一个 JavaScript 工具库

### Lodash 函数列表

**[数组](#数组)**

1. [chunk：将一个数组分成多个小数组](#chunk)
1. [compact：去除数组中的假值（false、null、0、""、undefined、NaN）](#compact)
1. [concat：合并多个数组](#concat)
1. [difference：返回一个数组，包含在第一个数组中但不在其他数组中的元素](#difference)
1. [differenceBy：与 difference 类似，但是可以指定一个函数对比数组中的元素](#differenceby)
1. [differenceWith: 从第一个数组中过滤出第二个数组中没有的元素，使用一个自定义比较函数进行比较。](#differencewith)
1. [drop：返回一个新数组，去掉原数组中的前 n 个元素](#drop)
1. [dropRight：返回一个新数组，去掉原数组中的后 n 个元素](#dropright)
1. [dropRightWhile：返回一个新数组，去掉原数组中从最后一个符合条件的元素到结尾之间的元素](#droprightwhile)
1. [fill：用指定的值填充数组](#fill)
1. [findIndex：返回第一个符合条件的元素的下标](#findindex)
1. [findLastIndex：返回最后一个符合条件的元素的下标](#findlastindex)
1. [head：返回数组中的第一个元素](#head)
1. [flatten：将多维数组转化为一维数组](#flatten)
1. [flattenDeep：将多维数组转化为一维数组，递归进行](#flattendeep)
1. [fromPairs：将一个二维数组转化为一个对象](#frompairs)
1. [indexOf：返回一个元素在数组中的下标，从前往后找](#indexof)
1. [initial：返回一个新数组，去掉原数组中的最后一个元素](#initial)
1. [intersection：返回一个数组，包含在所有数组中都存在的元素](#intersection)
1. [join：将数组转化为字符串，并用指定的分隔符分隔](#join)
1. [last：返回数组中的最后一个元素](#last)
1. [lastIndexOf：返回一个元素在数组中的下标，从后往前找](#lastindexof)
1. [pull：从数组中去掉指定的元素](#pull)
1. [pullAt：从数组中取出指定下标的元素，并返回一个新数组](#pullat)
1. [reverse：反转数组](#reverse)
1. [slice：返回一个新数组，从原数组中截取指定范围的元素](#slice)
1. [sortedIndex：返回一个元素应该插入到数组中的下标](#sortedindex)
1. [tail：返回一个新数组，去掉原数组中的第一个元素](#tail)
1. [take：返回一个新数组，包含原数组中前 n 个元素](#take)
1. [takeRight：返回一个新数组，包含原数组中后 n 个元素](#takeright)
1. [union：返回一个新数组，包含所有数组中的不重复元素](#frompairs)
1. [uniq：返回一个新数组，包含所有数组中的不重复元素](#uniq)
1. [without：返回一个新数组，去掉原数组中指定的元素](#without)
1. [xor：返回一个新数组，包含只在其中一个数组中出现过的元素](#xor)
1. [zip：将多个数组的同一位置的元素合并为一个数组](#zip)
1. [unzip：将 zip 函数生成的数组还原成原始的数组](#unzip)
1. [dropWhile：返回一个新数组，去掉原数组中从开始到第一个符合条件的元素之间的元素](#dropwhile)
1. [intersectionBy：与 intersection 类似，但是可以指定一个函数对比数组中的元素](#intersectionby)
1. [pullAll：与 pull 类似，但是接收一个数组作为参数](#pullall)
1. [pullAllBy：与 pullBy 类似，但是接收一个数组作为参数](#pullallby)
1. [pullAllWith：与 pullWith 类似，但是接收一个数组作为参数](#pullallwith)
1. [sortedIndexOf：与 indexOf 类似，但是可以在已排序的数组中使用](#sortedindexof)
1. [sortedLastIndexOf：与 lastIndexOf 类似，但是可以在已排序的数组中使用](#sortedlastindexof)
1. [sortedUniq：与 uniq 类似，但是可以在已排序的数组中使用](#sorteduniq)
1. [sortedUniqBy：与 uniqBy 类似，但是可以在已排序的数组中使用](#sorteduniqby)
1. [takeWhile：返回一个新数组，包含原数组中从开始到第一个不符合条件的元素之间的元素](#takewhile)
1. [takeRightWhile：返回一个新数组，包含原数组中从最后一个不符合条件的元素到结尾之间的元素](#frompairs)
1. [unionBy：与 union 类似，但是可以指定一个函数对比数组中的元素](#unionby)
1. [uniqBy：与 uniq 类似，但是可以指定一个函数对比数组中的元素](#uniqby)
1. [unzipWith：与 unzip 类似，但是可以指定一个函数来处理 zip 函数生成的数组](#unzipwith)
1. [xorBy：与 xor 类似，但是可以指定一个函数对比数组中的元素](#xorby)
1. [zipObject：将两个数组转化为一个对象](#zipobject)
1. [zipObjectDeep：将两个数组转化为一个嵌套对象](#zipobjectdeep)

**[集合](#集合)**

1. [countBy：统计数组中每个元素出现的次数](#countby)
1. [each->forEach：遍历数组或对象，并对每个元素执行指定的函数](#each)
1. [filter：遍历数组或对象，返回符合条件的元素](#filter)
1. [find：遍历数组或对象，返回第一个符合条件的元素](#find)
1. [flatMap：遍历数组，将每个元素映射成一个新的数组，再将多个数组合并成一个新数组](#flatmap)
1. [flatMapDeep：遍历数组，将每个元素映射成一个新的数组，递归进行，再将多个数组合并成一个新数组](#flatmapdeep)
1. [flatMapDepth：遍历数组，将每个元素映射成一个新的数组，指定递归的深度，再将多个数组合并成一个新数组](#flatmapdepth)
1. [forEach：遍历数组或对象，并对每个元素执行指定的函数，与 each 函数类似](#foreach)
1. [includes：判断一个元素是否在数组或对象中](#includes)
1. [invokeMap：对数组中的每个元素调用指定的方法，并返回结果](#invokemap)
1. [keyBy：将数组转化为对象，对象的键值是指定属性的值，值是该元素](#keyby)
1. [map：遍历数组或对象，将每个元素映射成一个新的元素](#map)
1. [orderBy：按照指定的方式对数组进行排序](#orderby)
1. [partition：按照指定的条件对数组进行分割](#partition)
1. [reduce：遍历数组或对象，累加每个元素到累加器中](#reduce)
1. [reduceRight：与 reduce 类似，但是从数组的末尾开始遍历](#reduceright)
1. [reject：遍历数组或对象，返回不符合条件的元素](#reject)
1. [sample：随机返回数组或对象中的一个元素](#sample)
1. [sampleSize：随机返回数组或对象中的多个元素](#samplesize)
1. [shuffle：随机打乱数组或对象中的元素](#shuffle)
1. [size：返回数组或对象的长度或元素个数](#size)
1. [some：遍历数组或对象，判断是否至少有一个元素符合条件](#some)
1. [sortBy：按照指定的方式对数组进行排序](#sortby)

**[函数](#函数)**

1. [after：指定一个函数在被调用多少次后执行](#after)
1. [ary：对指定函数进行封装，指定最多接收多少个参数](#ary)
1. [before：指定一个函数在被调用多少次前执行](#before)
1. [bind：绑定函数的 this 值和指定的参数，并返回一个新的函数](#bind)
1. [bindKey：与 bind 类似，但是绑定的是对象上的指定方法](#bindkey)
1. [curry：对指定函数进行柯里化](#curry)
1. [curryRight：与 curry 类似，但是从右到左处理参数](#curryright)
1. [debounce：对指定函数进行防抖处理](#debounce)
1. [defer：将指定函数延迟执行](#defer)
1. [delay：将指定函数延迟一段时间后执行](#delay)
1. [flip：对指定函数的参数进行反转](#flip)
1. [memoize：对指定函数进行记忆化处理，缓存函数的计算结果](#memoize)
1. [negate：对指定函数进行封装，返回原函数的否定值](#negate)
1. [once：指定一个函数只能被调用一次](#once)
1. [overArgs：对指定函数进行封装，转换参数的形式](#overargs)
1. [partial：对指定函数进行部分应用，指定部分参数](#partial)
1. [partialRight：与 partial 类似，但是从右到左指定部分参数](#partialright)
1. [rearg：对指定函数进行封装，调整参数的位置](#rearg)
1. [rest：对指定函数进行封装，将参数集合成一个数组传入原函数](#rest)
1. [spread：对指定函数进行封装，将参数数组展开作为多个参数传入原函数](#spread)
1. [throttle：对指定函数进行节流处理](#throttle)

**[对象](#对象)**

1. [assign：合并对象的属性，后面的对象的属性会覆盖前面的对象](#assign)
1. [defaults：对指定对象进行封装，将默认值合并进去](#defaults)
1. [defaultsDeep：与 defaults 类似，但是支持嵌套对象](#defaultsdeep)
1. [findKey：遍历对象，返回第一个符合条件的键名](#findkey)
1. [findLastKey：与 findKey 类似，但是从对象的末尾开始](#findlastkey)
1. [forIn：遍历对象，对每个属性调用指定的函数](#forin)
1. [forInRight：与 forIn 类似，但是从对象的末尾开始遍历](#forinright)
1. [forOwn：遍历对象自身的可枚举属性，对每个属性调用指定的函数](#forown)
1. [forOwnRight：与 forOwn 类似，但是从对象的末尾开始遍历](#forownright)
1. [functions：返回指定对象上的所有函数名](#functions)
1. [get：获取对象上的属性，支持使用点和方括号的方式指定属性路径](#get)
1. [has：判断对象上是否有指定属性](#has)
1. [hasIn：判断对象上是否有指定路径的属性](#hasin)
1. [invert：对指定对象的属性和值进行反转](#invert)
1. [invertBy：与 invert 类似，但是支持指定反转后值的集合](#invertby)
1. [invoke：对指定对象上的方法进行调用](#invoke)
1. [keys：返回对象上的所有可枚举属性名](#keys)
1. [keysIn：返回对象上的所有属性名，包括不可枚举属性](#keysin)
1. [mapKeys：遍历对象上的每个属性，返回一个新对象，其中每个属性的名称由指定的函数计算得出](#mapkeys)
1. [mapValues：遍历对象上的每个属性，返回一个新对象，其中每个属性的值由指定的函数计算得出](#mapvalues)
1. [merge：合并对象和源对象的属性，并返回合并后的对象](#merge)
1. [mergeWith：与 merge 类似，但是指定合并函数，用于处理冲突的属性值](#mergewith)
1. [omit：返回一个新对象，其中省略了指定属性的属性值](#omit)
1. [omitBy：与 omit 类似，但是根据指定函数判断是否省略属性](#omitby)
1. [pick：返回一个新对象，其中只包含指定属性的属性值](#pick)
1. [pickBy：与 pick 类似，但是根据指定函数判断是否保留属性](#pickby)
1. [result：获取对象上指定路径的值，并根据情况进行函数调用](#result)
1. [set：设置对象上指定路径的属性值](#set)
1. [setWith：与 set 类似，但是指定自定义函数用于设置属性值](#setwith)
1. [toPairs：将对象转化为键值对数组](#topairs)
1. [toPairsIn：将对象转化为键值对数组，包括不可枚举属性](#topairsin)
1. [transform：对指定对象进行封装，指定转换函数，处理对象上的属性](#transform)
1. [unset：删除对象上指定路径的属性值](#unset)
1. [countBy：统计数组中每个元素出现的次数](#countby)
1. [countBy：统计数组中每个元素出现的次数](#countby)
1. [countBy：统计数组中每个元素出现的次数](#countby)
1. [countBy：统计数组中每个元素出现的次数](#countby)
1. [countBy：统计数组中每个元素出现的次数](#countby)
1. [countBy：统计数组中每个元素出现的次数](#countby)
1. [countBy：统计数组中每个元素出现的次数](#countby)

### 数组

### chunk

将一个数组分成多个小数组

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

思路：根据指定的大小将数组切割成多个小数组，使用 ES6 的 Array.from()方法，创建一个长度为切割后数组个数的新数组，使用 slice()方法将原数组按照切割后的大小进行分割，然后将每个小数组存储在新数组中返回。

**[⬆ 返回顶部](#lodash-函数列表)**

### compact

去除数组中的假值（false、null、0、""、undefined、NaN）

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

思路：使用 filter()方法，过滤出数组中的真值，Boolean()函数将所有假值转化为 false，所有真值转化为 true。

**[⬆ 返回顶部](#lodash-函数列表)**

### concat

合并多个数组

```js
const concat = (...args) => [].concat(...args);

const array = [1];
const other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

思路：使用 ES6 的扩展运算符(...)将传入的参数转化为数组，然后使用 concat()方法将所有数组合并成一个新数组并返回。

**[⬆ 返回顶部](#lodash-函数列表)**

### difference

返回一个数组，包含在第一个数组中但不在其他数组中的元素

```js
// // 第1种实现
// const difference = (arr, ...args) => arr.filter((item) => !args.flat().includes(item));
// 第2种实现
const difference = (arr, ...args) =>
  arr.filter(item => args.every(arg => !arg.includes(item)));

difference([3, 2, 1], [4, 2]);
// => [3, 1]
```

思路：使用 filter()方法遍历第一个数组，使用 every()方法遍历其他数组，将第一个数组中不包含在其他数组中的元素过滤出来，返回一个新数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### differenceBy

与 difference 类似，但是可以指定一个函数对比数组中的元素

```js
const differenceBy = (array, values, iteratee) => {
  const fn = typeof iteratee === 'function' ? iteratee : item => item[iteratee];
  const valuesSet = new Set(values.map(fn));
  return array.filter(item => !valuesSet.has(fn(item)));
};

differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]

// The `property` iteratee shorthand.
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
// => [{ 'x': 2 }]
```

思路：先判断第三个参数是否为函数，如果是则使用函数对比数组中的元素进行差异筛选，否则直接使用 lodash 的差异筛选函数来实现。

**[⬆ 返回顶部](#lodash-函数列表)**

### differenceWith

从第一个数组中过滤出第二个数组中没有的元素，使用一个自定义比较函数进行比较。

```js
const differenceWith = (array, values, comparator) =>
  array.filter(item => !values.some(value => comparator(item, value)));

const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```

思路：利用高阶函数 filter 和 some 对两个数组进行比较，返回第一个数组中不包含在第二个数组中的元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### drop

返回一个新数组，去掉原数组中的前 n 个元素

```js
const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]);
// => [2, 3]

drop([1, 2, 3], 2);
// => [3]

drop([1, 2, 3], 5);
// => []

drop([1, 2, 3], 0);
// => [1, 2, 3]
```

思路：使用 slice()方法将原数组中的前 n 个元素删除并返回。

**[⬆ 返回顶部](#lodash-函数列表)**

### dropRight

返回一个新数组，去掉原数组中的后 n 个元素

```js
const dropRight = (arr, n = 1) =>
  n >= arr.length ? [] : arr.slice(0, arr.length - n);

dropRight([1, 2, 3]);
// => [1, 2]

dropRight([1, 2, 3], 2);
// => [1]

dropRight([1, 2, 3], 5);
// => []

dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

思路：根据 n 的值，通过数组的 slice 方法获取新的数组，从而实现删除末尾元素的操作。

**[⬆ 返回顶部](#lodash-函数列表)**

### dropRightWhile

返回一个新数组，去掉原数组中从最后一个符合条件的元素到结尾之间的元素

```js
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

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

dropRightWhile(users, o => !o.active);
// => objects for ['barney']

// The `matches` iteratee shorthand.
dropRightWhile(users, { user: 'pebbles', active: false });
// => objects for ['barney', 'fred']

// The `matchesProperty` iteratee shorthand.
dropRightWhile(users, ['active', false]);
// => objects for ['barney']

// The `property` iteratee shorthand.
dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

思路：该函数实现了一个从数组末尾开始遍历，当元素满足传入的迭代器条件时，将该元素从数组中删除并返回删除后的新数组的函数。迭代器可以是函数、对象或数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### fill

用指定的值填充数组

```js
const fill = (arr, value, start = 0, end = arr.length) =>
  arr.fill(value, start, end);

const array = [1, 2, 3];

fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

fill(Array(3), 2);
// => [2, 2, 2]

fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```

思路：使用 fill()方法将数组的指定位置开始到指定位置结束的元素替换成指定的值，并返回修改后的数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### findIndex

返回第一个符合条件的元素的下标

```js
const findIndex = (arr, fn) => arr.findIndex(fn);

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

findIndex(users, o => o.user === 'barney');
// => 0

// The `matches` iteratee shorthand.
findIndex(users, { user: 'fred', active: false });
// => 1

// The `matchesProperty` iteratee shorthand.
findIndex(users, ['active', false]);
// => 0

// The `property` iteratee shorthand.
findIndex(users, 'active');
// => 2
```

思路：使用 findIndex()方法查找符合条件的元素在数组中的下标，如果没有找到则返回-1。

**[⬆ 返回顶部](#lodash-函数列表)**

### findLastIndex

返回最后一个符合条件的元素的下标

```js
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

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

findLastIndex(users, o => o.user === 'pebbles');
// => 2

// The `matches` iteratee shorthand.
findLastIndex(users, { user: 'barney', active: true });
// => 0

// The `matchesProperty` iteratee shorthand.
findLastIndex(users, ['active', false]);
// => 2

// The `property` iteratee shorthand.
findLastIndex(users, 'active');
// => 0
```

思路：使用 findLastIndex()方法，返回数组中满足提供的测试函数条件的最后一个元素的索引。若没有找到对应元素，则返回 -1

**[⬆ 返回顶部](#lodash-函数列表)**

### head

返回数组中的第一个元素

```js
const head = arr => arr[0];

head([1, 2, 3]);
// => 1

head([]);
// => undefined
```

思路：直接返回数组的第一个元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### flatten

将多维数组转化为一维数组

```js
const flatten = arr => [].concat(...arr);

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

思路：使用扩展运算符展开多维数组，再使用 concat 方法将展开后的一维数组拼接起来，得到最终的一维数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### flattenDeep

将多维数组转化为一维数组，递归进行

```js
const flattenDeep = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? flattenDeep(v) : v)));

flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

思路：使用 Array.map 遍历数组，对于数组中的每个元素，如果是数组则递归调用 flattenDeep 函数，否则直接返回该元素，最终使用扩展运算符展开数组，并使用 concat 方法拼接起来。

**[⬆ 返回顶部](#lodash-函数列表)**

### fromPairs

将一个二维数组转化为一个对象

```js
const fromPairs = arr =>
  arr.reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

fromPairs([
  ['a', 1],
  ['b', 2],
]);
// => { 'a': 1, 'b': 2 }
```

思路：使用 Array.reduce 遍历数组，对于数组中的每个元素，将其解构为 key 和 val，并将其添加到一个新对象中，最终得到一个包含所有 key-value 对的对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### indexOf

返回一个元素在数组中的下标，从前往后找

```js
const indexOf = (arr, val, fromIndex = 0) =>
  arr.findIndex((item, index) => index >= fromIndex && item === val);

indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
indexOf([1, 2, 1, 2], 2, 2);
// => 3
```

思路：使用数组的 findIndex 方法查找，并且支持从指定索引位置开始查找。

**[⬆ 返回顶部](#lodash-函数列表)**

### initial

返回一个新数组，去掉原数组中的最后一个元素

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]);
// => [1, 2]
```

思路：使用数组的 slice 方法截取出除了最后一个元素的部分，得到一个新数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### intersection

返回一个数组，包含在所有数组中都存在的元素

```js
const intersection = (...arr) => [
  ...new Set(arr.reduce((a, b) => a.filter(v => b.includes(v)))),
];

intersection([2, 1], [4, 2], [1, 2]);
// => [2]
```

思路：使用数组的 reduce 方法遍历所有数组，使用 filter 方法筛选出在当前数组中也存在的元素，最后使用 Set 去重并转换为数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### join

将数组转化为字符串，并用指定的分隔符分隔

```js
const join = (arr, separator = ',') =>
  arr.reduce((res, val, i) => `${res}${i ? separator : ''}${val}`, '');

join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

思路：使用 reduce 方法遍历数组，将每个元素和分隔符拼接起来，最终得到一个拼接好的字符串。

**[⬆ 返回顶部](#lodash-函数列表)**

### last

返回数组中的最后一个元素

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]);
// => 3
```

思路：返回数组中的最后一个元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### lastIndexOf

返回一个元素在数组中的下标，从后往前找

```js
const lastIndexOf = (arr, val) => arr.lastIndexOf(val);

lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the `fromIndex`.
lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```

思路：使用数组的 lastIndexOf 方法查找元素在数组中的下标。

**[⬆ 返回顶部](#lodash-函数列表)**

### pull

从数组中去掉指定的元素

```js
const pull = (arr, ...args) => arr.filter(item => !args.includes(item));

const array = [1, 2, 3, 1, 2, 3];

pull(array, 2, 3);
console.log(array);
// => [1, 1]
```

思路：通过 filter 方法筛选掉不需要的元素即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### pullAt

从数组中取出指定下标的元素，并返回一个新数组

```js
const pullAt = (arr, ...args) => args.map(index => arr.splice(index, 1)[0]);

const array = [5, 10, 15, 20];
const evens = pullAt(array, 1, 3);

console.log(array);
// => [5, 15]

console.log(evens);
// => [10, 20]
```

思路：map() 方法遍历传入的下标数组，通过 splice() 方法从原数组中删除相应的元素并返回。

**[⬆ 返回顶部](#lodash-函数列表)**

### reverse

反转数组

```js
const reverse = arr => [...arr].reverse();

const array = [1, 2, 3];

reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```

思路：利用解构赋值和 reverse() 方法即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### slice

返回一个新数组，从原数组中截取指定范围的元素

```js
const slice = (arr, start, end) => arr.slice(start, end);
```

思路：直接调用原生的 slice() 方法。

**[⬆ 返回顶部](#lodash-函数列表)**

### sortedIndex

返回一个元素应该插入到数组中的下标

```js
const sortedIndex = (arr, value) => {
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

sortedIndex([30, 50], 40);
// => 1
```

思路：二分查找算法实现，找到元素应该插入的位置。

**[⬆ 返回顶部](#lodash-函数列表)**

### tail

返回一个新数组，去掉原数组中的第一个元素

```js
const tail = arr => arr.slice(1);

tail([1, 2, 3]);
// => [2, 3]
```

思路：利用 slice() 方法去掉第一个元素即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### take

返回一个新数组，包含原数组中前 n 个元素

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3]);
// => [1]

take([1, 2, 3], 2);
// => [1, 2]

take([1, 2, 3], 5);
// => [1, 2, 3]

take([1, 2, 3], 0);
// => []
```

思路：直接调用原生的 slice() 方法，注意默认参数。

**[⬆ 返回顶部](#lodash-函数列表)**

### takeRight

返回一个新数组，包含原数组中后 n 个元素

```js
const takeRight = (arr, n = 1) => arr.slice(-n);

takeRight([1, 2, 3]);
// => [3]

takeRight([1, 2, 3], 2);
// => [2, 3]

takeRight([1, 2, 3], 5);
// => [1, 2, 3]

takeRight([1, 2, 3], 0);
// => []
```

思路：同样直接调用原生的 slice() 方法，注意负数下标的使用。

**[⬆ 返回顶部](#lodash-函数列表)**

### union

返回一个新数组，包含所有数组中的不重复元素

```js
const union = (...args) => [...new Set(args.flat())];

union([2], [1, 2]);
// => [2, 1]
```

思路：flat() 方法将多维数组转为一维，Set 数据结构去重，再转回数组即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### uniq

返回一个新数组，包含所有数组中的不重复元素

```js
const uniq = arr => [...new Set(arr)];

uniq([2, 1, 2]);
// => [2, 1]
```

思路：同样利用 Set() 数据结构去重。

**[⬆ 返回顶部](#lodash-函数列表)**

### without

返回一个新数组，去掉原数组中指定的元素

```js
const without = (arr, ...args) => arr.filter(item => !args.includes(item));

without([2, 1, 2, 3], 1, 2);
// => [3]
```

思路：同 pull 方法。

**[⬆ 返回顶部](#lodash-函数列表)**

### xor

返回一个新数组，包含只在其中一个数组中出现过的元素

```js
const xor = (...args) =>
  args
    .flat()
    .filter(
      item => args.flat().indexOf(item) === args.flat().lastIndexOf(item)
    );

xor([2, 1], [2, 3]);
// => [1, 3]
```

思路：flat() 方法转换成一维数组，然后利用 filter() 方法和 indexOf()、lastIndexOf() 方法判断出只在一个数组中出现过的元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### zip

将多个数组的同一位置的元素合并为一个数组

```js
const zip = (...arrays) =>
  arrays[0].map((_, i) => arrays.map(array => array[i]));

zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
```

思路：使用了 Rest 参数，首先取出第一个数组，然后使用 map 遍历第一个数组的长度，通过索引遍历所有数组的该索引元素，将其组合成一个新的数组并返回。

**[⬆ 返回顶部](#lodash-函数列表)**

### unzip

将 zip 函数生成的数组还原成原始的数组

```js
const unzip = array =>
  array.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({ length: Math.max(...array.map(a => a.length)) }).map(() => [])
  );

const zipped = zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
```

思路：使用 reduce 遍历 zip 函数生成的数组，将每个元素的每个值取出来，根据索引组成新的数组返回。在 reduce 函数的初始值中，使用了 Math.max 获取所有元素中最大长度，并通过 Array.from 创建对应长度的二维数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### dropWhile

返回一个新数组，去掉原数组中从开始到第一个符合条件的元素之间的元素

```js
const dropWhile = (array, predicate) =>
  array.slice(array.findIndex(val => !predicate(val)));

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

dropWhile(users, o => !o.active);
// => objects for ['pebbles']

// The `matches` iteratee shorthand.
dropWhile(users, { user: 'barney', active: false });
// => objects for ['fred', 'pebbles']

// The `matchesProperty` iteratee shorthand.
dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The `property` iteratee shorthand.
dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

思路：使用 findIndex 函数找到第一个不符合条件的元素，然后使用 slice 函数截取该元素之后的数组并返回。

**[⬆ 返回顶部](#lodash-函数列表)**

### intersectionBy

与 intersection 类似，但是可以指定一个函数对比数组中的元素

```js
const intersectionBy = (arr1, arr2, compareFn) =>
  arr1.filter(item =>
    arr2.some(compareItem => compareFn(item) === compareFn(compareItem))
  );

intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]

// The `property` iteratee shorthand.
intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x');
// => [{ 'x': 1 }]
```

思路：使用数组的 filter 方法遍历第一个数组，并使用参数指定的函数对比第二个数组的每一个元素，最终返回两个数组的交集。

**[⬆ 返回顶部](#lodash-函数列表)**

### pullAll

与 pull 类似，但是接收一个数组作为参数

```js
const pullAll = (arr, values) => arr.filter(item => !values.includes(item));

const array = [1, 2, 3, 1, 2, 3];

pullAll(array, [2, 3]);
console.log(array);
// => [1, 1]
```

思路：使用数组的 filter 方法遍历原数组，排除传入的数组中存在的元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### pullAllBy

与 pullBy 类似，但是接收一个数组作为参数

```js
const pullAllBy = (arr, values, compareFn) =>
  arr.filter(
    item =>
      !values.some(compareItem => compareFn(item) === compareFn(compareItem))
  );

const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
```

思路：使用数组的 filter 方法遍历原数组，排除传入的数组中存在的元素，使用参数指定的函数对比两个数组中的元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### pullAllWith

与 pullWith 类似，但是接收一个数组作为参数

```js
const pullAllWith = (arr, values, compareFn) =>
  arr.filter(item => !values.some(compareItem => compareFn(item, compareItem)));

const array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];

pullAllWith(array, [{ x: 3, y: 4 }], isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```

思路：使用数组的 filter 方法遍历原数组，排除传入的数组中存在的元素，使用参数指定的函数对比两个数组中的元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### sortedIndexOf

与 indexOf 类似，但是可以在已排序的数组中使用

```js
const sortedIndexOf = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1
```

思路：使用二分查找算法在已排序的数组中查找指定元素的位置。

**[⬆ 返回顶部](#lodash-函数列表)**

### sortedLastIndexOf

与 lastIndexOf 类似，但是可以在已排序的数组中使用

```js
const sortedLastIndexOf = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let lastIndex = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      lastIndex = mid;
      left = mid + 1;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return lastIndex;
};

sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
```

思路：使用二分查找算法在已排序的数组中查找指定元素的最后一个位置。

**[⬆ 返回顶部](#lodash-函数列表)**

### sortedUniq

与 uniq 类似，但是可以在已排序的数组中使用

```js
const sortedUniq = arr =>
  arr.reduce((result, item) => {
    if (result.length === 0 || result[result.length - 1] !== item) {
      result.push(item);
    }
    return result;
  }, []);

sortedUniq([1, 1, 2]);
// => [1, 2]
```

思路：使用数组的 reduce 方法和 indexOf 方法过滤掉重复元素，并返回新数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### sortedUniqBy

与 uniqBy 类似，但是可以在已排序的数组中使用

```js
const sortedUniqBy = (array, iteratee) =>
  array.reduce(
    (result, value) =>
      result.length && iteratee(value) === iteratee(result[result.length - 1])
        ? result
        : [...result, value],
    []
  );

sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
```

思路：使用 reduce 方法，对原数组进行遍历，将每个元素通过指定函数转化为一个值，并使用 Set 对象来去重，最终返回去重后的数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### takeWhile

返回一个新数组，包含原数组中从开始到第一个不符合条件的元素之间的元素

```js
const takeWhile = (array, predicate) =>
  array.slice(
    0,
    array.findIndex(element => !predicate(element))
  );
```

思路：使用 findIndex 方法，查找第一个不符合条件的元素的索引，然后使用 slice 方法截取原数组中符合条件的部分，返回新数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### takeRightWhile

返回一个新数组，包含原数组中从最后一个不符合条件的元素到结尾之间的元素

```js
const takeRightWhile = (array, predicate) =>
  array
    .reverse()
    .slice(
      0,
      array.findIndex(element => !predicate(element))
    )
    .reverse();

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

takeRightWhile(users, o => !o.active);
// => objects for ['fred', 'pebbles']

// The `matches` iteratee shorthand.
takeRightWhile(users, { user: 'pebbles', active: false });
// => objects for ['pebbles']

// The `matchesProperty` iteratee shorthand.
takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']

// The `property` iteratee shorthand.
takeRightWhile(users, 'active');
// => []
```

思路：使用 reverse 方法反转原数组，然后使用 findIndex 方法查找反转后数组中第一个不符合条件的元素的索引，最终使用 slice 方法截取原数组中从该索引到结尾的部分，返回新数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### unionBy

与 union 类似，但是可以指定一个函数对比数组中的元素

```js
const unionBy = (...arrays) => {
  const iteratee = arrays.pop();
  const unionSet = new Set(
    arrays.reduce((result, array) => [...result, ...array], []).map(iteratee)
  );
  return Array.from(unionSet);
};

unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `property` iteratee shorthand.
unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

思路：使用 Set 对象进行数组去重，通过指定函数将多个数组中的元素转化为同一值，最终将去重后的值转化为数组返回。

**[⬆ 返回顶部](#lodash-函数列表)**

### uniqBy

与 uniq 类似，但是可以指定一个函数对比数组中的元素

```js
const uniqBy = (array, iteratee) => {
  const uniqSet = new Set(array.map(iteratee));
  return Array.from(uniqSet).map(value =>
    array.find(element => iteratee(element) === value)
  );
};

uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `property` iteratee shorthand.
uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

思路：同 unionBy 方法实现思路类似。

**[⬆ 返回顶部](#lodash-函数列表)**

### unzipWith

与 unzip 类似，但是可以指定一个函数来处理 zip 函数生成的数组

```js
const unzipWith = (array, iteratee) =>
  array.reduce(
    (result, value) => (
      value.forEach((innerValue, index) =>
        result[index].push(iteratee ? iteratee(innerValue) : innerValue)
      ),
      result
    ),
    Array.from({ length: Math.max(...array.map(value => value.length)) }).map(
      () => []
    )
  );

const zipped = zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

unzipWith(zipped, add);
// => [3, 30, 300]
```

思路：使用 reduce 方法，对传入的数组进行遍历，将每个子数组进行传入的函数处理后，将处理后的值存储到对应索引位置上，最终返回处理后的数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### xorBy

与 xor 类似，但是可以指定一个函数对比数组中的元素

```js
const xorBy = (...arrays) => {
  const iteratee = arrays.pop();
  const valueCount = new Map();
  arrays
    .reduce((result, array) => [...result, ...array], [])
    .forEach((value) => {
      const newValue = iteratee(value);

xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]

// The `property` iteratee shorthand.
xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```

思路：使用 reduce 方法，对传入的多个数组进行遍历，将每个数组中的元素转化为指定值，并使用 Map 对象统计每个值出现的次数，最后返回出现次数为 1 的元素组成的数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### zipObject

将两个数组转化为一个对象

```js
const zipObject = (keys, values) =>
  keys.reduce((obj, key, i) => ({ ...obj, [key]: values[i] }), {});

zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
```

思路：使用 reduce 函数遍历 keys 数组，每次将 keys 数组中的一个元素作为属性名，values 数组中相同位置的元素作为属性值，然后将它们存入一个新对象中，最后返回该对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### zipObjectDeep

将两个数组转化为一个嵌套对象

```js
const zipObjectDeep = (keys, values) =>
  keys.reduce((obj, key, i) => {
    const path = key.split('.');
    const lastKey = path.pop();
    const nestedObj = path.reduceRight(
      (nested, prop) => ({ [prop]: nested }),
      values[i]
    );
    return mergeWith(obj, { [lastKey]: nestedObj }, customizer);
  }, {});

zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```

思路：使用 reduce 函数遍历 keys 数组，每次将 keys 数组中的一个元素拆分成一个路径数组，使用 reduceRight 函数从路径数组的最后一个元素开始遍历，每次将该元素作为属性名，前一个元素对应的对象作为属性值，然后将它们存入一个新对象中，最后返回该对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### 集合

### countBy

统计数组中每个元素出现的次数

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The `property` iteratee shorthand.
countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```

思路：使用 map 将数组每个元素进行映射，fn 是函数时直接执行，否则取对应属性，再使用 reduce 将元素出现的次数进行累加

### each

遍历数组或对象，并对每个元素执行指定的函数

```js
// each -> forEach
const each = (collection, fn) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      fn(collection[i], i, collection);
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        fn(collection[key], key, collection);
      }
    }
  }
};

forEach([1, 2], value => {
  console.log(value);
});
// => Logs `1` then `2`.

forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```

思路：如果是数组，则使用 for 循环遍历，对每个元素执行 fn 函数；如果是对象，则使用 for-in 循环遍历，对每个属性执行 fn 函数

**[⬆ 返回顶部](#lodash-函数列表)**

### filter

遍历数组或对象，返回符合条件的元素

```js
const filter = (collection, predicate) =>
  collection.filter(
    typeof predicate === 'function' ? predicate : val => val[predicate]
  );

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

filter(users, o => !o.active);
// => objects for ['fred']

// The `matches` iteratee shorthand.
filter(users, { age: 36, active: true });
// => objects for ['barney']

// The `matchesProperty` iteratee shorthand.
filter(users, ['active', false]);
// => objects for ['fred']

// The `property` iteratee shorthand.
filter(users, 'active');
// => objects for ['barney']
```

思路：使用 filter 方法过滤符合条件的元素，predicate 是函数时直接执行，否则判断元素是否具有对应的属性值

**[⬆ 返回顶部](#lodash-函数列表)**

### find

遍历数组或对象，返回第一个符合条件的元素

```js
const find = (collection, predicate) =>
  collection.filter(
    typeof predicate === 'function' ? predicate : val => val[predicate]
  )[0];

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

find(users, o => o.age < 40);
// => object for 'barney'

// The `matches` iteratee shorthand.
find(users, { age: 1, active: true });
// => object for 'pebbles'

// The `matchesProperty` iteratee shorthand.
find(users, ['active', false]);
// => object for 'fred'

// The `property` iteratee shorthand.
find(users, 'active');
// => object for 'barney'
```

思路：使用 filter 方法过滤符合条件的元素，并返回第一个符合条件的元素，predicate 是函数时直接执行，否则判断元素是否具有对应的属性值

**[⬆ 返回顶部](#lodash-函数列表)**

### flatMap

遍历数组，将每个元素映射成一个新的数组，再将多个数组合并成一个新数组

```js
const flatMap = (arr, fn) => arr.reduce((acc, val) => acc.concat(fn(val)), []);

function duplicate(n) {
  return [n, n];
}

flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
```

思路：使用 reduce 方法遍历数组，将每个元素映射成一个新的数组，然后使用 concat 将多个数组合并成一个新数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### flatMapDeep

遍历数组，将每个元素映射成一个新的数组，递归进行，再将多个数组合并成一个新数组

```js
const flatMapDeep = (arr, fn) =>
  arr.reduce(
    (acc, val) =>
      acc.concat(Array.isArray(val) ? flatMapDeep(val, fn) : fn(val)),
    []
  );

function duplicate(n) {
  return [[[n, n]]];
}

flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
```

思路：使用 reduce 遍历数组，将每个元素映射成一个新的数组，如果是数组则递归进行，最后使用 concat 将多个数组合并成一个新数组

**[⬆ 返回顶部](#lodash-函数列表)**

### flatMapDepth

遍历数组，将每个元素映射成一个新的数组，指定递归的深度，再将多个数组合并成一个新数组

```js
const flatMapDepth = (array, iteratee, depth = 1) =>
  depth > 0
    ? array.reduce((acc, cur) => {
        const mapped = iteratee(cur);
        return acc.concat(
          Array.isArray(mapped)
            ? flatMapDepth(mapped, iteratee, depth - 1)
            : mapped
        );
      }, [])
    : array.slice();

function duplicate(n) {
  return [[[n, n]]];
}

flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
```

思路：使用递归的方式实现深度优先遍历数组，然后将每个元素映射成一个新的数组，最后将多个数组合并成一个新数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### forEach

遍历数组或对象，并对每个元素执行指定的函数，与 each 函数类似

```js
const forEach = (collection, iteratee) => {
  for (const value of collection) {
    iteratee(value);
  }
};

_([1, 2]).forEach(value => {
  console.log(value);
});
// => Logs `1` then `2`.

forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```

思路：使用 for...of 循环遍历数组或对象，并对每个元素执行指定的函数。

**[⬆ 返回顶部](#lodash-函数列表)**

### groupBy：按照指定的方式对数组进行分组

```js
const groupBy = (array, iteratee) =>
  array.reduce((acc, cur) => {
    const key = typeof iteratee === 'function' ? iteratee(cur) : cur[iteratee];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});

groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `property` iteratee shorthand.
groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```

思路：使用 reduce 方法遍历数组，按照指定的方式对数组进行分组。

**[⬆ 返回顶部](#lodash-函数列表)**

### includes

判断一个元素是否在数组或对象中

```js
const includes = (collection, value) => collection.includes(value);

includes([1, 2, 3], 1);
// => true

includes([1, 2, 3], 1, 2);
// => false

includes({ user: 'fred', age: 40 }, 'fred');
// => true

includes('pebbles', 'eb');
// => true
```

思路：使用 Array.includes 方法判断一个元素是否在数组或对象中。

**[⬆ 返回顶部](#lodash-函数列表)**

### invokeMap

对数组中的每个元素调用指定的方法，并返回结果

```js
const invokeMap = (array, path, ...args) =>
  array.map(value => {
    const method = typeof path === 'function' ? path : value[path];
    return method.apply(value, args);
  });

invokeMap(
  [
    [5, 1, 7],
    [3, 2, 1],
  ],
  'sort'
);
// => [[1, 5, 7], [1, 2, 3]]

invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```

思路：使用 Array.map 方法对数组中的每个元素调用指定的方法，并返回结果。

**[⬆ 返回顶部](#lodash-函数列表)**

### keyBy

将数组转化为对象，对象的键值是指定属性的值，值是该元素

```js
const keyBy = (arr, key) =>
  arr.reduce((acc, val) => ((acc[val[key]] = val), acc), {});

const array = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 },
];

keyBy(array, o => String.fromCharCode(o.code));
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```

思路：使用 reduce 方法遍历数组，将数组转化为对象，对象的键值是指定属性的值，值是该元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### map：遍历数组或对象，将每个元素映射成一个新的元素

```js
const map = (arr, func) => arr.reduce((acc, val) => [...acc, func(val)], []);

function square(n) {
  return n * n;
}

map([4, 8], square);
// => [16, 64]

map({ a: 4, b: 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

const users = [{ user: 'barney' }, { user: 'fred' }];

// The `property` iteratee shorthand.
map(users, 'user');
// => ['barney', 'fred']
```

思路：使用 reduce 方法遍历数组，将每个元素映射成一个新的元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### orderBy

按照指定的方式对数组进行排序

```js
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === 'desc'
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 },
];

// 以 `user` 升序排序 再  `age` 以降序排序。
orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

思路：使用 sort 方法对数组进行排序，props 参数表示排序的属性，orders 参数表示排序的顺序。

**[⬆ 返回顶部](#lodash-函数列表)**

### partition

按照指定的条件对数组进行分割

```js
const partition = (arr, func) =>
  arr.reduce((acc, val) => (acc[func(val) ? 0 : 1].push(val), acc), [[], []]);

const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false },
];

partition(users, o => o.active);
// => objects for [['fred'], ['barney', 'pebbles']]

// The `matches` iteratee shorthand.
partition(users, { age: 1, active: false });
// => objects for [['pebbles'], ['barney', 'fred']]

// The `matchesProperty` iteratee shorthand.
partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

// The `property` iteratee shorthand.
partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```

思路：使用 reduce 方法遍历数组，按照指定的条件对数组进行分割。

**[⬆ 返回顶部](#lodash-函数列表)**

### reduce

遍历数组或对象，累加每个元素到累加器中

```js
const reduce = (arr, func, initVal) => {
  let acc = initVal;
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
};

reduce([1, 2], (sum, n) => sum + n, 0);
// => 3

reduce(
  { a: 1, b: 2, c: 1 },
  (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);
// => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)
```

思路：使用 for 循环遍历数组，累加每个元素到累加器中。

**[⬆ 返回顶部](#lodash-函数列表)**

### reduceRight

与 reduce 类似，但是从数组的末尾开始遍历

```js
const reduceRight = (arr, func, initVal) => {
  let acc = initVal;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
};

const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

reduceRight(array, (flattened, other) => flattened.concat(other), []);
// => [4, 5, 2, 3, 0, 1]
```

思路：与 reduce 类似，但是从数组的末尾开始遍历。

**[⬆ 返回顶部](#lodash-函数列表)**

### reject

遍历数组或对象，返回不符合条件的元素

```js
const reject = (arr, fn) => arr.filter(x => !fn(x));

const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
];

reject(users, o => !o.active);
// => objects for ['fred']

// `matches` 迭代简写
reject(users, { age: 40, active: true });
// => objects for ['barney']

// `matchesProperty` 迭代简写
reject(users, ['active', false]);
// => objects for ['fred']

// `property` 迭代简写
reject(users, 'active');
// => objects for ['barney']
```

思路：使用 filter 方法遍历数组，返回不符合条件的元素即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### sample

随机返回数组或对象中的一个元素

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([1, 2, 3, 4]);
// => 2
```

思路：使用 Math.random 方法生成随机数，再根据数组的长度随机获取一个元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### sampleSize

随机返回数组或对象中的多个元素

```js
const sampleSize = (arr, n = 1) =>
  arr.sort(() => Math.random() - 0.5).slice(0, n);

sampleSize([1, 2, 3], 2);
// => [3, 1]

sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```

思路：使用 sort 方法和 Math.random 方法打乱数组顺序，再使用 slice 方法截取指定数量的元素。

**[⬆ 返回顶部](#lodash-函数列表)**

### shuffle

随机打乱数组或对象中的元素

```js
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

思路：使用 sort 方法和 Math.random 方法打乱数组顺序即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### size

返回数组或对象的长度或元素个数

```js
const size = obj => Object.keys(obj).length;

size([1, 2, 3]);
// => 3

size({ a: 1, b: 2 });
// => 2

size('pebbles');
// => 7
```

思路：使用 Object.keys 方法获取对象属性的数组，再使用 length 属性获取长度即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### some

遍历数组或对象，判断是否至少有一个元素符合条件

```js
const some = (arr, fn) => arr.some(fn);

some([null, 0, 'yes', false], Boolean);
// => true

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
];

// The `matches` iteratee shorthand.
some(users, { user: 'barney', active: false });
// => false

// The `matchesProperty` iteratee shorthand.
some(users, ['active', false]);
// => true

// The `property` iteratee shorthand.
some(users, 'active');
// => true
```

思路：使用 some 方法判断是否至少有一个元素符合条件。

**[⬆ 返回顶部](#lodash-函数列表)**

### sortBy

按照指定的方式对数组进行排序

```js
const sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

sortBy(users, o => o.user);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

sortBy(users, 'user', o => Math.floor(o.age / 10));
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

思路：使用 sort 方法和传入的函数进行排序即可。

**[⬆ 返回顶部](#lodash-函数列表)**

### 函数

### after

指定一个函数在被调用多少次后执行

```js
const after = (n, func) => {
  let count = 0;
  return (...args) => {
    count++;
    if (count >= n) {
      return func(...args);
    }
  };
};

const saves = ['profile', 'settings'];

const done = after(saves.length, () => {
  console.log('done saving!');
});

forEach(saves, type => {
  asyncSave({ type, complete: done });
});
// => Logs 'done saving!' after the two async saves have completed.
```

思路：返回一个函数，该函数在被调用 n 次后执行指定的函数。利用闭包记录当前已调用次数，判断是否达到执行条件。

**[⬆ 返回顶部](#lodash-函数列表)**

### ary：对指定函数进行封装，指定最多接收多少个参数

```js
const ary =
  (func, n = func.length) =>
  (...args) =>
    func(...args.slice(0, n));

map(['6', '8', '10'], ary(parseInt, 1));
// => [6, 8, 10]
```

思路：对指定函数进行封装，指定最多接收 n 个参数。返回一个新函数，限制函数参数个数。

**[⬆ 返回顶部](#lodash-函数列表)**

### before：指定一个函数在被调用多少次前执行

```js
const before = (n, func) => {
  let count = 0;
  return (...args) => {
    count++;
    if (count < n) {
      return func(...args);
    }
  };
};

jQuery(element).on('click', before(5, addContactToList));
// => Allows adding up to 4 contacts to the list.
```

思路：返回一个函数，该函数在被调用 n 次前执行指定的函数。利用闭包记录当前已调用次数，判断是否达到执行条件。

**[⬆ 返回顶部](#lodash-函数列表)**

### bind

绑定函数的 this 值和指定的参数，并返回一个新的函数

```js
const bind =
  (func, thisArg, ...boundArgs) =>
  (...args) =>
    func.apply(thisArg, [...boundArgs, ...args]);

const greet = function (greeting, punctuation) {
  return `${greeting} ${this.user}${punctuation}`;
};

const object = { user: 'fred' };

var bound = bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// Bound with placeholders.
var bound = bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'
```

思路：绑定函数的 this 值和指定的参数，并返回一个新的函数。利用 apply 和 bind 方法实现。

**[⬆ 返回顶部](#lodash-函数列表)**

### bindKey

与 bind 类似，但是绑定的是对象上的指定方法

```js
const bindKey =
  (object, key, ...args) =>
  (...args2) =>
    object[key].apply(object, [...args, ...args2]);

const object = {
  user: 'fred',
  greet(greeting, punctuation) {
    return `${greeting} ${this.user}${punctuation}`;
  },
};

var bound = bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'

object.greet = function (greeting, punctuation) {
  return `${greeting}ya ${this.user}${punctuation}`;
};

bound('!');
// => 'hiya fred!'

// Bound with placeholders.
var bound = bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'
```

思路：与 bind 类似，但是绑定的是对象上的指定方法。利用 apply 和 bind 方法实现。

**[⬆ 返回顶部](#lodash-函数列表)**

### curry

对指定函数进行柯里化

```js
const curry = (func, arity = func.length, ...args) =>
  arity <= args.length ? func(...args) : curry.bind(null, func, arity, ...args);

const abc = function (a, b, c) {
  return [a, b, c];
};

const curried = curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```

思路：对指定函数进行柯里化。返回一个新函数，当参数数量不足时，继续返回一个新函数，直到参数数量足够执行原函数。

**[⬆ 返回顶部](#lodash-函数列表)**

### curryRight

与 curry 类似，但是从右到左处理参数

```js
const curryRight = (func, arity = func.length, ...args) =>
  arity <= args.length
    ? func(...args.reverse())
    : curryRight.bind(null, func, arity, ...args);

const abc = function (a, b, c) {
  return [a, b, c];
};

const curried = curryRight(abc);

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]
```

思路：与 curry 类似，但是从右到左处理参数。

**[⬆ 返回顶部](#lodash-函数列表)**

### debounce

对指定函数进行防抖处理

```js
const debounce = (func, wait, immediate = false) => {
  let timeoutId;
  return (...args) => {
    if (immediate && !timeoutId) {
      func(...args);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (!immediate) {
        func(...args);
      }
      timeoutId = null;
    }, wait);
  };
};

// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on('resize', debounce(calculateLayout, 150));

// 当点击时 `sendMail` 随后就被调用。
jQuery(element).on(
  'click',
  debounce(sendMail, 300, {
    leading: true,
    trailing: false,
  })
);

// 确保 `batchLog` 调用1次之后，1秒内会被触发。
const debounced = debounce(batchLog, 250, { maxWait: 1000 });
const source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// 取消一个 trailing 的防抖动调用
jQuery(window).on('popstate', debounced.cancel);
```

思路：对指定函数进行防抖处理。返回一个新函数，在一段时间内只执行一次。

**[⬆ 返回顶部](#lodash-函数列表)**

### defer

将指定函数延迟执行

```js
const defer = (func, ...args) => setTimeout(func, 1, ...args);

defer(text => {
  console.log(text);
}, 'deferred');
// => 一毫秒或更久一些输出 'deferred'。
```

思路：将指定函数延迟执行。利用 setTimeout 实现。

**[⬆ 返回顶部](#lodash-函数列表)**

### delay

将指定函数延迟一段时间后执行

```js
const delay = (func, wait, ...args) => setTimeout(func, wait, ...args);

delay(
  text => {
    console.log(text);
  },
  1000,
  'later'
);
// => 一秒后输出 'later'。
```

思路：将指定函数延迟一段时间后执行。利用 setTimeout 实现。

**[⬆ 返回顶部](#lodash-函数列表)**

### flip

对指定函数的参数进行反转

```js
const flip =
  fn =>
  (...args) =>
    fn(...args.reverse());

const flipped = flip(function () {
  return toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

思路：反转函数的参数顺序，返回一个新的函数

**[⬆ 返回顶部](#lodash-函数列表)**

### memoize

对指定函数进行记忆化处理，缓存函数的计算结果

```js
const memoize = fn => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    return cache.has(key)
      ? cache.get(key)
      : cache.set(key, fn(...args)).get(key);
  };
};

const object = { a: 1, b: 2 };
const other = { c: 3, d: 4 };

var values = memoize(values);
values(object);
// => [1, 2]

values(other);
// => [3, 4]

object.a = 2;
values(object);
// => [1, 2]

// 修改结果缓存。
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']

// 替换 `memoize.Cache`。
memoize.Cache = WeakMap;
```

思路：缓存函数的计算结果，返回一个新的函数

**[⬆ 返回顶部](#lodash-函数列表)**

### negate

对指定函数进行封装，返回原函数的否定值

```js
const negate =
  fn =>
  (...args) =>
    !fn(...args);

function isEven(n) {
  return n % 2 == 0;
}

filter([1, 2, 3, 4, 5, 6], negate(isEven));
// => [1, 3, 5]
```

思路：返回一个新的函数，该函数执行原函数的结果取反

**[⬆ 返回顶部](#lodash-函数列表)**

### once

指定一个函数只能被调用一次

```js
const once = fn => {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};

const initialize = once(createApplication);
initialize();
initialize();
// `initialize` 只能调用 `createApplication` 一次。
```

思路：返回一个新的函数，该函数只能被调用一次

**[⬆ 返回顶部](#lodash-函数列表)**

### overArgs

对指定函数进行封装，转换参数的形式

```js
const overArgs =
  (fn, transforms) =>
  (...args) =>
    fn(...args.map((arg, index) => transforms[index](arg)));

function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

const func = overArgs((x, y) => [x, y], [square, doubled]);

func(9, 3);
// => [81, 6]

func(10, 5);
// => [100, 10]
```

思路：返回一个新的函数，该函数对原函数的指定参数进行转换

**[⬆ 返回顶部](#lodash-函数列表)**

### partial

对指定函数进行部分应用，指定部分参数

```js
const partial =
  (fn, ...args) =>
  (...newArgs) =>
    fn(...args, ...newArgs);

const greet = function (greeting, name) {
  return `${greeting} ${name}`;
};

const sayHelloTo = partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// 使用了占位符。
const greetFred = partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
```

思路：返回一个新的函数，该函数部分应用原函数的指定参数

**[⬆ 返回顶部](#lodash-函数列表)**

### partialRight

与 partial 类似，但是从右到左指定部分参数

```js
const partialRight =
  (fn, ...args) =>
  (...newArgs) =>
    fn(...newArgs, ...args);

const greet = function (greeting, name) {
  return `${greeting} ${name}`;
};

const greetFred = partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'

// 使用了占位符。
const sayHelloTo = partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'
```

思路：返回一个新的函数，该函数从右到左部分应用原函数的指定参数

**[⬆ 返回顶部](#lodash-函数列表)**

### rearg

对指定函数进行封装，调整参数的位置

```js
const rearg =
  (fn, indexes) =>
  (...args) =>
    fn(...indexes.map(index => args[index]));

const rearged = rearg((a, b, c) => [a, b, c], [2, 0, 1]);

rearged('b', 'c', 'a');
// => ['a', 'b', 'c']
```

思路：返回一个新的函数，该函数调整原函数的参数顺序

**[⬆ 返回顶部](#lodash-函数列表)**

### rest

对指定函数进行封装，将参数集合成一个数组传入原函数

```js
const rest =
  fn =>
  (...args) =>
    fn(args);

const say = rest(
  (what, names) =>
    `${what} ${initial(names).join(', ')}${size(names) > 1 ? ', & ' : ''}${last(
      names
    )}`
);

say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
```

思路：返回一个新的函数，该函数将原函数的参数集合成一个数组传入

**[⬆ 返回顶部](#lodash-函数列表)**

### spread

对指定函数进行封装，将参数数组展开作为多个参数传入原函数

```js
const spread = fn => args => fn(...args);

const say = spread((who, what) => `${who} says ${what}`);

say(['fred', 'hello']);
// => 'fred says hello'

const numbers = Promise.all([Promise.resolve(40), Promise.resolve(36)]);

numbers.then(spread((x, y) => x + y));
// => a Promise of 76
```

思路：返回一个新的函数，该函数将原函数的参数数组展开作为多个参数传入

**[⬆ 返回顶部](#lodash-函数列表)**

### throttle

对指定函数进行节流处理

```js
const throttle = (fn, time) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, time);
    }
  };
};

// 避免在滚动时过分的更新定位
jQuery(window).on('scroll', throttle(updatePosition, 100));

// 点击后就调用 `renewToken`，但5分钟内超过1次。
const throttled = throttle(renewToken, 300000, { trailing: false });
jQuery(element).on('click', throttled);

// 取消一个 trailing 的节流调用。
jQuery(window).on('popstate', throttled.cancel);
```

思路：返回一个新的函数，该函数对原函数进行节流处理

**[⬆ 返回顶部](#lodash-函数列表)**

### 对象

### assign

合并对象的属性，后面的对象的属性会覆盖前面的对象

```js
const assign = (...objs) =>
  objs.reduce((result, obj) => Object.assign(result, obj), {});

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

assign({ a: 0 }, new Foo(), new Bar());
// => { 'a': 1, 'c': 3 }
```

思路：使用 reduce 方法遍历每个对象，将属性合并到目标对象中。

### defaults

对指定对象进行封装，将默认值合并进去

```js
const defaults = (obj, defaultProps) => ({ ...defaultProps, ...obj });

defaults({ a: 1 }, { b: 2 }, { a: 3 });
// => { 'a': 1, 'b': 2 }
```

思路：使用 Object.assign 方法将默认值对象合并到目标对象上，如果目标对象中已经存在相同属性，则不会被覆盖。

**[⬆ 返回顶部](#lodash-函数列表)**

### defaultsDeep

与 defaults 类似，但是支持嵌套对象

```js
const defaultsDeep = (obj, defaultProps) => {
  const mergeDeep = (target, source) => {
    Object.keys(source).forEach(key => {
      const targetValue = target[key];
      const sourceValue = source[key];
      if (typeof targetValue === 'object' && typeof sourceValue === 'object') {
        target[key] = mergeDeep(targetValue, sourceValue);
      } else {
        target[key] = targetValue === undefined ? sourceValue : targetValue;
      }
    });
    return target;
  };
  return mergeDeep({ ...defaultProps }, obj);
};

defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }
```

思路：使用 Object.assign 和 typeof 方法进行递归遍历，将嵌套的对象也合并进去。

**[⬆ 返回顶部](#lodash-函数列表)**

### findKey

遍历对象，返回第一个符合条件的键名

```js
const findKey = (obj, predicate) => {
  for (const key in obj) {
    if (predicate(obj[key], key, obj)) {
      return key;
    }
  }
};

const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};

findKey(users, o => o.age < 40);
// => 'barney' (iteration order is not guaranteed)

// The `matches` iteratee shorthand.
findKey(users, { age: 1, active: true });
// => 'pebbles'

// The `matchesProperty` iteratee shorthand.
findKey(users, ['active', false]);
// => 'fred'

// The `property` iteratee shorthand.
findKey(users, 'active');
// => 'barney'
```

思路：使用 for...in 循环遍历对象，对每个属性调用指定的函数进行判断，如果返回真值则返回当前属性名。

**[⬆ 返回顶部](#lodash-函数列表)**

### findLastKey

与 findKey 类似，但是从对象的末尾开始

```js
const findLastKey = (obj, predicate) =>
  findKey(obj, predicate, Object.keys(obj).reverse());

const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};

findLastKey(users, o => o.age < 40);
// => returns 'pebbles' assuming `findKey` returns 'barney'

// The `matches` iteratee shorthand.
findLastKey(users, { age: 36, active: true });
// => 'barney'

// The `matchesProperty` iteratee shorthand.
findLastKey(users, ['active', false]);
// => 'fred'

// The `property` iteratee shorthand.
findLastKey(users, 'active');
// => 'pebbles'
```

思路：使用 Object.keys 方法获取对象的键名数组，然后使用 reverse 方法翻转数组，再使用 findKey 函数进行查找。

**[⬆ 返回顶部](#lodash-函数列表)**

### forIn

遍历对象，对每个属性调用指定的函数

```js
const forIn = (obj, iteratee) => {
  for (const key in obj) {
    if (iteratee(obj[key], key, obj) === false) {
      break;
    }
  }
  return obj;
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forIn(new Foo(), (value, key) => {
  console.log(key);
});
// => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)。
```

思路：使用 for...in 循环遍历对象，对每个属性调用指定的函数。

**[⬆ 返回顶部](#lodash-函数列表)**

### forInRight

与 forIn 类似，但是从对象的末尾开始遍历

```js
const forInRight = (obj, fn) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn(obj[key], key, obj);
    }
  }
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forInRight(new Foo(), (value, key) => {
  console.log(key);
});
// => 输出 'c', 'b', 然后 'a'， `forIn` 会输出 'a', 'b', 然后 'c'。
```

思路：使用 for...in 循环倒序遍历对象的所有属性，并对每个属性调用指定的函数。

**[⬆ 返回顶部](#lodash-函数列表)**

### forOwn

遍历对象自身的可枚举属性，对每个属性调用指定的函数

```js
const forOwn = (obj, func) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      func(obj[key], key, obj);
    }
  }
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forOwn(new Foo(), (value, key) => {
  console.log(key);
});
// => 输出 'a' 然后 'b' (无法保证遍历的顺序)。
```

思路：遍历对象自身的可枚举属性，对每个属性调用指定的函数，使用 for-in 循环遍历对象的所有属性，判断属性是否是自身的可枚举属性，如果是则调用指定的函数。

**[⬆ 返回顶部](#lodash-函数列表)**

### forOwnRight

与 forOwn 类似，但是从对象的末尾开始遍历

```js
const forOwnRight = (obj, func) => {
  const keys = Object.keys(obj).reverse();
  for (let i = 0; i < keys.length; i++) {
    func(obj[keys[i]], keys[i], obj);
  }
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forOwnRight(new Foo(), (value, key) => {
  console.log(key);
});
// =>  输出 'b' 然后 'a'， `forOwn` 会输出 'a' 然后 'b'
```

思路：与 forOwn 类似，但是从对象的末尾开始遍历，可以将对象的键数组进行 reverse 操作后再遍历。

**[⬆ 返回顶部](#lodash-函数列表)**

### functions

返回指定对象上的所有函数名

```js
const functions = obj =>
  Object.keys(obj).filter(key => typeof obj[key] === 'function');

function Foo() {
  this.a = constant('a');
  this.b = constant('b');
}

Foo.prototype.c = constant('c');

functions(new Foo());
// => ['a', 'b']
```

思路：返回指定对象上的所有函数名，使用 Object.keys()获取对象的所有属性名，再使用 filter()方法筛选出属性值的类型为 function 的属性名。

**[⬆ 返回顶部](#lodash-函数列表)**

### get

获取对象上的属性，支持使用点和方括号的方式指定属性路径

```js
const get = (obj, path) =>
  path.split(/[.[\]]/).reduce((acc, cur) => (cur ? acc[cur] : acc), obj);

const object = { a: [{ b: { c: 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// => 'default'
```

思路：使用 reduce 函数将属性路径分割后进行遍历并获取对应属性值，支持使用点和方括号的方式指定属性路径

**[⬆ 返回顶部](#lodash-函数列表)**

### has

判断对象上是否有指定属性

```js
const has = (obj, key) => key in obj;

const object = { a: { b: 2 } };
const other = create({ a: create({ b: 2 }) });

has(object, 'a');
// => true

has(object, 'a.b');
// => true

has(object, ['a', 'b']);
// => true

has(other, 'a');
// => false
```

思路：使用 in 操作符判断对象上是否有指定属性

**[⬆ 返回顶部](#lodash-函数列表)**

### hasIn

判断对象上是否有指定路径的属性

```js
const hasIn = (obj, path) => get(obj, path) !== undefined;

const object = create({ a: create({ b: 2 }) });

hasIn(object, 'a');
// => true

hasIn(object, 'a.b');
// => true

hasIn(object, ['a', 'b']);
// => true

hasIn(object, 'b');
// => false
```

思路：使用 get 函数获取属性值，如果返回 undefined 则表示不存在指定路径属性

**[⬆ 返回顶部](#lodash-函数列表)**

### invert

对指定对象的属性和值进行反转

```js
const invert = obj =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    acc[val] = key;
    return acc;
  }, {});

const object = { a: 1, b: 2, c: 1 };

invert(object);
// => { '1': 'c', '2': 'b' }
```

思路：遍历对象并将属性值作为键名，属性名作为键值生成新对象

**[⬆ 返回顶部](#lodash-函数列表)**

### invertBy

与 invert 类似，但是支持指定反转后值的集合

```js
const invertBy = (obj, fn) =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    const invertedKey = fn(val);
    if (!acc[invertedKey]) {
      acc[invertedKey] = [];
    }
    acc[invertedKey].push(key);
    return acc;
  }, {});

const object = { a: 1, b: 2, c: 1 };

invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }

invertBy(object, value => `group${value}`);
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
```

思路：遍历对象并将属性值经过回调函数处理后作为键名，属性名作为键值生成新对象

**[⬆ 返回顶部](#lodash-函数列表)**

### invoke

对指定对象上的方法进行调用

```js
const invoke = (obj, methodName, ...args) =>
  Object.values(obj).forEach(func =>
    typeof func[methodName] === 'function' ? func[methodName](...args) : null
  );

const object = { a: [{ b: { c: [1, 2, 3, 4] } }] };

invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
```

思路：遍历对象并调用指定方法名的方法

**[⬆ 返回顶部](#lodash-函数列表)**

### keys

返回对象上的所有可枚举属性名

```js
const keys = obj => Object.keys(obj);

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

keys(new Foo());
// => ['a', 'b'] (iteration order is not guaranteed)

keys('hi');
// => ['0', '1']
```

思路：使用 Object.keys 函数返回对象上的所有可枚举属性名

**[⬆ 返回顶部](#lodash-函数列表)**

### keysIn

返回对象上的所有属性名，包括不可枚举属性

```js
const keysIn = obj => {
  const result = [];
  for (const key in obj) {
    result.push(key);
  }
  return result;
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

keysIn(new Foo());
// => ['a', 'b', 'c'] (iteration order is not guaranteed)
```

思路：遍历对象的所有属性名，将其添加到一个数组中，并返回该数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### mapKeys

遍历对象上的每个属性，返回一个新对象，其中每个属性的名称由指定的函数计算得出

```js
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((result, key) => {
    result[fn(obj[key], key, obj)] = obj[key];
    return result;
  }, {});

mapKeys({ a: 1, b: 2 }, (value, key) => key + value);
// => { 'a1': 1, 'b2': 2 }
```

思路：使用 reduce 遍历对象的属性名，将新的属性名通过指定函数计算得出，并与原属性值一起添加到一个新的对象中，并返回该新对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### mapValues

遍历对象上的每个属性，返回一个新对象，其中每个属性的值由指定的函数计算得出

```js
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((result, key) => {
    result[key] = fn(obj[key], key, obj);
    return result;
  }, {});

const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 },
};

mapValues(users, o => o.age);
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// The `property` iteratee shorthand.
mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```

思路：使用 reduce 遍历对象的属性名，通过指定函数计算每个属性值，并将计算后的新属性值添加到一个新的对象中，并返回该新对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### merge

合并对象和源对象的属性，并返回合并后的对象

```js
const merge = (obj, src) => ({ ...obj, ...src });

const object = {
  a: [{ b: 2 }, { d: 4 }],
};

const other = {
  a: [{ c: 3 }, { e: 5 }],
};

merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

思路：使用 Object.assign 将源对象的属性值合并到目标对象上，并返回合并后的新对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### mergeWith

与 merge 类似，但是指定合并函数，用于处理冲突的属性值

```js
const mergeWith = (obj, src, customizer) => {
  const result = { ...obj, ...src };
  Object.keys(result).forEach(key => {
    result[key] = customizer(obj[key], src[key], key, obj, src);
  });
  return result;
};

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const object = { a: [1], b: [2] };
const other = { a: [3], b: [4] };

mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }
```

思路：使用 Object.assign 将源对象的属性值合并到目标对象上，并遍历合并后的新对象，通过指定函数自定义处理冲突的属性值，并返回处理后的新对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### omit

返回一个新对象，其中省略了指定属性的属性值

```js
const omit = (obj, props) => {
  const newObj = { ...obj };
  props.forEach(prop => {
    delete newObj[prop];
  });
  return newObj;
};

const object = { a: 1, b: '2', c: 3 };

omit(object, ['a', 'c']);
// => { 'b': '2' }
```

思路：使用 Object.assign 将原对象的属性值复制到一个新对象上，遍历指定省略的属性，将其从新对象中删除，并返回该新对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### omitBy

与 omit 类似，但是根据指定函数判断是否省略属性

```js
const omitBy = (obj, predicate) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach(key => {
    if (predicate(newObj[key])) {
      delete newObj[key];
    }
  });
  return newObj;
};

const object = { a: 1, b: '2', c: 3 };

omitBy(object, isNumber);
// => { 'b': '2' }
```

思路：使用 Object.assign 将原对象的属性值复制到一个新对象上，遍历新对象的每个属性，根据指定函数判断是否需要删除该属性，并返回处理后的新对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### pick

返回一个新对象，其中只包含指定属性的属性值

```js
const pick = (obj, props) =>
  props.reduce((result, prop) => {
    if (prop in obj) {
      result[prop] = obj[prop];
    }
    return result;
  }, {});

const object = { a: 1, b: '2', c: 3 };

pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```

思路：使用 reduce 遍历指定需要选取的属性，将其添加到一个新的对象中，并返回该新对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### pickBy

与 pick 类似，但是根据指定函数判断是否保留属性

```js
const pickBy = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    if (fn(obj[key])) acc[key] = obj[key];
    return acc;
  }, {});

const object = { a: 1, b: '2', c: 3 };

pickBy(object, isNumber);
// => { 'a': 1, 'c': 3 }
```

思路：使用 Object.keys 和 Array.prototype.reduce 方法，返回一个新的对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### result

获取对象上指定路径的值，并根据情况进行函数调用

```js
const result = (obj, path, defaultValue) =>
  path.split('.').reduce((acc, cur) => (acc ? acc[cur] : undefined), obj) ??
  defaultValue;

const object = { a: [{ b: { c1: 3, c2: constant(4) } }] };

result(object, 'a[0].b.c1');
// => 3

result(object, 'a[0].b.c2');
// => 4

result(object, 'a[0].b.c3', 'default');
// => 'default'

result(object, 'a[0].b.c3', constant('default'));
// => 'default'
```

思路：使用 Array.prototype.reduce 方法和 typeof 运算符，支持获取多层路径的值。

**[⬆ 返回顶部](#lodash-函数列表)**

### set

设置对象上指定路径的属性值

```js
const set = (obj, path, value) => {
  const keys = path.split(/[,[\].]+?/);
  const lastKeyIndex = keys.length - 1;
  keys.reduce((acc, key, index) => {
    if (index === lastKeyIndex) acc[key] = value;
    else acc[key] ?? (acc[key] = {});
    return acc[key];
  }, obj);
  return obj;
};

const object = { a: [{ b: { c: 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```

思路：使用 Array.prototype.reduce 方法，支持设置多层路径的值。

**[⬆ 返回顶部](#lodash-函数列表)**

### setWith

与 set 类似，但是指定自定义函数用于设置属性值

```js
const setWith = (obj, path, value, customizer) => {
  const keys = path.split(/[,[\].]+?/);
  const lastKeyIndex = keys.length - 1;
  keys.reduce((acc, key, index) => {
    const newValue = index === lastKeyIndex ? customizer(acc[key], value) : {};
    acc[key] = typeof acc[key] === 'object' ? acc[key] : newValue;
    return acc[key];
  }, obj);
  return obj;
};

const object = {};

setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }
```

思路：使用 Array.prototype.reduce 方法，支持设置多层路径的值。

**[⬆ 返回顶部](#lodash-函数列表)**

### toPairs

将对象转化为键值对数组

```js
const toPairs = obj => Object.entries(obj);

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

toPairs(new Foo());
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```

思路：使用 Object.entries 方法，返回一个由键值对组成的数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### toPairsIn

将对象转化为键值对数组，包括不可枚举属性

```js
const toPairsIn = obj => {
  const result = [];
  for (const key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

toPairsIn(new Foo());
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
```

思路：使用 Object.getOwnPropertyNames 方法，返回一个由键值对组成的数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### transform

对指定对象进行封装，指定转换函数，处理对象上的属性

```js
const transform = (obj, fn, acc) =>
  Object.entries(obj).reduce(
    (result, [key, value]) => fn(result, value, key, obj),
    acc
  );

transform(
  [2, 3, 4],
  (result, n) => {
    result.push((n *= n));
    return n % 2 == 0;
  },
  []
);
// => [4, 9]

transform(
  { a: 1, b: 2, c: 1 },
  (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
  },
  {}
);
// => { '1': ['a', 'c'], '2': ['b'] }
```

思路：使用 Object.entries 方法和 Array.prototype.reduce 方法，返回一个由转换后的对象组成的数组。

**[⬆ 返回顶部](#lodash-函数列表)**

### unset

删除对象上指定路径的属性值

```js
const unset = (obj, path) => {
  const keys = Array.isArray(path) ? path : path.split(/[,[\].]+?/);
  const lastKeyIndex = keys.length - 1;
  
  keys.reduce((acc, key, index) => {
    if (index === lastKeyIndex) {
      delete acc[key];
    }
    return acc[key];
  }, obj);
  
  return obj;
};

const object = { 'a': [{ 'b': { 'c': 7 } }] };
unset(object, 'a[0].b.c');
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] }

unset(object, ['a', '0', 'b', 'c']);
// => true
```

思路：使用 reduce 方法遍历路径数组，在最后一个键时删除对应属性，返回修改后的对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### update

获取对象上指定路径的值，并根据情况进行函数调用，最后将值设置回去

```js
const update = (obj, path, updater) => {
  const keys = Array.isArray(path) ? path : path.split(/[,[\].]+?/);
  const lastKeyIndex = keys.length - 1;
  
  keys.reduce((acc, key, index) => {
    if (index === lastKeyIndex) {
      acc[key] = updater(acc[key]);
    } else {
      acc[key] = acc[key] || {};
    }
    return acc[key];
  }, obj);
  
  return obj;
};

const object = { 'a': [{ 'b': { 'c': 3 } }] };

update(object, 'a[0].b.c', n => n * n);
console.log(object.a[0].b.c);
// => 9

update(object, 'x[0].y.z', n => (n || 0) + 1);
console.log(object.x[0].y.z);
// => 1
```

思路：使用 reduce 方法遍历路径，在最后一个键时应用更新函数，如果路径不存在则创建。

**[⬆ 返回顶部](#lodash-函数列表)**

### updateWith

与 update 类似，但是指定自定义函数用于更新属性值

```js
const updateWith = (obj, path, updater, customizer) => {
  const keys = Array.isArray(path) ? path : path.split(/[,[\].]+?/);
  const lastKeyIndex = keys.length - 1;
  
  keys.reduce((acc, key, index) => {
    if (index === lastKeyIndex) {
      acc[key] = updater(acc[key]);
    } else {
      acc[key] = acc[key] || customizer(acc[key], key, acc);
    }
    return acc[key];
  }, obj);
  
  return obj;
};

const object = {};

updateWith(object, '[0][1]', constant('a'), Object);
// => { '0': { '1': 'a' } }
```

思路：与 update 类似，但使用自定义函数来创建中间对象。

**[⬆ 返回顶部](#lodash-函数列表)**

### values

返回对象上的所有可枚举属性值

```js
const values = obj => Object.values(obj);

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

values(new Foo());
// => [1, 2] (iteration order is not guaranteed)

values('hi');
// => ['h', 'i']
```

思路：使用 Object.values 方法返回对象的所有可枚举属性值。

**[⬆ 返回顶部](#lodash-函数列表)**

### valuesIn

返回对象上的所有属性值，包括不可枚举属性值

```js
const valuesIn = obj => {
  const result = [];
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

valuesIn(new Foo());
// => [1, 2, 3] (iteration order is not guaranteed)
```

思路：使用 for...in 循环遍历对象的所有属性（包括继承的），将属性值添加到结果数组中。

**[⬆ 返回顶部](#lodash-函数列表)**

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### 集合

### countBy：遍历集合，返回一个对象，其中键为指定函数计算得出的值，值为该值出现的次数

### each：遍历集合，对每个元素调用指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### eachRight：与 each 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### every：遍历集合，返回一个布尔值，指示是否所有元素均满足指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### filter：遍历集合，返回一个新集合，其中只包含满足指定函数的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### find：遍历集合，返回第一个满足指定函数的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### findLast：与 find 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### flatMap：遍历集合，对每个元素调用指定函数，并将结果展平到一个新集合中

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### flatMapDeep：与 flatMap 类似，但是对每个元素调用迭代器的结果进行深度展平

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### flatMapDepth：与 flatMap 类似，但是可以指定展平的深度

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### forEach：遍历集合，对每个元素调用指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### forEachRight：与 forEach 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### groupBy：遍历集合，返回一个对象，其中键为指定函数计算得出的值，值为该值所对应的元素集合

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### includes：判断集合中是否包含指定元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### invokeMap：对集合中的每个元素调用指定方法，并返回结果

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### keyBy：遍历集合，返回一个对象，其中键由指定函数计算得出，值为该元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### map：遍历集合，返回一个新集合，其中每个元素由指定函数计算得出

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### orderBy：将集合按指定顺序进行排序

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### partition：遍历集合，返回一个包含满足和不满足指定函数的元素集合的数组

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### reduce：遍历集合，将集合元素进行累积，并返回最终结果

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### reduceRight：与 reduce 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### reject：遍历集合，返回一个新集合，其中不包含满足指定函数的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### sample：返回集合中的随机一个元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### sampleSize：返回集合中的指定数量的随机元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### shuffle：返回一个随机排列的集合

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### size：返回集合的大小

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### some：遍历集合，返回一个布尔值，指示是否有任何一个元素满足指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### sortBy：遍历集合，按指定顺序对每个元素调用指定函数，并返回结果

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### toArray：将集合转化为一个数组

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### toPairs：将集合转化为键值对数组

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### union：将多个集合合并成一个集合，同时去重

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### uniq：返回一个新集合，其中不包含重复的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### uniqBy：与 uniq 类似，但是根据指定函数进行去重

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### uniqWith：与 uniq 类似，但是使用指定的比较函数进行去重

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### unzip：将分组元素返回到打包前的结构

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### unzipWith：与 unzip 类似，但是使用指定的函数对每个组元素进行合并

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### without：返回一个新集合，其中不包含指定的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### xor：返回一个新集合，其中包含只在其中一个集合中出现的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### zip：将多个集合合并成一个元素组成的新集合，每个元素由每个原集合相应位置的元素组成

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### zipObject：将键数组和值数组组合成一个新对象

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

### zipWith：与 zip 类似，但是使用指定的函数对每个组元素进行合并

```js

```

思路：

**[⬆ 返回顶部](#lodash-函数列表)**

## Ramda

> Ramda 是一个实用的 JavaScript 函数式编程库

### Ramda 函数列表

**[数组](#ramda-数组)**

1. [append：在数组末尾添加一个元素](#append)
1. [prepend：在数组开头添加一个元素](#prepend)
1. [concat：合并多个数组](#ramda-concat)
1. [contains：检查数组是否包含给定值](#contains)
1. [drop：返回一个新数组，去掉原数组中的前 n 个元素](#ramda-drop)
1. [dropLast：返回一个新数组，去掉原数组中的后 n 个元素](#droplast)
1. [filter：遍历数组，返回符合条件的元素](#ramda-filter)
1. [find：返回第一个符合条件的元素](#ramda-find)
1. [findIndex：返回第一个符合条件的元素的下标](#ramda-findindex)
1. [flatten：将多维数组转化为一维数组](#ramda-flatten)
1. [head：返回数组中的第一个元素](#ramda-head)
1. [indexOf：返回一个元素在数组中的下标，从前往后找](#ramda-indexof)
1. [init：返回一个新数组，去掉原数组中的最后一个元素](#init)
1. [join：将数组转化为字符串，并用指定的分隔符分隔](#ramda-join)
1. [last：返回数组中的最后一个元素](#ramda-last)
1. [map：遍历数组，将每个元素映射成一个新的元素](#ramda-map)
1. [pluck：从数组对象中提取指定属性值组成的新数组](#pluck)
1. [reduce：遍历数组，累加每个元素到累加器中](#ramda-reduce)
1. [reject：遍历数组，返回不符合条件的元素](#ramda-reject)
1. [reverse：反转数组](#ramda-reverse)
1. [slice：返回一个新数组，从原数组中截取指定范围的元素](#ramda-slice)
1. [sort：对数组进行排序](#sort)
1. [tail：返回一个新数组，去掉原数组中的第一个元素](#ramda-tail)
1. [take：返回一个新数组，包含原数组中前 n 个元素](#ramda-take)
1. [takeLast：返回一个新数组，包含原数组中后 n 个元素](#takelast)
1. [uniq：返回一个新数组，包含所有数组中的不重复元素](#ramda-uniq)
1. [update：替换数组中指定索引位置的元素](#update)
1. [without：返回一个新数组，去掉原数组中指定的元素](#ramda-without)
1. [zip：将多个数组的同一位置的元素合并为一个数组](#ramda-zip)
1. [zipObj：将两个数组转化为一个对象](#ramda-zipobj)

**[对象](#ramda-对象)**

1. [assoc：向对象添加或更新属性](#assoc)
1. [dissoc：从对象中删除属性](#dissoc)
1. [has：判断对象上是否有指定属性](#ramda-has)
1. [keys：返回对象上的所有可枚举属性名](#ramda-keys)
1. [lens：创建一个聚焦对象特定属性的透镜](#lens)
1. [merge：合并对象的属性，后面的对象的属性会覆盖前面的对象](#ramda-merge)
1. [omit：返回一个新对象，其中省略了指定属性的属性值](#ramda-omit)
1. [path：获取对象上嵌套路径的值](#path)
1. [pick：返回一个新对象，其中只包含指定属性的属性值](#ramda-pick)
1. [prop：获取对象上的属性](#prop)
1. [toPairs：将对象转化为键值对数组](#ramda-topairs)
1. [values：返回对象上的所有可枚举属性值](#ramda-values)

**[函数](#ramda-函数)**

1. [always：返回一个函数，该函数始终返回给定值](#always)
1. [compose：从右到左组合函数](#compose)
1. [curry：对指定函数进行柯里化](#ramda-curry)
1. [flip：翻转函数参数](#flip)
1. [identity：返回输入的参数](#identity)
1. [memoize：对指定函数进行记忆化处理，缓存函数的计算结果](#ramda-memoize)
1. [pipe：从左到右组合函数](#pipe)
1. [tap：对输入值执行函数，但返回输入值而不是函数的结果](#tap)

**[逻辑](#ramda-逻辑)**

1. [all：检查是否所有元素都符合条件](#all)
1. [any：检查是否至少有一个元素符合条件](#any)
1. [both：组合两个谓词函数，返回二者的逻辑与](#both)
1. [either：组合两个谓词函数，返回二者的逻辑或](#either)
1. [equals：判断两个值是否相等](#equals)
1. [isEmpty：检查值是否为空](#isempty)
1. [not：对参数取反](#not)

**[字符串](#ramda-字符串)**

1. [match：在字符串中执行正则表达式匹配](#match)
1. [replace：替换字符串中的子字符串](#replace)
1. [split：将字符串按分隔符分割成数组](#split)
1. [test：检查字符串是否匹配正则表达式](#test)
1. [toLower：将字符串转换为小写](#tolower)
1. [toUpper：将字符串转换为大写](#toupper)
1. [trim：删除字符串两端的空白字符](#trim)

### Ramda 数组

### append

在数组末尾添加一个元素

```js
const append = (el, arr) => [...arr, el];

append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
append('c', ['a', 'b']);            //=> ['a', 'b', 'c']
append('c', []);                    //=> ['c']
```

思路：使用ES6的扩展运算符创建一个新数组，并将新元素添加到末尾。

**[⬆ 返回顶部](#ramda-函数列表)**

### prepend

在数组开头添加一个元素

```js
const prepend = (el, arr) => [el, ...arr];

prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
prepend('a', ['b', 'c']);            //=> ['a', 'b', 'c']
prepend('a', []);                    //=> ['a']
```

思路：使用ES6的扩展运算符创建一个新数组，并将新元素添加到开头。

**[⬆ 返回顶部](#ramda-函数列表)**

### contains

检查数组是否包含给定值

```js
const contains = (val, arr) => arr.includes(val);

contains(3, [1, 2, 3]); //=> true
contains(4, [1, 2, 3]); //=> false
contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> false
```

思路：使用数组的includes方法检查元素是否存在于数组中。

**[⬆ 返回顶部](#ramda-函数列表)**

### dropLast

返回一个新数组，去掉原数组中的后 n 个元素

```js
const dropLast = (n, arr) => arr.slice(0, -n || arr.length);

dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
dropLast(3, ['foo', 'bar', 'baz']); //=> []
dropLast(4, ['foo', 'bar', 'baz']); //=> []
dropLast(3, 'ramda');               //=> 'ra'
```

思路：使用数组的slice方法截取数组的前面部分，去掉后n个元素。

**[⬆ 返回顶部](#ramda-函数列表)**

### init

返回一个新数组，去掉原数组中的最后一个元素

```js
const init = arr => arr.slice(0, -1);

init([1, 2, 3]);  //=> [1, 2]
init([1, 2]);     //=> [1]
init([1]);        //=> []
init([]);         //=> []
```

思路：使用数组的slice方法截取数组除最后一个元素外的所有元素。

**[⬆ 返回顶部](#ramda-函数列表)**

### pluck

从数组对象中提取指定属性值组成的新数组

```js
const pluck = (key, arr) => arr.map(obj => obj[key]);

const getAges = pluck('age');
getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]

pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
```

思路：使用map方法遍历数组，提取每个对象中的特定属性值。

**[⬆ 返回顶部](#ramda-函数列表)**

### sort

对数组进行排序

```js
const sort = (compareFn, arr) => [...arr].sort(compareFn);

const sortByFirstItem = sort((a, b) => a[0] - b[0]);
sortByFirstItem([[2, 1], [1, 2]]); //=> [[1, 2], [2, 1]]

const sortByNameCaseInsensitive = sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
sortByNameCaseInsensitive([{name: 'alice'}, {name: 'Bob'}, {name: 'clara'}]); //=> [{name: 'alice'}, {name: 'Bob'}, {name: 'clara'}]
```

思路：使用数组的sort方法并应用比较函数进行排序，创建新数组避免修改原数组。

**[⬆ 返回顶部](#ramda-函数列表)**

### takeLast

返回一个新数组，包含原数组中后 n 个元素

```js
const takeLast = (n, arr) => arr.slice(Math.max(0, arr.length - n));

takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
takeLast(3, 'ramda');               //=> 'mda'
```

思路：使用数组的slice方法截取数组的后n个元素。

**[⬆ 返回顶部](#ramda-函数列表)**

### update

替换数组中指定索引位置的元素

```js
const update = (idx, val, arr) => {
  const result = [...arr];
  result[idx] = val;
  return result;
};

update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
```

思路：创建数组副本并替换指定索引位置的元素。

**[⬆ 返回顶部](#ramda-函数列表)**

### Ramda 对象

### assoc

向对象添加或更新属性

```js
const assoc = (prop, val, obj) => ({...obj, [prop]: val});

assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
assoc('c', 3, {a: 1, b: 2, c: 4}); //=> {a: 1, b: 2, c: 3}
```

思路：创建对象副本并设置指定属性值。

**[⬆ 返回顶部](#ramda-函数列表)**

### dissoc

从对象中删除属性

```js
const dissoc = (prop, obj) => {
  const result = {...obj};
  delete result[prop];
  return result;
};

dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
```

思路：创建对象副本并删除指定属性。

**[⬆ 返回顶部](#ramda-函数列表)**

### lens

创建一个聚焦对象特定属性的透镜

```js
const lens = (getter, setter) => ({
  get: getter,
  set: setter
});

const nameLens = lens(
  obj => obj.name,
  (val, obj) => ({...obj, name: val})
);

const person = {name: 'Alice', age: 30};
nameLens.get(person); //=> 'Alice'
nameLens.set('Bob', person); //=> {name: 'Bob', age: 30}
```

思路：返回一个包含getter和setter函数的对象，用于聚焦特定属性。

**[⬆ 返回顶部](#ramda-函数列表)**

### path

获取对象上嵌套路径的值

```js
const path = (pathArr, obj) => {
  let val = obj;
  for (const prop of pathArr) {
    if (val == null) return undefined;
    val = val[prop];
  }
  return val;
};

path(['a', 'b'], {a: {b: 2}}); //=> 2
path(['a', 'b'], {c: {b: 2}}); //=> undefined
path(['a', 'b', 'c'], {a: {b: {c: 3}}}); //=> 3
```

思路：递归遍历对象的嵌套属性。

**[⬆ 返回顶部](#ramda-函数列表)**

### prop

获取对象上的属性

```js
const prop = (p, obj) => obj[p];

prop('x', {x: 100}); //=> 100
prop('x', {}); //=> undefined
prop(0, [100]); //=> 100
```

思路：简单地访问对象的属性。

**[⬆ 返回顶部](#ramda-函数列表)**

### Ramda 函数

### always

返回一个函数，该函数始终返回给定值

```js
const always = x => () => x;

const t = always('Tee');
t(); //=> 'Tee'
```

思路：创建一个闭包，始终返回预设的值。

**[⬆ 返回顶部](#ramda-函数列表)**

### compose

从右到左组合函数

```js
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last;
const yellGreeting = compose(s => s.toUpperCase(), classyGreeting);
yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
```

思路：使用reduceRight从右到左依次应用函数。

**[⬆ 返回顶部](#ramda-函数列表)**

### flip

翻转函数参数

```js
const flip = fn => (a, b, ...args) => fn(b, a, ...args);

const mergeThree = (a, b, c) => [].concat(a, b, c);
flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
```

思路：返回一个新函数，交换前两个参数的位置。

**[⬆ 返回顶部](#ramda-函数列表)**

### identity

返回输入的参数

```js
const identity = x => x;

identity(1); //=> 1
```

思路：简单地返回传入的参数。

**[⬆ 返回顶部](#ramda-函数列表)**

### pipe

从左到右组合函数

```js
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const f = pipe(Math.pow, x => x + 1, x => x * 2);
f(3, 4); // 首先计算 3^4 = 81，然后 + 1 = 82，最后 * 2 = 164
```

思路：使用reduce从左到右依次应用函数。

**[⬆ 返回顶部](#ramda-函数列表)**

### tap

对输入值执行函数，但返回输入值而不是函数的结果

```js
const tap = fn => x => {
  fn(x);
  return x;
};

const sayX = x => console.log('x is ' + x);
tap(sayX)(100); // 控制台输出 "x is 100"，并返回 100
```

思路：创建一个副作用函数，执行操作但不改变数据流。

**[⬆ 返回顶部](#ramda-函数列表)**

### Ramda 逻辑

### all

检查是否所有元素都符合条件

```js
const all = (predicate, arr) => arr.every(predicate);

all(x => x <= 5, [1, 2, 3, 4, 5]); //=> true
all(x => x <= 4, [1, 2, 3, 4, 5]); //=> false
```

思路：使用数组的every方法检查所有元素是否满足条件。

**[⬆ 返回顶部](#ramda-函数列表)**

### any

检查是否至少有一个元素符合条件

```js
const any = (predicate, arr) => arr.some(predicate);

any(x => x > 4, [1, 2, 3, 4, 5]); //=> true
any(x => x > 5, [1, 2, 3, 4, 5]); //=> false
```

思路：使用数组的some方法检查是否存在满足条件的元素。

**[⬆ 返回顶部](#ramda-函数列表)**

### both

组合两个谓词函数，返回二者的逻辑与

```js
const both = (pred1, pred2) => (...args) => pred1(...args) && pred2(...args);

const gt10 = x => x > 10;
const lt20 = x => x < 20;
const f = both(gt10, lt20);
f(15); //=> true
f(30); //=> false
```

思路：返回一个新函数，组合两个谓词函数的结果。

**[⬆ 返回顶部](#ramda-函数列表)**

### either

组合两个谓词函数，返回二者的逻辑或

```js
const either = (pred1, pred2) => (...args) => pred1(...args) || pred2(...args);

const gt20 = x => x > 20;
const lt5 = x => x < 5;
const f = either(gt20, lt5);
f(15); //=> false
f(25); //=> true
f(3); //=> true
```

思路：返回一个新函数，组合两个谓词函数的结果。

**[⬆ 返回顶部](#ramda-函数列表)**

### equals

判断两个值是否相等

```js
const equals = (a, b) => {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!equals(a[i], b[i])) return false;
    }
    return true;
  }
  return false;
};

equals(1, 1); //=> true
equals(1, '1'); //=> false
equals([1, 2, 3], [1, 2, 3]); //=> true
```

思路：递归比较两个值是否相等，支持数组的深度比较。

**[⬆ 返回顶部](#ramda-函数列表)**

### isEmpty

检查值是否为空

```js
const isEmpty = x => {
  if (x == null) return true;
  if (Array.isArray(x) || typeof x === 'string') return x.length === 0;
  if (typeof x === 'object') return Object.keys(x).length === 0;
  return false;
};

isEmpty([]); //=> true
isEmpty(''); //=> true
isEmpty({}); //=> true
isEmpty(null); //=> true
isEmpty(0); //=> false
isEmpty(false); //=> false
```

思路：根据值的类型检查其是否为空。

**[⬆ 返回顶部](#ramda-函数列表)**

### not

对参数取反

```js
const not = x => !x;

not(true); //=> false
not(false); //=> true
not(0); //=> true
not(1); //=> false
```

思路：应用JavaScript的逻辑非操作符。

**[⬆ 返回顶部](#ramda-函数列表)**

### Ramda 字符串

### match

在字符串中执行正则表达式匹配

```js
const match = (regex, str) => str.match(regex) || [];

match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
match(/a/, 'b'); //=> []
```

思路：应用字符串的match方法，如果没有匹配则返回空数组。

**[⬆ 返回顶部](#ramda-函数列表)**

### replace

替换字符串中的子字符串

```js
const replace = (pattern, replacement, str) => str.replace(pattern, replacement);

replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
```

思路：应用字符串的replace方法。

**[⬆ 返回顶部](#ramda-函数列表)**

### split

将字符串按分隔符分割成数组

```js
const split = (sep, str) => str.split(sep);

split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
```

思路：应用字符串的split方法。

**[⬆ 返回顶部](#ramda-函数列表)**

### test

检查字符串是否匹配正则表达式

```js
const test = (pattern, str) => pattern.test(str);

test(/^x/, 'xyz'); //=> true
test(/^y/, 'xyz'); //=> false
```

思路：应用正则表达式的test方法。

**[⬆ 返回顶部](#ramda-函数列表)**

### toLower

将字符串转换为小写

```js
const toLower = str => str.toLowerCase();

toLower('XYZ'); //=> 'xyz'
```

思路：应用字符串的toLowerCase方法。

**[⬆ 返回顶部](#ramda-函数列表)**

### toUpper

将字符串转换为大写

```js
const toUpper = str => str.toUpperCase();

toUpper('abc'); //=> 'ABC'
```

思路：应用字符串的toUpperCase方法。

**[⬆ 返回顶部](#ramda-函数列表)**

### trim

删除字符串两端的空白字符

```js
const trim = str => str.trim();

trim('   xyz  '); //=> 'xyz'
```

思路：应用字符串的trim方法。

**[⬆ 返回顶部](#ramda-函数列表)**

## React 面试题

> React 是一个用于构建用户界面的 JavaScript 库

### React 面试题列表

**[Hooks](#react-hooks)**

1. [useState：状态管理 Hook](#usestate)
1. [useEffect：副作用处理 Hook](#useeffect)
1. [useContext：上下文 Hook](#usecontext)
1. [useReducer：复杂状态管理 Hook](#usereducer)
1. [useMemo：性能优化 Hook](#usememo)
1. [useCallback：回调函数优化 Hook](#usecallback)
1. [useRef：引用 Hook](#useref)
1. [useLocalStorage：自定义本地存储 Hook](#uselocalstorage)
1. [useDebounce：防抖 Hook](#usedebounce)
1. [usePrevious：获取前一个值的 Hook](#useprevious)
1. [useToggle：切换状态 Hook](#usetoggle)
1. [useInfiniteScroll：无限滚动 Hook](#useinfinitescroll)
1. [useFormValidation：表单验证 Hook](#useformvalidation)
1. [useDrag：拖拽 Hook](#usedrag)

**[组件模式](#react-组件模式)**

1. [高阶组件 HOC](#高阶组件)
1. [Render Props](#render-props)
1. [复合组件模式](#复合组件模式)
1. [受控组件与非受控组件](#受控组件与非受控组件)

**[性能优化](#react-性能优化)**

1. [React.memo](#react-memo)
1. [虚拟滚动](#虚拟滚动)
1. [懒加载](#懒加载)
1. [代码分割](#代码分割)

**[状态管理](#react-状态管理)**

1. [Context API](#context-api)
1. [Redux 模式](#redux-模式)
1. [Zustand 轻量状态管理](#zustand)

**[错误处理](#react-错误处理)**

1. [错误边界](#错误边界)
1. [错误监控](#错误监控)

### React Hooks

### useState

状态管理 Hook，用于在函数组件中添加状态

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
```

**面试要点：**
- useState 返回一个数组，包含当前状态值和更新状态的函数
- 状态更新是异步的，可能会被批处理
- 函数式更新：`setCount(prev => prev + 1)` 确保基于最新状态更新

**[⬆ 返回顶部](#react-面试题列表)**

### useEffect

副作用处理 Hook，用于处理组件的副作用操作

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 清理函数
    return () => clearInterval(interval);
  }, []); // 空依赖数组，只在挂载时执行

  return <div>Timer: {seconds}s</div>;
};
```

**面试要点：**
- 第二个参数是依赖数组，控制 effect 的执行时机
- 返回清理函数用于清理副作用
- 常见用途：数据获取、订阅、手动 DOM 操作

**[⬆ 返回顶部](#react-面试题列表)**

### useContext

上下文 Hook，用于在组件树中共享数据

```jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      style={{ 
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      Toggle Theme ({theme})
    </button>
  );
};
```

**面试要点：**
- 避免 prop drilling 问题
- 只有当 Provider 的 value 改变时，消费组件才会重新渲染
- 过度使用可能导致性能问题

**[⬆ 返回顶部](#react-面试题列表)**

### useLocalStorage

自定义本地存储 Hook

```jsx
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// 使用示例
const Settings = () => {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
};
```

**面试要点：**
- 封装了 localStorage 的读写逻辑
- 处理了 JSON 序列化和错误情况
- 支持函数式更新

**[⬆ 返回顶部](#react-面试题列表)**

### useDebounce

防抖 Hook，用于延迟执行操作

```jsx
import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// 使用示例
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // 执行搜索
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};
```

**面试要点：**
- 防抖可以减少不必要的 API 调用
- 常用于搜索输入、窗口 resize 等场景
- 通过 setTimeout 和 clearTimeout 实现

**[⬆ 返回顶部](#react-面试题列表)**

### 高阶组件

高阶组件（HOC）是一个函数，接收一个组件并返回一个新组件

```jsx
// withLoading HOC
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

// withAuth HOC
const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
      return <div>Please log in to access this page.</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

// 使用示例
const UserProfile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
  </div>
);

const ProtectedUserProfile = withAuth(withLoading(UserProfile));
```

**面试要点：**
 - HOC 是复用组件逻辑的一种高级技巧
- 不要在 render 方法中使用 HOC
- 务必复制静态方法
- Refs 不会被传递

**[⬆ 返回顶部](#react-面试题列表)**

### usePrevious

获取前一个值的 Hook

```jsx
import { useRef, useEffect } from 'react';

const usePrevious = (value) => {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  });
  
  return ref.current;
};

// 使用示例
const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

**面试要点：**
- 使用 useRef 存储前一个值
- useEffect 在渲染后更新 ref
- 常用于比较前后状态变化

**[⬆ 返回顶部](#react-面试题列表)**

### useToggle

切换状态 Hook

```jsx
import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => setValue(v => !v), []);
  
  return [value, toggle];
};

// 使用示例
const ToggleComponent = () => {
  const [isVisible, toggleVisible] = useToggle(false);
  
  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This content is toggleable!</p>}
    </div>
  );
};
```

**面试要点：**
- 封装了布尔值的切换逻辑
- 使用 useCallback 优化性能
- 简化了开关状态的管理

**[⬆ 返回顶部](#react-面试题列表)**

### useInfiniteScroll

无限滚动 Hook

```jsx
import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (fetchMore) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreData();
  }, [isFetching]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  };

  const fetchMoreData = useCallback(async () => {
    await fetchMore();
    setIsFetching(false);
  }, [fetchMore]);

  return [isFetching, setIsFetching];
};

// 使用示例
const InfiniteList = () => {
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreItems);

  async function fetchMoreItems() {
    // 模拟 API 调用
    const newItems = await fetch('/api/items');
    setItems(prevItems => [...prevItems, ...newItems]);
  }

  return (
    <div>
      {items.map(item => <div key={item.id}>{item.name}</div>)}
      {isFetching && <p>Fetching more items...</p>}
    </div>
  );
};
```

**面试要点：**
- 监听滚动事件实现无限加载
- 防止重复请求的状态管理
- 性能优化：及时清理事件监听器

**[⬆ 返回顶部](#react-面试题列表)**

### useFormValidation

表单验证 Hook

```jsx
import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log('Form submitted successfully');
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting
  };
};

// 使用示例
const LoginForm = () => {
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting
  } = useFormValidation({ email: '', password: '' }, validate);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email}</p>}
      
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Password"
      />
      {errors.password && <p>{errors.password}</p>}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
```

**面试要点：**
- 封装了表单状态和验证逻辑
- 支持实时验证和提交验证
- 提供了完整的表单处理流程

**[⬆ 返回顶部](#react-面试题列表)**

### useDrag

拖拽 Hook

```jsx
import { useState, useRef, useEffect } from 'react';

const useDrag = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e) => {
    const rect = elementRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
  };

  return {
    elementRef,
    position,
    isDragging,
    handleMouseDown
  };
};

// 使用示例
const DraggableBox = () => {
  const { elementRef, position, isDragging, handleMouseDown } = useDrag();

  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: 100,
        height: 100,
        backgroundColor: isDragging ? 'lightblue' : 'lightgray',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
    >
      Drag me!
    </div>
  );
};
```

**面试要点：**
- 处理鼠标事件实现拖拽功能
- 计算相对位置避免跳跃
- 及时清理事件监听器防止内存泄漏

**[⬆ 返回顶部](#react-面试题列表)**

### React 组件模式

### Render Props

Render Props 是一种在组件间共享代码的简单技术

```jsx
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// 使用示例
const App = () => (
  <div>
    <Mouse render={({ x, y }) => (
      <h1>The mouse position is ({x}, {y})</h1>
    )}/>
  </div>
);
```

**面试要点：**
- 通过 prop 传递渲染逻辑
- 比 HOC 更灵活，避免了嵌套地狱
- 可以在运行时动态决定渲染内容

**[⬆ 返回顶部](#react-面试题列表)**

### 错误边界

错误边界是一种 React 组件，可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// 使用示例
const App = () => (
  <ErrorBoundary>
    <MyComponent />
  </ErrorBoundary>
);
```

**面试要点：**
- 只能捕获子组件的错误，不能捕获自身错误
- 不能捕获事件处理器、异步代码、服务端渲染的错误
- 只有类组件可以成为错误边界

**[⬆ 返回顶部](#react-面试题列表)** 
## Vue 面试题

> Vue.js 是一套用于构建用户界面的渐进式框架

### Vue 面试题列表

**[响应式原理](#vue-响应式原理)**

1. [Vue2 响应式原理](#vue2-响应式原理)
1. [Vue3 响应式原理](#vue3-响应式原理)
1. [响应式数据的注意事项](#响应式数据的注意事项)

**[生命周期](#vue-生命周期)**

1. [Vue2 生命周期](#vue2-生命周期)
1. [Vue3 生命周期](#vue3-生命周期)
1. [生命周期应用场景](#生命周期应用场景)

**[组件通信](#vue-组件通信)**

1. [父子组件通信](#父子组件通信)
1. [兄弟组件通信](#兄弟组件通信)
1. [跨级组件通信](#跨级组件通信)

**[计算属性与侦听器](#vue-计算属性与侦听器)**

1. [computed vs methods](#computed-vs-methods)
1. [computed vs watch](#computed-vs-watch)
1. [深度侦听](#深度侦听)

### Vue 响应式原理

### Vue2 响应式原理

Vue2 使用 Object.defineProperty 实现响应式

```js
// 简化版 Vue2 响应式实现
function defineReactive(obj, key, val) {
  const dep = new Dep();
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 依赖收集
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 派发更新
      dep.notify();
    }
  });
}

class Dep {
  constructor() {
    this.subs = [];
  }
  
  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target);
    }
  }
  
  notify() {
    this.subs.forEach(watcher => watcher.update());
  }
}

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.cb = cb;
    this.getter = expOrFn;
    this.value = this.get();
  }
  
  get() {
    Dep.target = this;
    const value = this.getter.call(this.vm);
    Dep.target = null;
    return value;
  }
  
  update() {
    const newValue = this.get();
    const oldValue = this.value;
    this.value = newValue;
    this.cb.call(this.vm, newValue, oldValue);
  }
}
```

**面试要点：**
- 通过 Object.defineProperty 劫持对象属性
- 无法检测数组索引和长度的变化
- 无法检测对象属性的添加或删除
- 需要递归遍历所有属性

**[⬆ 返回顶部](#vue-面试题列表)**

### Vue3 响应式原理

Vue3 使用 Proxy 实现响应式

```js
// 简化版 Vue3 响应式实现
const targetMap = new WeakMap();

function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  
  if (activeEffect) {
    dep.add(activeEffect);
  }
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return result;
    }
  });
}

let activeEffect = null;

function effect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}
```

**面试要点：**
- 使用 Proxy 可以监听整个对象
- 可以检测数组索引和长度的变化
- 可以检测对象属性的添加或删除
- 性能更好，懒代理

**[⬆ 返回顶部](#vue-面试题列表)**

### Vue 生命周期

### Vue2 生命周期

```js
export default {
  name: 'LifecycleDemo',
  data() {
    return {
      message: 'Hello Vue2'
    };
  },
  
  // 创建阶段
  beforeCreate() {
    console.log('beforeCreate: 实例初始化之后，数据观测和事件配置之前');
  },
  
  created() {
    console.log('created: 实例创建完成，可以访问data、computed、methods等');
    // 适合进行数据初始化、API调用
  },
  
  // 挂载阶段
  beforeMount() {
    console.log('beforeMount: 挂载开始之前，render函数首次被调用');
  },
  
  mounted() {
    console.log('mounted: 实例挂载完成，可以访问DOM');
    // 适合进行DOM操作、启动定时器等
  },
  
  // 更新阶段
  beforeUpdate() {
    console.log('beforeUpdate: 数据更新时调用，发生在虚拟DOM重新渲染之前');
  },
  
  updated() {
    console.log('updated: 数据更新导致的虚拟DOM重新渲染完成');
    // 注意避免在此更新数据，可能导致无限循环
  },
  
  // 销毁阶段
  beforeDestroy() {
    console.log('beforeDestroy: 实例销毁之前调用');
    // 适合清理定时器、取消订阅等
  },
  
  destroyed() {
    console.log('destroyed: 实例销毁后调用');
  }
};
```

**面试要点：**
- created 中可以访问数据，但无法访问 DOM
- mounted 中可以访问 DOM，适合进行 DOM 操作
- beforeDestroy 中进行清理工作

**[⬆ 返回顶部](#vue-面试题列表)**

### Vue 组件通信

### 父子组件通信

```vue
<!-- 父组件 -->
<template>
  <div>
    <child-component 
      :message="parentMessage"
      @child-event="handleChildEvent"
    />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent'
    };
  },
  methods: {
    handleChildEvent(data) {
      console.log('Received from child:', data);
    }
  }
};
</script>

<!-- 子组件 -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="sendToParent">Send to Parent</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    sendToParent() {
      this.$emit('child-event', 'Hello from child');
    }
  }
};
</script>
```

**面试要点：**
- Props 向下传递数据
- Events 向上传递数据
- Props 是只读的，不应该直接修改

**[⬆ 返回顶部](#vue-面试题列表)**

### computed vs watch

```js
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      fullName: 'John Doe'
    };
  },
  
  computed: {
    // 计算属性：基于依赖缓存，只有依赖发生改变才会重新计算
    computedFullName() {
      console.log('computed executed');
      return this.firstName + ' ' + this.lastName;
    }
  },
  
  watch: {
    // 侦听器：观察和响应数据的变化
    firstName(newVal, oldVal) {
      console.log(`firstName changed from ${oldVal} to ${newVal}`);
      this.fullName = newVal + ' ' + this.lastName;
    },
    
    lastName: {
      handler(newVal, oldVal) {
        this.fullName = this.firstName + ' ' + newVal;
      },
      immediate: true // 立即执行
    },
    
    // 深度侦听
    user: {
      handler(newVal, oldVal) {
        console.log('User object changed');
      },
      deep: true
    }
  }
};
```

**面试要点：**
- computed 有缓存，依赖不变时不会重新计算
- watch 适合执行异步操作或开销较大的操作
- computed 适合计算衍生数据

## JavaScript 面试题

> JavaScript 是一种高级的、解释型的编程语言

### JavaScript 面试题列表

**[数据类型](#js-数据类型)**

1. [基本数据类型](#基本数据类型)
1. [引用数据类型](#引用数据类型)
1. [类型检测](#类型检测)
1. [类型转换](#类型转换)

**[闭包与作用域](#js-闭包与作用域)**

1. [作用域链](#作用域链)
1. [闭包的概念](#闭包的概念)
1. [闭包的应用](#闭包的应用)

**[原型与继承](#js-原型与继承)**

1. [原型链](#原型链)
1. [继承方式](#继承方式)
1. [ES6 类](#es6-类)

**[异步编程](#js-异步编程)**

1. [Promise](#promise)
1. [async/await](#async-await)
1. [事件循环](#事件循环)

### JS 数据类型

### 基本数据类型

JavaScript 有 7 种基本数据类型

```js
// 1. Number
let num = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;

// 2. String
let str = 'Hello World';
let template = `Hello ${name}`;

// 3. Boolean
let isTrue = true;
let isFalse = false;

// 4. Undefined
let undefined_var;
console.log(undefined_var); // undefined

// 5. Null
let null_var = null;

// 6. Symbol (ES6)
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false

// 7. BigInt (ES2020)
let bigInt = 123456789012345678901234567890n;
```

**面试要点：**
- 基本类型存储在栈内存中
- Symbol 每次创建都是唯一的
- BigInt 可以表示任意精度的整数

**[⬆ 返回顶部](#javascript-面试题列表)**

### 类型检测

```js
// typeof 操作符
console.log(typeof 42);          // "number"
console.log(typeof 'hello');     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (这是一个历史遗留bug)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"

// instanceof 操作符
console.log([] instanceof Array);        // true
console.log({} instanceof Object);       // true
console.log(new Date() instanceof Date); // true

// Object.prototype.toString.call()
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

console.log(getType([]));        // "array"
console.log(getType({}));        // "object"
console.log(getType(null));      // "null"
console.log(getType(new Date())); // "date"

// 自定义类型检测函数
function isArray(value) {
  return Array.isArray(value);
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isFunction(value) {
  return typeof value === 'function';
}
```

**面试要点：**
- typeof null 返回 "object" 是历史遗留问题
- instanceof 检测原型链
- Object.prototype.toString.call() 是最准确的类型检测方法

**[⬆ 返回顶部](#javascript-面试题列表)**

### 闭包的概念

闭包是指有权访问另一个函数作用域中变量的函数

```js
// 基本闭包示例
function outerFunction(x) {
  // 外部函数的变量
  let outerVariable = x;
  
  // 内部函数
  function innerFunction(y) {
    // 访问外部函数的变量
    console.log(outerVariable + y);
  }
  
  return innerFunction;
}

const closure = outerFunction(10);
closure(5); // 输出: 15

// 闭包的经典问题
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 输出: 3, 3, 3
  }, 100);
}

// 解决方案1: 使用立即执行函数
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 输出: 0, 1, 2
    }, 100);
  })(i);
}

// 解决方案2: 使用 let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 输出: 0, 1, 2
  }, 100);
}

// 模块模式
const module = (function() {
  let privateVariable = 0;
  
  function privateFunction() {
    console.log('This is private');
  }
  
  return {
    publicMethod: function() {
      privateVariable++;
      privateFunction();
      return privateVariable;
    },
    
    getPrivateVariable: function() {
      return privateVariable;
    }
  };
})();

console.log(module.publicMethod()); // 1
console.log(module.getPrivateVariable()); // 1
```

**面试要点：**
- 闭包可以访问外部函数的变量
- 闭包会保持对外部变量的引用
- 常用于模块模式、回调函数等场景

**[⬆ 返回顶部](#javascript-面试题列表)**

### 原型链

JavaScript 中每个对象都有一个原型对象

```js
// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 在原型上添加方法
Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

Person.prototype.getAge = function() {
  return this.age;
};

// 创建实例
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.sayHello(); // "Hello, I'm Alice"
person2.sayHello(); // "Hello, I'm Bob"

// 原型链查找
console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('sayHello')); // false
console.log('sayHello' in person1); // true

// 原型链关系
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

// 继承示例
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

// 设置原型链
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// 添加子类方法
Student.prototype.study = function() {
  console.log(`${this.name} is studying`);
};

const student = new Student('Charlie', 20, 'A');
student.sayHello(); // "Hello, I'm Charlie"
student.study(); // "Charlie is studying"
```

**面试要点：**
- 每个对象都有 __proto__ 属性指向其原型
- 构造函数的 prototype 属性是实例的原型
- 原型链是 JavaScript 实现继承的机制

**[⬆ 返回顶部](#javascript-面试题列表)**

### Promise

Promise 是异步编程的一种解决方案

```js
// 基本 Promise 用法
const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  
  setTimeout(() => {
    if (success) {
      resolve('操作成功');
    } else {
      reject(new Error('操作失败'));
    }
  }, 1000);
});

promise
  .then(result => {
    console.log(result);
    return '处理结果';
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.message);
  })
  .finally(() => {
    console.log('操作完成');
  });

// Promise.all - 并行执行
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [1, 2, 3]
  });

// Promise.race - 竞速
const fastPromise = new Promise(resolve => setTimeout(() => resolve('fast'), 100));
const slowPromise = new Promise(resolve => setTimeout(() => resolve('slow'), 200));

Promise.race([fastPromise, slowPromise])
  .then(value => {
    console.log(value); // 'fast'
  });

// 手动实现简单的 Promise
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else if (this.state === 'rejected') {
        try {
          const result = onRejected(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else {
        this.onFulfilledCallbacks.push(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
        
        this.onRejectedCallbacks.push(() => {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }
}
```

**面试要点：**
- Promise 有三种状态：pending、fulfilled、rejected
- Promise 状态一旦改变就不能再变
- then 方法返回新的 Promise，支持链式调用

**[⬆ 返回顶部](#javascript-面试题列表)**

## TypeScript 面试题

> TypeScript 是 JavaScript 的一个超集，添加了静态类型定义

### TypeScript 面试题列表

**[基础类型](#ts-基础类型)**

1. [基本类型](#ts-基本类型)
1. [数组和元组](#数组和元组)
1. [枚举类型](#枚举类型)
1. [联合类型](#联合类型)

**[接口与类型别名](#ts-接口与类型别名)**

1. [接口定义](#接口定义)
1. [类型别名](#类型别名)
1. [接口继承](#接口继承)

**[泛型](#ts-泛型)**

1. [泛型函数](#泛型函数)
1. [泛型接口](#泛型接口)
1. [泛型约束](#泛型约束)

**[高级类型](#ts-高级类型)**

1. [映射类型](#映射类型)
1. [条件类型](#条件类型)
1. [工具类型](#工具类型)

### TS 基础类型

### TS 基本类型

TypeScript 支持与 JavaScript 几乎相同的数据类型

```typescript
// 基本类型
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// 数组
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 元组 Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any - 任意类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void - 空值
function warnUser(): void {
    console.log("This is my warning message");
}

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

// Never - 永不存在的值的类型
function error(message: string): never {
    throw new Error(message);
}

// Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
```

**面试要点：**
- TypeScript 是 JavaScript 的超集
- 提供静态类型检查
- 编译时进行类型检查

**[⬆ 返回顶部](#typescript-面试题列表)**

### 接口定义

接口是对行为的抽象，具体行为由类去实现

```typescript
// 基本接口
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return `Hello ${person.name}`;
}

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// 函数类型接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// 可索引的类型
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

// 类类型接口
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}
```

**面试要点：**
- 接口定义对象的结构
- 支持可选属性、只读属性
- 可以描述函数类型、数组类型等

**[⬆ 返回顶部](#typescript-面试题列表)**

### 泛型函数

泛型允许我们在定义函数、接口或类的时候，不预先指定具体的类型

```typescript
// 基本泛型函数
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity("myString"); // 类型推论

// 泛型数组
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity2;

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// loggingIdentity2(3); // Error
loggingIdentity2({length: 10, value: 3}); // OK

// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // OK
// getProperty(x, "m"); // Error
```

**面试要点：**
- 泛型提供了类型安全的同时保持了灵活性
- 可以对泛型进行约束
- 支持多个泛型参数

**[⬆ 返回顶部](#typescript-面试题列表)**

### 工具类型

TypeScript 提供了一些内置的工具类型

```typescript
// Partial<T> - 将T中的所有属性设为可选
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// Required<T> - 将T中的所有属性设为必需
interface Props {
  a?: number;
  b?: string;
}

const obj: Required<Props> = { a: 5, b: "hello" };

// Readonly<T> - 将T中的所有属性设为只读
interface Todo2 {
  title: string;
}

const todo: Readonly<Todo2> = {
  title: "Delete inactive users",
};

// todo.title = "Hello"; // Error

// Pick<T, K> - 从T中选择一组属性K
interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo3, "title" | "completed">;

const todo2: TodoPreview = {
  title: "Clean up desktop",
  completed: false,
};

// Omit<T, K> - 从T中排除一组属性K
type TodoInfo = Omit<Todo3, "completed">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

// Record<K, T> - 构造一个类型，其属性名的类型为K，属性值的类型为T
type Page = "home" | "about" | "contact";

const nav: Record<Page, string> = {
  home: "/",
  about: "/about",
  contact: "/contact",
};

// Exclude<T, U> - 从T中排除可以赋值给U的类型
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

// Extract<T, U> - 从T中提取可以赋值给U的类型
type T1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

// NonNullable<T> - 从T中排除null和undefined
type T2 = NonNullable<string | number | undefined>; // string | number

// ReturnType<T> - 获取函数T的返回类型
declare function f1(): { a: number; b: string };
type T3 = ReturnType<typeof f1>; // { a: number; b: string }
```

**面试要点：**
- 工具类型提供了类型转换的便利
- 常用于处理已有类型的变形
- 提高了代码的复用性和类型安全性

**[⬆ 返回顶部](#typescript-面试题列表)** 
 ---

## 总结

本项目提供了完整的前端面试题库，包括：

### 工具库实现
- **Lodash**: 80+ 个常用方法的完整实现
- **Ramda**: 50+ 个函数式编程方法的实现

### 前端框架面试题
- **React**: Hooks、组件模式、性能优化等核心概念
- **Vue**: 响应式原理、生命周期、组件通信等重点内容

### 基础技术面试题
- **JavaScript**: 数据类型、闭包、原型链、异步编程等基础知识
- **TypeScript**: 类型系统、泛型、工具类型等进阶内容

### 特色功能
- 📚 **完整的代码示例**: 每个知识点都有详细的代码实现
- 🎯 **面试要点总结**: 突出重点，便于快速复习
- 🔗 **便捷的导航**: 支持快速跳转和返回顶部
- ✅ **单元测试**: 提供完整的测试用例

### 使用建议
1. **系统学习**: 按照目录顺序逐一学习各个知识点
2. **重点突破**: 针对薄弱环节进行专项练习
3. **实践验证**: 运行测试用例验证理解程度
4. **面试准备**: 重点关注"面试要点"部分

希望这个项目能够帮助你在前端面试中取得好成绩！🚀 
