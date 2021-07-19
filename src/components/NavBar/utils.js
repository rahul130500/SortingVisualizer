import { Glob, AnimSpecs } from "../constant";
import { mergeAnimations } from "../../Algorithms/mergesort";
import { bubbleAnimations } from "../../Algorithms/bubblesort";
import { quickAnimations } from "../../Algorithms/quicksort";

export function ResetArray(size) {
  const bars = document.getElementsByClassName("array-bar");
  for (var i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = AnimSpecs.PRIMARY_COLOR;
  }
  const arr = [];
  const max = Glob.MAXVALUE;
  const min = Glob.MINVALUE;
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return arr;
}

export function SortedArray() {
  const bars = document.getElementsByClassName("array-bar");
  for (var i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "green";
  }
}

/*export function quickSort() {
  return 0;
}*/

export const mergeSort = (arr, speed) => {
  return new Promise((resolve, reject) => {
    const animations = mergeAnimations(arr);
    var length1 = animations.length;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          i % 3 === 0 ? AnimSpecs.SECONDARY_COLOR : AnimSpecs.PRIMARY_COLOR;
        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * speed);
      }
    }
  });
};

export const bubbleSort = (arr, speed) => {
  return new Promise((resolve, reject) => {
    const animations = bubbleAnimations(arr);
    let length1 = animations.length;
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx, flag] = animations[i];

      if (flag === 0 || flag === 1) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          flag === 0 ? AnimSpecs.SECONDARY_COLOR : AnimSpecs.PRIMARY_COLOR;

        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else if (flag === 3) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = "grey";

        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else if (flag === 4) {
        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          const newHeight = barTwoIdx;
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * speed);
      } else {
        setTimeout(() => {
          length1--;
          //const newHeight = barTwoIdx;
          if (length1 === 0) {
            resolve(length1);
          }
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.backgroundColor = "green";
        }, i * speed);
      }
    }
  });
};

export const quickSort = (arr, speed) => {
  return new Promise((resolve, reject) => {
    const animations = quickAnimations(arr);
    let length1 = animations.length;
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx, pivot, flag] = animations[i];

      if (flag === 0 || flag === 1) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const pivotStyle = arrayBars[pivot].style;
        const color =
          flag === 0 ? AnimSpecs.SECONDARY_COLOR : AnimSpecs.PRIMARY_COLOR;

        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          pivotStyle.backgroundColor = "yellow";
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else if (flag === 3) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = "green";

        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else if (flag === 4) {
        setTimeout(() => {
          length1--;
          if (length1 === 0) {
            resolve(length1);
          }
          const newHeight = barTwoIdx;
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * speed);
      }
    }
  });
};
