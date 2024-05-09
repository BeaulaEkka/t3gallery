"use client";
import React, { useState } from "react";

export default function DownloadButton({ imageId }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered === imageId && (
        <button
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="absolute bottom-4 right-4 h-12 w-32 rounded-lg bg-green-500 px-2 py-1 text-white"
        >
          Download
        </button>
      )}
    </div>
  );
}
