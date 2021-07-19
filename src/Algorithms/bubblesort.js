export function bubbleAnimations(arr) {
  const anim = [];
  if (arr.length <= 1) return arr;
  const temparray = [...arr];
  bubbleSort(arr, temparray, anim);
  return anim;
}
function bubbleSort(arr, temp, anim) {
  for (var i = 0; i < arr.length - 1; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      anim.push([j, j + 1, 0]);
      let flag = 0;
      if (temp[j] > temp[j + 1]) {
        flag = 1;
        let t = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = t;
      }
      if (flag === 1) anim.push([j, j + 1, 3]);
      anim.push([j, temp[j], 4]);
      anim.push([j + 1, temp[j + 1], 4]);
      anim.push([j, j + 1, 1]);
    }
    //arr[arr.length - 1 - i] = temp[arr.length - 1 - i];
    anim.push([arr.length - 1 - i, temp[arr.length - 1 - i], 2]);
  }
  anim.push([0, temp[0], 2]);
}

//   function merge(arr, st_ind, mid, end_ind, temp, anim) {
//     let i = st_ind;
//     let j = mid + 1;
//     let k = st_ind;
//     while (i <= mid && j <= end_ind) {
//       anim.push([i, j]); //To colour
//       anim.push([i, j]); //Back to normal
//       if (temp[i] <= temp[j]) {
//         anim.push([k, temp[i]]);
//         arr[k++] = temp[i++];
//       } else {
//         anim.push([k, temp[j]]);
//         arr[k++] = temp[j++];
//       }
//     }
//     while (i <= mid) {
//       anim.push([i, i]);
//       anim.push([i, i]);

//       anim.push([k, temp[i]]);
//       arr[k++] = temp[i++];
//     }
//     while (j <= end_ind) {
//       anim.push([j, j]);
//       anim.push([j, j]);

//       anim.push([k, temp[j]]);
//       arr[k++] = temp[j++];
//     }
//   }
