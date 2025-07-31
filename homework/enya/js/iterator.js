function createUserIdIterator(startNumber, endNumber) {
  let currentNumber = startNumber;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      try {
        if (typeof startNumber !== "number" || typeof endNumber !== "number") {
          throw new Error("invalid input");
        }

        currentNumber % 2 === 0 ? currentNumber : currentNumber++;
        const isProgress =
          currentNumber <= endNumber && currentNumber % 2 === 0;

        return {
          value: isProgress ? (currentNumber += 2) - 2 : undefined,
          done: !isProgress,
        };
      } catch (e) {
        console.error(e);
      }
    },
  };
}
