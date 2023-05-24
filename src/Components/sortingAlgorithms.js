function getSelecttionSortAnimations(array) {
  const animations = []; //[compARR, SWAP, compArr, SWAP ...]
  let min;
  for (let i = 0; i < array.length - 1; ++i) {
    const comp = [];
    min = i;
    for (let j = i + 1; j < array.length; ++j) {
      comp.push([min, j]);
      comp.push([min, j]);
      if (array[min] > array[j]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
    animations.push(comp);
    animations.push([
      [i, array[i]],
      [min, array[min]],
    ]);
  }
  return {animations: animations, resultantArray:array};
}

export { getSelecttionSortAnimations };
