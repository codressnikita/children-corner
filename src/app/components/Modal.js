// Modal.js
import React from "react";
import { X } from "lucide-react"; // Importing a close icon from lucide-react

export default function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-200 p-0 shadow-lg w-full h-full relative">
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
