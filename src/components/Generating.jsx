// Generating.js
import { useEffect, useState } from "react";
import { loading } from "../assets";

const Generating = ({ className }) => {
  // Array of lines to display
  const lines = [
    "Nina is generating...",
    "Processing data to enhance performance...",
    "Creating personalized experiences just for you..."
  ];

  const [currentLine, setCurrentLine] = useState(lines[0]);
  const [fade, setFade] = useState(true); // Manage text fading effect
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        // Change the text and fade it in
        index = (index + 1) % lines.length;
        setCurrentLine(lines[index]);
        setFade(true); // Fade-in the new text
      }, 500); // Allow 0.5s for fade-out before changing text
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      <span
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentLine}
      </span>
    </div>
  );
};

export default Generating;
