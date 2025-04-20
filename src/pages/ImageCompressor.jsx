import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressedImageUrl, setCompressedImageUrl] = useState(null);

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image && image.type.startsWith("image/")) {
      setOriginalImage(image);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleCompress = async () => {
    if (!originalImage) {
      console.error("No image to compress");
      return;
    }

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    try {
      console.log("Starting compression...");
      const compressed = await imageCompression(originalImage, options);
      console.log("Compression successful:", compressed);

      setCompressedImage(compressed);

      const compressedURL = URL.createObjectURL(compressed);
      setCompressedImageUrl(compressedURL);
    } catch (error) {
      console.error("Compression Error:", error);
    }
  };

  const downloadCompressed = () => {
    if (!compressedImageUrl) {
      console.error("No compressed image to download");
      return;
    }

    const a = document.createElement("a");
    a.href = compressedImageUrl;
    a.download = "compressed-image.jpg"; // Provide a default file name
    a.click();
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-medium">Image Compressor</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="my-8 border border-gray-400 rounded-2xl px-2 py-1"
      />
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded-2xl mb-4"
        onClick={handleCompress}
      >
        Compress Image
      </button>

      {compressedImageUrl && (
        <div className="text-center">
          <img
            src={compressedImageUrl}
            alt="Compressed"
            className="max-w-xs mx-auto mb-6"
          />
          <button
            onClick={downloadCompressed}
            className="bg-green-500 rounded-2xl px-4 py-2 text-white"
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;