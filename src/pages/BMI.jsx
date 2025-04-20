import React from "react";
import { useState } from "react";
const BMI = () => {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [bmi, setbmi] = useState(null);
  const [status, setstatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightinM = height / 100;
    const bmiValue = weight / (heightinM * heightinM);
    setbmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setstatus("UnderWeight");
    else if (bmiValue < 24.9) setstatus("Normal");
    else if (bmiValue > 29.9) setstatus("OverWeight");
    else setstatus("obese");
  };

  return (
    <div className="min-h-screen flex items-center flex-col rounded-4xl p-4">
      <h2 className="text-2xl mb-4 text-center font-bold">BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setweight(e.target.value)}
        className="w-96 mb-3 px-4 py-2 border rounded "
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setheight(e.target.value)}
        className="w-96 mb-3 px-4 py-2 border rounded "
      />
      <button
        onClick={calculateBMI}
        className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition w-96"
      >
        calculate
      </button>
      {bmi && (<div className="mt-4 text-center">
      <p className="text-xl font-medium">Your BMI : {bmi}</p>
      <p className="text-gray-500 hover:underline">Status : {status}</p>
      </div>)}
    </div>
  );
};

export default BMI;
