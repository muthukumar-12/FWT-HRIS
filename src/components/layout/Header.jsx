import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white text-white p-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold"></h1>
      <button className="px-4 py-2 border rounded-lg bg-blue-400 hover:bg-blue-500 ">Logout</button>
    </div>
  );
};

export default Header;
