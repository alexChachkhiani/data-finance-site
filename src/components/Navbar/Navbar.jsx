import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="flex">
        <li className="p-4">HOME</li>
        <li className="p-4">COMPANY</li>
        <li className="p-4">RESEOURCES</li>
        <li className="p-4">ABOUT</li>
        <li className="p-4">CONTACT</li>
      </ul>
    </div>
  );
}
