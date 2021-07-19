export function mergeAnimations(arr) {
  const anim = [];
  if (arr.length <= 1) return arr;
  const temparray = [...arr];
  mergeSort(arr, 0, arr.length - 1, temparray, anim);
  return anim;
}
function mergeSort(arr, st_ind, end_ind, temp, anim) {
  if (st_ind === end_ind) return;
  const mid = Math.floor((st_ind + end_ind) / 2);
  mergeSort(temp, st_ind, mid, arr, anim);
  mergeSort(temp, mid + 1, end_ind, arr, anim);
  merge(arr, st_ind, mid, end_ind, temp, anim);
}

function merge(arr, st_ind, mid, end_ind, temp, anim) {
  let i = st_ind;
  let j = mid + 1;
  let k = st_ind;
  while (i <= mid && j <= end_ind) {
    anim.push([i, j]); //To colour
    anim.push([i, j]); //Back to normal
    if (temp[i] <= temp[j]) {
      anim.push([k, temp[i]]);
      arr[k++] = temp[i++];
    } else {
      anim.push([k, temp[j]]);
      arr[k++] = temp[j++];
    }
  }
  while (i <= mid) {
    anim.push([i, i]);
    anim.push([i, i]);

    anim.push([k, temp[i]]);
    arr[k++] = temp[i++];
  }
  while (j <= end_ind) {
    anim.push([j, j]);
    anim.push([j, j]);

    anim.push([k, temp[j]]);
    arr[k++] = temp[j++];
  }
}
