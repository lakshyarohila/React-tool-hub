import React from "react";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

const ESignature = () => {
  const sigCanvas = useRef();

  const clear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear(); // Clears the canvas
    } else {
      console.error("Canvas is not initialized!");
    }
  };

  const save = () => {
    try {
      // Verify that sigCanvas and the canvas object are valid
      if (!sigCanvas.current || !sigCanvas.current.getCanvas) {
        console.error(
          "sigCanvas is not properly initialized or getCanvas() is not available."
        );
        return;
      }

      // Fallback to getCanvas() method to retrieve the full canvas as trimmed canvas might be unavailable
      const dataUrl = sigCanvas.current.getCanvas().toDataURL("image/png");

      // Check if the data URL is valid
      if (!dataUrl) {
        console.error("Failed to retrieve canvas data URL.");
        return;
      }

      // Create an anchor tag and trigger the download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "signature.png";
      document.body.appendChild(link); // Append to DOM temporarily
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up the DOM
    } catch (error) {
      console.error("An error occurred while saving the signature:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      <h1 className="text-white text-3xl font-bold mb-6">E-Signature Tool</h1>
      <div className="border-2 border-gray-400 rounded-md bg-white">
        <SignatureCanvas
          penColor="black"
          canvasProps={{
            width: 500,
            height: 200,
            className: "bg-white rounded-md"
          }}
          ref={sigCanvas}
        />
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={clear}
          className="bg-red-600 text-white px-4 py-2 rounded-2xl hover:bg-red-700"
        >
          Clear
        </button>
        <button
          onClick={save}
          className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-800"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ESignature;