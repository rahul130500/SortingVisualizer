import React from "react";
import { useState } from "react";
import { AnimSpecs, Glob } from "../constant";
import {
  ResetArray,
  quickSort,
  mergeSort,
  bubbleSort,
  SortedArray,
} from "./utils";

const NavBar = ({ arr, setArr, size, setSize, speed, setSpeed }) => {
  const [isSorting, setIsSorting] = useState(false);
  const [sortName, setSortName] = useState("");
  return (
    <>
      <div className="flex justify-center bg-black font-serif text-white text-4xl">
        Sorting Visualizer
      </div>
      <div className="bg-black text-white flex flex-wrap justify-center space-x-8 space-y-2 md:space-x-20  p-4 items-center">
        <div>
          <button
            disabled={isSorting}
            className="border-2 px-2 py-1 font-bold  rounded-md border-white"
            style={{
              backgroundColor: `${isSorting ? "red" : "green"}`,
              cursor: `${isSorting ? "default" : "pointer"}`,
            }}
            onClick={() => {
              setArr(ResetArray(size));
            }}
          >
            Reset Array
          </button>
        </div>
        <div className="flex items-center space-x-1 text-xl">
          <label for="speed">Size</label>
          <input
            disabled={isSorting}
            type="range"
            name="size"
            min="5"
            max={Glob.SIZE}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          ></input>
        </div>
        <div className="flex items-center space-x-1 text-xl">
          <label for="speed">Speed</label>
          <input
            disabled={isSorting}
            name="speed"
            type="range"
            min={AnimSpecs.MINSPEED}
            max={AnimSpecs.MAXSPEED}
            onChange={(event) => {
              setSpeed(
                AnimSpecs.MAXSPEED + AnimSpecs.MINSPEED - event.target.value
              );
            }}
          ></input>
        </div>
        <div className="flex justify-center space-x-5">
          <button
            disabled={isSorting}
            className="border-2 px-2 py-1 font-bold  rounded-md border-white"
            style={{
              backgroundColor: `${isSorting ? "red" : "blue"}`,
              color: `${sortName === "quick" ? "black" : "white"}`,
              cursor: `${isSorting ? "default" : "pointer"}`,
            }}
            onClick={() => {
              setIsSorting(true);
              setSortName("quick");
              quickSort(arr, speed).then((l) => {
                if (l === 0) {
                  setIsSorting(false);
                  setSortName("");
                  SortedArray();
                }
              });
            }}
          >
            Quick Sort
          </button>
          <button
            disabled={isSorting}
            className="border-2 px-2 py-1 font-bold  rounded-md border-white"
            style={{
              backgroundColor: `${isSorting ? "red" : "blue"}`,
              color: `${sortName === "merge" ? "black" : "white"}`,
              cursor: `${isSorting ? "default" : "pointer"}`,
            }}
            onClick={() => {
              setIsSorting(true);
              setSortName("merge");
              mergeSort(arr, speed).then((l) => {
                if (l === 0) {
                  setIsSorting(false);
                  setSortName("");
                  SortedArray();
                }
              });
            }}
          >
            Merge Sort
          </button>
          <button
            disabled={isSorting}
            className="border-2 px-2 py-1 font-bold  rounded-md border-white"
            style={{
              backgroundColor: `${isSorting ? "red" : "blue"}`,
              color: `${sortName === "bubble" ? "black" : "white"}`,
              cursor: `${isSorting ? "default" : "pointer"}`,
            }}
            onClick={() => {
              setIsSorting(true);
              setSortName("bubble");
              bubbleSort(arr, speed).then((l) => {
                console.log("length ", l);
                if (l === 0) {
                  setIsSorting(false);
                  setSortName("");
                }
              });
            }}
          >
            Bubble Sort
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
