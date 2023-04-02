"use client";
import { ChangeEvent, useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [showError, setShowError] = useState(false);

  const changeCount = (type: "inc" | "dec") => {
    if (type === "inc" ) {
      if (count === maxCount) {
        setShowError(true);
        showAlert();
      } else {
        setCount((currentCount) => currentCount + 1);
      }
    }

    if (type === "dec" && count>0) {
      setCount((currentCount) => currentCount - 1);
    }
  };

  const handleMaxCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      setMaxCount(0);
    } else {
      setMaxCount(parseInt(e.target.value));
    }
  };

  const showAlert = () => {
    setTimeout(() => {
      setShowError(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col w-100 h-screen m-4 justify-center items-center">
      <h1 className="text-3xl text-amber-800 font-bold underlined">Counter</h1>
      <p className="text-5xl text-stone-800 font-bold mt-4 mb-4">{count}</p>
      <div>
        <button
          onClick={() => changeCount("inc")}
          className="w-24 h-12 rounded border-2 bg-orange-600 hover:bg-orange-700 text-3xl font-bold m-4 text-white active:animate-pulse"
        >
          +
        </button>
        <button
          onClick={() => changeCount("dec")}
          className="w-24 h-12 rounded border-2 bg-green-500 hover:bg-green-700 text-3xl font-bold m-4 text-white active:animate-pulse"
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          setCount(0);
          setMaxCount(0);
        }}
        className="w-24 h-12 rounded border-2 bg-sky-500 hover:bg-sky-700 text-xl font-bold m-4 text-white active:animate-pulse"
      >
        Reset
      </button>
      <div className="m-4">
        <span>Max Count: </span>
        <input
          type="number"
          value={maxCount}
          onChange={handleMaxCount}
          className="w-32 h-8 rounded border-2"
        />
      </div>
      {showError && (
        <div className="m-4 border-2 rounded-lg bg-red-500 p-2 animate-fade-out">
          Cannot Exceed Max Count {maxCount}
        </div>
      )}
    </div>
  );
}
