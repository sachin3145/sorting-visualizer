// bubble sort
function getBubbleSortAnimations(array) {
  const animations = [];
  for (let i = 0; i < array.length - 1; ++i) {
    for (let j = 0; j < array.length - i - 1; ++j) {
      animations.push({ type: "comp", first: j, second: j + 1 });
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animations.push({ type: "swap", first: j, second: j + 1 });
      }
    }
  }
  return { animations: animations, resultantArray: array };
}

// selection sort
function getSelecttionSortAnimations(array) {
  const animations = [];
  let min;
  for (let i = 0; i < array.length - 1; ++i) {
    min = i;
    for (let j = i + 1; j < array.length; ++j) {
      animations.push({ type: "comp", first: min, second: j });
      if (array[min] > array[j]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
    animations.push({ type: "swap", first: i, second: min });
  }
  return { animations: animations, resultantArray: array };
}


// insertion sort
function getInsertionSortAnimations(array) {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    let key = array[i],
      j = i - 1;
    animations.push({ type: "comp", first: i, second: j });
    while (j > -1 && array[j] > key) {
      array[j + 1] = array[j];
      animations.push({ type: "update", index: j + 1, val: array[j + 1] });
      j--;
      if (j === -1) {
        animations.push({ type: "comp", first: i, second: 0 });
        break;
      }
      animations.push({ type: "comp", first: i, second: j });
    }
    array[j + 1] = key;
    animations.push({ type: "update", index: j + 1, val: array[j + 1] });
  }
  return { animations: animations, resultantArray: array };
}

// shell sort
function getShellSortAnimations(array) {
  const animations = [];
  let j,
    temp,
    n = array.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; ++i) {
      temp = array[i];
      j = i;
      animations.push({ type: "comp", first: j - gap, second: i });
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
        animations.push({ type: "update", index: j, val: array[j] });
        animations.push({ type: "comp", first: j - gap, second: i });
      }
      array[j] = temp;
      animations.push({ type: "update", index: j, val: array[j] });
    }
  }
  return { animations: animations, resultantArray: array };
}


// merge sort
function getMergeSortAnimations(array) {
  const animations = [];
  const auxillaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxillaryArray, animations);
  return { animations: animations, resultantArray: array };
}

function mergeSortHelper(arr, l, r, aux, animations) {
  if (l === r) return;
  const mid = Math.floor(l + (r - l) / 2);
  mergeSortHelper(aux, l, mid, arr, animations);
  mergeSortHelper(aux, mid + 1, r, arr, animations);
  merge(arr, l, mid, r, aux, animations);
}

function merge(arr, l, mid, r, aux, animations) {
  let i = l,
    j = l,
    k = mid + 1;
  while (j < mid + 1 && k < r + 1) {
    animations.push({ type: "comp", first: j, second: k });

    // keeping track of index that is being updated along with the new value
    if (aux[j] > aux[k]) {
      animations.push({ type: "update", index: i, val: aux[k] });
      arr[i++] = aux[k++];
    } else {
      animations.push({ type: "update", index: i, val: aux[j] });
      arr[i++] = aux[j++];
    }
  }

  while (j < mid + 1) {
    animations.push({ type: "comp", first: j, second: j });
    animations.push({ type: "update", index: i, val: aux[j] });
    arr[i++] = aux[j++];
  }

  while (k < r + 1) {
    animations.push({ type: "comp", first: k, second: k });
    animations.push({ type: "update", index: i, val: aux[k] });
    arr[i++] = aux[k++];
  }
}

// quick sort
function partition(array, animations, low, high) {
  let pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push({ type: "comp", first: j, second: high });
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
    animations.push({ type: "swap", first: i, second: j });
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  animations.push({ type: "swap", first: i + 1, second: high });
  return i + 1;
}

function quickSort(array, animations, low, high) {
  if (low < high) {
    const pi = partition(array, animations, low, high);
    quickSort(array, animations, low, pi - 1);
    quickSort(array, animations, pi + 1, high);
  }
}

function getQuickSortAnimations(array) {
  const animations = [];
  quickSort(array, animations, 0, array.length - 1);
  return { animations: animations, resultantArray: array };
}

// heap sort
function heapify(array, animations, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n) {
    animations.push({ type: "comp", first: l, second: largest });
  }
  if (l < n && array[l] > array[largest]) largest = l;

  if (r < n) {
    animations.push({ type: "comp", first: r, second: largest });
  }
  if (r < n && array[r] > array[largest]) largest = r;

  animations.push([largest, i]);
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    animations.push({ type: "swap", first: i, second: largest });
    heapify(array, animations, n, largest);
  }
}

function getHeapSortAnimations(array) {
  const animations = [];
  const n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(array, animations, n, i);
  for (let i = n - 1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    animations.push({ type: "swap", first: i, second: 0});
    heapify(array, animations, i, 0);
  }
  return { animations: animations, resultantArray: array };
}


export {
  getBubbleSortAnimations,
  getSelecttionSortAnimations,
  getInsertionSortAnimations,
  getShellSortAnimations,
  getMergeSortAnimations,
  getQuickSortAnimations,
  getHeapSortAnimations
};
