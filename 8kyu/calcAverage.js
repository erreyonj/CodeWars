// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(a) {
    return a.length === 0 ? 0 : (a.reduce((acc,c)=>acc+c,0)/a.length);
  }