// 利用 find filter reduce map 實作 交集、差級、聯級
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 5, 6, 4, 7, 4];

// 交集

const intersection = function (array1, array2) {
  let result = [];
  array1.forEach((n) => {
    if (array2.includes(n) && !result.includes(n)) {
      result.push(n);
    }
  });
  return result;
};

console.log(intersection(arr1, arr2)); // [ 3, 4, 5, 6 ]

// 差集 在 arr1 且 不在 arr2

const difference = function (array1, array2) {
  let result = [];
  array1.forEach((a1) => {
    if (array2.find((a2) => a1 === a2) === undefined) {
      result.push(a1);
    }
  });
  return result;
};

console.log(difference(arr1, arr2)); // [ 1, 2 ]

// 聯集

const union = function (array1, array2) {
  let result = [];
  array1.concat(array2).forEach((n) => {
    if (!result.includes(n)) {
      result.push(n);
    }
  });
  return result;
};

console.log(union(arr1, arr2)); // [ 1, 2, 3, 4, 5, 6, 7 ]
