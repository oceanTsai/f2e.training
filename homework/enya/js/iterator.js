const idIterator = createUserIdIterator(1000, 1006);
// console.log(idIterator[Symbol.iterator]().next());
// console.log(idIterator[Symbol.iterator]().next());
// console.log(idIterator[Symbol.iterator]().next());
console.log(idIterator.next()); // { value: 1000, done: false }
// console.log(idIterator.next()); // { value: 1002, done: false }
// console.log(idIterator.next()); // { value: 1004, done: false }
// console.log(idIterator.next()); // { value: 1006, done: false }
// console.log(idIterator.next()); // { value: undefined, done: true }

function createUserIdIterator(start, end) {
  let currentValue = start;
  let oldValue;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentValue <= end && currentValue % 2 === 0) {
        oldValue = currentValue;
        currentValue += 2;
        return { value: oldValue, done: false };
      }
      return { done: true };
    },
  };
}

// for (let iterator of idIterator) {
//   console.log(iterator);
// }

// 1. start end ,data type number
// 2. 定義 symbol iterator
// 3. return object 需要一個 next method
// 4. next() return object {value:number, done:boolean}
// 5. 如果是偶數 return current += 2
