import React from "react";
import { ChevronsLeft, Home } from "lucide-react";

const BackButtons = ({ onBack, onHome }) => {
  return (
    <div
      className="fixed z-100 top-1/2 left-0 transform -translate-y-1/2  flex flex-col space-y-4 text-white rounded-xl bg-black/50 p-0"
      style={{
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
      }}
    >
      {/* Home Button */}
      {/* <button
        onClick={onHome}
        className="flex flex-col items-center space-y-2 text-white hover:bg-black/30 focus:outline-none p-4 rounded-md"
      >
        <Home className="w-6 h-6" />
        <span>Home</span>
      </button>

      {/* Separator Line */}
      {/* <div className="border-t-2 border-white my-2" />  */}
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex flex-col items-center space-y-2 text-white hover:bg-black/30 focus:outline-none p-4 rounded-md"
      >
        <ChevronsLeft className="w-6 h-6" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default BackButtons;
