import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { ResetArray } from "./components/NavBar/utils";
import { AnimSpecs, Glob } from "./components/constant";

function App() {
  const [arr, setArr] = useState([]);
  const [size, setSize] = useState(Glob.SIZE);
  const [speed, setSpeed] = useState(AnimSpecs.MINSPEED);
  useEffect(() => {
    setArr(ResetArray(size));
  }, [size]);
  return (
    <div className="App h-screen font-serif">
      <NavBar
        arr={arr}
        setArr={setArr}
        size={size}
        setSize={setSize}
        speed={speed}
        setSpeed={setSpeed}
      />
      <div className="p-5 flex justify-center ">
        {arr.map((value, idx) => (
          <div
            className="array-bar ml-1 inline-block text-white "
            key={idx}
            style={{
              backgroundColor: AnimSpecs.PRIMARY_COLOR,
              height: `${value}px`,
              width: `${100 - size}px`,
            }}
          ></div>
        ))}
      </div>
      <div className="font-serif fixed bottom-0 right-0 hidden md:block">
        &copy; Developed by{" "}
        <a
          className="text-blue-600"
          href="https://in.linkedin.com/in/rahul130500"
        >
          Rahul Aggarwal
        </a>
      </div>
    </div>
  );
}

export default App;
