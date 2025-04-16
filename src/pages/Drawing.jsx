import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Drawing = () => {
  const canvasRef = useRef(null);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(4);

  const handleClear = () => {
    canvasRef.current.clearCanvas();
  };

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  const handleExport = async () => {
    const image = await canvasRef.current.exportImage("png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "drawing.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
      <h1 className="text-3xl text-white font-bold mb-4">Sketch Drawing Tool</h1>

      <div className="flex gap-4 items-center mb-4">
        <label>
          Color:
          <input
            type="color"
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
            className="ml-2"
          />
        </label>

        <label>
          Brush Size:
          <input
            type="range"
            min="1"
            max="20"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
            className="ml-2"
          />
        </label>

        <button
          onClick={handleUndo}
          className="bg-yellow-400 px-3 py-1 rounded text-black"
        >
          Undo
        </button>

        <button
          onClick={handleClear}
          className="bg-red-500 px-3 py-1 rounded text-white"
        >
          Clear
        </button>

        <button
          onClick={handleExport}
          className="bg-green-600 px-3 py-1 rounded text-white"
        >
          Export
        </button>
      </div>

      <ReactSketchCanvas
        ref={canvasRef}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        width="800px"
        height="500px"
        canvasColor="#fff"
        className="shadow-md rounded border"
      />
    </div>
  );
};

export default Drawing;
