function removeFromArray(nums = [], ...z) {
  for (let i = 0; i < z.length; i++) {
    const indexToRemove = nums.indexOf(z[i]);
    if (indexToRemove !== -1) {
      const result = nums.splice(indexToRemove, 1);
      console.log(indexToRemove);
    }
  }
  return nums;
}

// Do not edit below this line
module.exports = removeFromArray;

function indexOf(values = [], value) {
  for (let i = 0; i < values.length; i++) {
    if (value === values[i]) {
      return i;
    }
  }
  return -1;
}
