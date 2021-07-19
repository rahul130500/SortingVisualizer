export function quickAnimations(arr) {
  const anim = [];
  if (arr.length <= 1) return arr;
  const temparray = [...arr];
  quickSort(arr, 0, arr.length - 1, temparray, anim);
  return anim;
}

function quickSort(arr, start, end, temparray, anim) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end, temparray, anim);

  quickSort(arr, start, index - 1, temparray, anim);
  quickSort(arr, index + 1, end, temparray, anim);
}

function partition(temp, start, end, arr, anim) {
  const pivotValue = temp[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    anim.push([i, pivotIndex, end, 0]);
    if (temp[i] < pivotValue) {
      // Swapping elements
      anim.push([i, pivotIndex, end, 3]);
      [temp[i], temp[pivotIndex]] = [temp[pivotIndex], temp[i]];
      anim.push([i, temp[i], end, 4]);
      anim.push([pivotIndex, temp[pivotIndex], end, 4]);
      anim.push([i, pivotIndex, end, 1]);
      pivotIndex++;
    } else anim.push([i, pivotIndex, end, 1]);
  }

  // Putting the pivot value in the middle
  anim.push([pivotIndex, end, end, 3]);
  [temp[pivotIndex], temp[end]] = [temp[end], temp[pivotIndex]];
  anim.push([pivotIndex, temp[pivotIndex], end, 4]);
  anim.push([end, temp[end], end, 4]);
  anim.push([pivotIndex, end, end, 1]);

  return pivotIndex;
}
