import React from "react";
import { useRef,useState } from "react";
const Stopwatch = () => {
  const [seconds, setseconds] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const intervalRef = useRef();

  const startStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setisRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setseconds((prev) => prev + 1);
      }, 1000);
      setisRunning(true);
    }
  };
  const reset = () => {
    clearInterval(intervalRef.current);
    setisRunning(false);
    setseconds(0);
  };

  const formatTime = (sec) => {
    const mins = String(Math.floor(sec / 60)).padStart(2, "0");
    const secs = String(sec % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };
  return (
    <div
      className="bg-black min-h-screen flex flex-col
   items-center justify-center p-6"
    >
      <h1 className="text-white text-3xl font-bold">StopWatch</h1>
      <div className="text-6xl text-white font-mono">{formatTime(seconds)}</div>
      <div className="flex gap-4">
        <button
          onClick={startStop}
          className={`px-6 py-2 rounded-2xl text-white ${isRunning}? "bg-red-600":"bg-green-600"`}
        >
          {" "}
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={reset} className="px-6 py-2 rounded-2xl bg-gray-600 text-white hover:bg-gray-700">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
