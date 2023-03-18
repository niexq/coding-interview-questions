# 🔥 coding-interview-questions

前端常用工具库及高频面试题

### 目录

| 序号 | 系列                                  | 测试    |
| ---- | ------------------------------------- | ------- |
| 1    | [✅ Lodash 函数列表](#lodash函数列表) | ✅ 通过 |
| 2    | [✅ Ramda 函数列表](#ramda函数列表)   | ✅ 通过 |
| 3    | [✅ JavaScript高级程序设计第4版学习笔记](#javascript高级程序设计第4版学习笔记)       | 无 |
| 4    | [✅ React 面试题](#react面试题)       | 💻 TODO |
| n    | [💻 TODO](#TODO)                      | 💻 TODO |

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
1. [fromPairs：将一个二维数组转化为一个对象](#fromPairs)
1. [indexOf：返回一个元素在数组中的下标，从前往后找](#indexOf)
1. [initial：返回一个新数组，去掉原数组中的最后一个元素](#initial)
1. [intersection：返回一个数组，包含在所有数组中都存在的元素](#intersection)
1. [join：将数组转化为字符串，并用指定的分隔符分隔](#join)
1. [last：返回数组中的最后一个元素](#last)
1. [lastIndexOf：返回一个元素在数组中的下标，从后往前找](#lastIndexOf)
1. [pull：从数组中去掉指定的元素](#pull)
1. [pullAt：从数组中取出指定下标的元素，并返回一个新数组](#pullAt)
1. [reverse：反转数组](#reverse)
1. [slice：返回一个新数组，从原数组中截取指定范围的元素](#slice)
1. [sortedIndex：返回一个元素应该插入到数组中的下标](#sortedIndex)
1. [tail：返回一个新数组，去掉原数组中的第一个元素](#tail)
1. [take：返回一个新数组，包含原数组中前 n 个元素](#take)
1. [takeRight：返回一个新数组，包含原数组中后 n 个元素](#takeRight)
1. [union：返回一个新数组，包含所有数组中的不重复元素](#fromPairs)
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
1. [flatMapDepth：遍历数组，将每个元素映射成一个新的数组，指定递归的深度，再将多个数组合并成一个新数组](#flatMapDepth)
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
1. [overArgs：对指定函数进行封装，转换参数的形式](#overArgs)
1. [partial：对指定函数进行部分应用，指定部分参数](#partial)
1. [partialRight：与 partial 类似，但是从右到左指定部分参数](#partialright)
1. [rearg：对指定函数进行封装，调整参数的位置](#rearg)
1. [rest：对指定函数进行封装，将参数集合成一个数组传入原函数](#rest)
1. [spread：对指定函数进行封装，将参数数组展开作为多个参数传入原函数](#spread)
1. [throttle：对指定函数进行节流处理](#throttle)

**[对象](#对象)**

1. [assign：合并对象的属性，后面的对象的属性会覆盖前面的对象](#assign)
1. [defaults：对指定对象进行封装，将默认值合并进去](#defaults)
1. [defaultsDeep：与 defaults 类似，但是支持嵌套对象](#defaultsDeep)
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
1. [mergeWith：与 merge 类似，但是指定合并函数，用于处理冲突的属性值](#mergeWith)
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

**[⬆ 返回顶部](#lodash函数列表)**

### compact

去除数组中的假值（false、null、0、""、undefined、NaN）

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

思路：使用 filter()方法，过滤出数组中的真值，Boolean()函数将所有假值转化为 false，所有真值转化为 true。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### flatten

将多维数组转化为一维数组

```js
const flatten = arr => [].concat(...arr);

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

思路：使用扩展运算符展开多维数组，再使用 concat 方法将展开后的一维数组拼接起来，得到最终的一维数组。

**[⬆ 返回顶部](#lodash函数列表)**

### flattenDeep

将多维数组转化为一维数组，递归进行

```js
const flattenDeep = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? flattenDeep(v) : v)));

flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

思路：使用 Array.map 遍历数组，对于数组中的每个元素，如果是数组则递归调用 flattenDeep 函数，否则直接返回该元素，最终使用扩展运算符展开数组，并使用 concat 方法拼接起来。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### initial

返回一个新数组，去掉原数组中的最后一个元素

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]);
// => [1, 2]
```

思路：使用数组的 slice 方法截取出除了最后一个元素的部分，得到一个新数组。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### join

将数组转化为字符串，并用指定的分隔符分隔

```js
const join = (arr, separator = ',') => arr.reduce((res, val, i) => `${res}${i ? separator : ''}${val}`, '');

join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

思路：使用 reduce 方法遍历数组，将每个元素和分隔符拼接起来，最终得到一个拼接好的字符串。

**[⬆ 返回顶部](#lodash函数列表)**

### last

返回数组中的最后一个元素

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]);
// => 3
```

思路：返回数组中的最后一个元素。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### slice

返回一个新数组，从原数组中截取指定范围的元素

```js
const slice = (arr, start, end) => arr.slice(start, end);
```

思路：直接调用原生的 slice() 方法。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### tail

返回一个新数组，去掉原数组中的第一个元素

```js
const tail = arr => arr.slice(1);

tail([1, 2, 3]);
// => [2, 3]
```

思路：利用 slice() 方法去掉第一个元素即可。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### union

返回一个新数组，包含所有数组中的不重复元素

```js
const union = (...args) => [...new Set(args.flat())];

union([2], [1, 2]);
// => [2, 1]
```

思路：flat() 方法将多维数组转为一维，Set 数据结构去重，再转回数组即可。

**[⬆ 返回顶部](#lodash函数列表)**

### uniq

返回一个新数组，包含所有数组中的不重复元素

```js
const uniq = arr => [...new Set(arr)];

uniq([2, 1, 2]);
// => [2, 1]
```

思路：同样利用 Set() 数据结构去重。

**[⬆ 返回顶部](#lodash函数列表)**

### without

返回一个新数组，去掉原数组中指定的元素

```js
const without = (arr, ...args) => arr.filter(item => !args.includes(item));

without([2, 1, 2, 3], 1, 2);
// => [3]
```

思路：同 pull 方法。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### zip

将多个数组的同一位置的元素合并为一个数组

```js
const zip = (...arrays) =>
  arrays[0].map((_, i) => arrays.map(array => array[i]));

zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
```

思路：使用了 Rest 参数，首先取出第一个数组，然后使用 map 遍历第一个数组的长度，通过索引遍历所有数组的该索引元素，将其组合成一个新的数组并返回。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### zipObject

将两个数组转化为一个对象

```js
const zipObject = (keys, values) =>
  keys.reduce((obj, key, i) => ({ ...obj, [key]: values[i] }), {});

zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
```

思路：使用 reduce 函数遍历 keys 数组，每次将 keys 数组中的一个元素作为属性名，values 数组中相同位置的元素作为属性值，然后将它们存入一个新对象中，最后返回该对象。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

思路：

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### sample

随机返回数组或对象中的一个元素

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([1, 2, 3, 4]);
// => 2
```

思路：使用 Math.random 方法生成随机数，再根据数组的长度随机获取一个元素。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### shuffle

随机打乱数组或对象中的元素

```js
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

思路：使用 sort 方法和 Math.random 方法打乱数组顺序即可。

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

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

**[⬆ 返回顶部](#lodash函数列表)**

### unset

删除对象上指定路径的属性值

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### update：获取对象上指定路径的值，并根据情况进行函数调用，最后将值设置回去

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### updateWith：与 update 类似，但是指定自定义函数用于更新属性值

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### values：返回对象上的所有可枚举属性值

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### valuesIn：返回对象上的所有属性值，包括不可枚举属性值

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### 集合

### countBy：遍历集合，返回一个对象，其中键为指定函数计算得出的值，值为该值出现的次数

### each：遍历集合，对每个元素调用指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### eachRight：与 each 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### every：遍历集合，返回一个布尔值，指示是否所有元素均满足指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### filter：遍历集合，返回一个新集合，其中只包含满足指定函数的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### find：遍历集合，返回第一个满足指定函数的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### findLast：与 find 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### flatMap：遍历集合，对每个元素调用指定函数，并将结果展平到一个新集合中

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### flatMapDeep：与 flatMap 类似，但是对每个元素调用迭代器的结果进行深度展平

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### flatMapDepth：与 flatMap 类似，但是可以指定展平的深度

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### forEach：遍历集合，对每个元素调用指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### forEachRight：与 forEach 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### groupBy：遍历集合，返回一个对象，其中键为指定函数计算得出的值，值为该值所对应的元素集合

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### includes：判断集合中是否包含指定元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### invokeMap：对集合中的每个元素调用指定方法，并返回结果

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### keyBy：遍历集合，返回一个对象，其中键由指定函数计算得出，值为该元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### map：遍历集合，返回一个新集合，其中每个元素由指定函数计算得出

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### orderBy：将集合按指定顺序进行排序

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### partition：遍历集合，返回一个包含满足和不满足指定函数的元素集合的数组

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### reduce：遍历集合，将集合元素进行累积，并返回最终结果

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### reduceRight：与 reduce 类似，但是从集合的末尾开始遍历

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### reject：遍历集合，返回一个新集合，其中不包含满足指定函数的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### sample：返回集合中的随机一个元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### sampleSize：返回集合中的指定数量的随机元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### shuffle：返回一个随机排列的集合

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### size：返回集合的大小

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### some：遍历集合，返回一个布尔值，指示是否有任何一个元素满足指定的函数

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### sortBy：遍历集合，按指定顺序对每个元素调用指定函数，并返回结果

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### toArray：将集合转化为一个数组

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### toPairs：将集合转化为键值对数组

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### union：将多个集合合并成一个集合，同时去重

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### uniq：返回一个新集合，其中不包含重复的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### uniqBy：与 uniq 类似，但是根据指定函数进行去重

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### uniqWith：与 uniq 类似，但是使用指定的比较函数进行去重

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### unzip：将分组元素返回到打包前的结构

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### unzipWith：与 unzip 类似，但是使用指定的函数对每个组元素进行合并

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### without：返回一个新集合，其中不包含指定的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### xor：返回一个新集合，其中包含只在其中一个集合中出现的元素

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### zip：将多个集合合并成一个元素组成的新集合，每个元素由每个原集合相应位置的元素组成

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### zipObject：将键数组和值数组组合成一个新对象

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

### zipWith：与 zip 类似，但是使用指定的函数对每个组元素进行合并

```js

```

思路：

**[⬆ 返回顶部](#lodash函数列表)**

## Ramda

> 一款实用的 JavaScript 函数式编程库

### Ramda 函数列表

### JavaScript高级程序设计第4版学习笔记
![](https://raw.githubusercontent.com/niexq/picbed/main/picgo/JavaScriptredbook.jpg)
👆上述是截图，点击无效👆
👉详细内容请点击👉语雀地址：https://www.yuque.com/u1907104/pvxyxw/ff8h7vmgfx0wlgog

## 常见的 React 面试题

### React 面试题

| 序号 | 问题                                                                                                  |
| ---- | ----------------------------------------------------------------------------------------------------- |
| 1    | [key 属性有什么作用？](#key-属性有什么作用)                                                           |
| 2    | [refs 属性有什么作用？](#refs-属性有什么作用)                                                         |
| 3    | [PureComponent 组件有什么作用？](#purecomponent-组件有什么作用)                                       |
| 4    | [memo 方法有什么作用？](#memo-方法有什么作用)                                                         |
| 5    | [错误边界有什么作用？](#错误边界有什么作用)                                                           |
| 6    | [什么是受控组件和非受控组件？](#什么是受控组件和非受控组件)                                           |
| 7    | [什么是高阶组件？](#什么是高阶组件)                                                                   |
| 7    | [生命周期方法有哪些和它们的执行顺序是什么？](#生命周期方法有哪些和它们的执行顺序是什么)               |
| 8    | [getDerivedStateFromProps 生命周期方法有什么作用？](#getderivedstatefromprops-生命周期方法有什么作用) |
| 9    | [shouldComponentUpdate 生命周期方法有什么作用？](#shouldcomponentupdate-生命周期方法有什么作用)       |
| 10   | [getSnapshotBeforeUpdate 生命周期方法有什么作用？](#getsnapshotbeforeupdate-生命周期方法有什么作用)   |
| 11   | [什么是 React context？](#什么是-react-context)                                                       |

1. ### key 属性有什么作用？

`key` 属性用于识别列表中的每个子元素，以便在添加、移动或删除元素时更有效地更新 DOM。`key` 属性应该是一个唯一的字符串，最好是基于列表中元素的唯一标识符生成的。

```jsx
function App() {
  const items = [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

**[⬆ 返回顶部](#react面试题)**

2. ### refs 属性有什么作用？
   `refs` 属性用于引用组件或 DOM 元素。它可以在函数组件和类组件中使用。

```jsx
function App() {
  const buttonRef = useRef();

  function handleClick() {
    buttonRef.current.disabled = true;
  }

  return (
    <>
      <button ref={buttonRef} onClick={handleClick}>
        Click me
      </button>
    </>
  );
}
```

**[⬆ 返回顶部](#react面试题)**

3. ### PureComponent 组件有什么作用？
   `PureComponent` 是一个基于 Component 的优化版本，它会在 shouldComponentUpdate 生命周期方法中使用浅比较来判断是否需要重新渲染。如果所有的 props 和 state 都没有改变，`PureComponent` 将不会重新渲染。

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
```

4. ### memo 方法有什么作用？

`memo` 方法是一个高阶组件，用于对函数组件进行浅比较优化。它接受一个函数组件并返回一个新的组件，该组件在 props 没有改变的情况下将使用以前的结果。

```jsx
function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}

const MemoizedComponent = React.memo(MyComponent);
```

5. ### 错误边界有什么作用？

错误边界是一种 React 组件，用于捕获和处理子组件的 JavaScript 错误。错误边界会捕获在渲染期间发生的错误，但不会捕获事件处理程序、异步代码和服务端渲染中的错误。

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
    return <div>Something went wrong.</div>;
  }

  return this.props.children;
}

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

6. ### 什么是受控组件和非受控组件？
   在 React 中，表单元素（如 input、textarea 和 select）通常分为受控组件和非受控组件。

`受控组件`是指表单元素的值受到 React 组件的状态的控制。当用户输入内容时，React 会更新组件的状态，从而实时更新表单元素的值。此时，表单元素的值由 React 负责维护，而与 DOM 本身无关。受控组件通常需要实现 onChange 事件处理函数，以便在用户输入内容时更新组件的状态。

以下是一个使用受控组件的示例代码：

```jsx
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
```

在上述代码中，我们定义了一个 Input 组件作为受控组件，它的值由组件的状态 value 控制。当用户输入内容时，onChange 事件处理函数 handleChange 会被调用，更新组件的状态，从而实时更新表单元素的值。

相反，`非受控组件`是指表单元素的值由 DOM 本身维护，而不受 React 组件的控制。当用户输入内容时，表单元素的值会直接更新到 DOM 上，而不需要在 React 中进行任何处理。此时，组件无法直接获取表单元素的值，而需要通过 ref 来获取。

以下是一个使用非受控组件的示例代码：

```jsx
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
```

在上述代码中，我们定义了一个 Input 组件作为非受控组件，它的值由 DOM 本身维护。当用户点击按钮时，我们可以通过 ref 获取表单元素的值，从而进行后续处理。

7. ### 什么是高阶组件
   `高阶组件`（Higher-Order Component，简称 HOC）是指一个函数，它接受一个组件作为参数，返回一个新的组件。HOC 本质上是一种组件复用的方式，用于增强组件的功能，或者封装一些通用的逻辑，从而实现代码复用。

以下是一个使用高阶组件的示例代码：

```jsx
function withLogger(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

class MyComponent extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}

const EnhancedComponent = withLogger(MyComponent);

ReactDOM.render(<EnhancedComponent />, document.getElementById('root'));
```

在上述代码中，我们定义了一个高阶组件 withLogger，它接受一个组件作为参数，返回一个新的组件。新的组件在挂载时会输出组件名称，然后渲染传入的组件。

我们定义了一个 MyComponent 组件，并使用 withLogger 高阶组件对其进行增强，得到一个新的增强后的组件 EnhancedComponent。最终，我们将 EnhancedComponent 渲染到 DOM 中。

在上述示例中，withLogger 高阶组件用于记录组件的挂载信息，以便在开发调试时更加方便。当我们需要对多个组件进行类似的操作时，就可以使用 withLogger 高阶组件，而不需要在每个组件中都编写相同的挂载逻辑。这样，我们就可以实现代码的复用，同时使代码更加简洁易懂。

7. ### 生命周期方法有哪些和它们的执行顺序是什么？
   React 中的生命周期方法可以分为三类：挂载、更新和卸载。它们的执行顺序如下：

- 挂载：
  - constructor
  - getDerivedStateFromProps
  - render
  - componentDidMount
- 更新：
  - getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate
- 卸载：
  - componentWillUnmount

其中，`getDerivedStateFromProps` 生命周期方法是一个静态方法，用于在 props 改变时更新组件的 state。它应该返回一个对象来更新 state，或者返回 null 来表示不需要更新。

```jsx
class MyComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return { value: props.value };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}
```

其次，`shouldComponentUpdate` 生命周期方法用于在 props 或 state 发生改变时决定是否需要重新渲染组件。它应该返回一个布尔值，表示组件是否需要更新。默认情况下，`shouldComponentUpdate` 返回 true。

```jsx
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}
```

最后，`getSnapshotBeforeUpdate` 生命周期方法在组件更新之前被调用，它可以用于在 DOM 更新之前捕获一些信息。它应该返回一个值，作为 componentDidUpdate 方法的第三个参数。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.items.length < this.props.items.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>
        {this.props.items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  }
}
```

11. ### 什么是 React context？
    React context 是一种跨组件层级共享数据的方式，可以避免通过 props 层层传递数据的麻烦。它由两部分组成：`Provider` 和 `Consumer`。

`Provider` 是一个组件，它接受一个 value 属性，表示共享的数据，将它包裹的子组件的 `Consumer` 都可以访问这个数据。

```jsx
const MyContext = React.createContext();

class MyComponent extends React.Component {
  render() {
    return (
      <MyContext.Provider value={42}>
        <ChildComponent />
      </MyContext.Provider>
    );
  }
}

function ChildComponent() {
  return (
    <MyContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </MyContext.Consumer>
  );
}
```

12. React Hook 中的 useState 是什么？

useState 是 React Hook 中的一种，它可以让我们在函数组件中使用状态。

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

1. ### 什么是 React?

2.

3.

4.

5.

6.

7.

8.

9.

10.

11.

12.

13.

14.

15.

16.

17.

18.

19.

20.

21.

22.

23.

24.

25.

26.

27.

28.

29.

30.

31.

32.

33.

34.

35.

36.

37.

38.

39.

40.

41.

42.
