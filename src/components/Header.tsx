import React from "react";

import avatar1 from "../assets/avatar1.png";
import img from "../assets/react.svg";

export const Header = () => {
  return (
    <div className="flex justify-between py-8">
      <div className="space-x-2 font-mono font-semibold">
        <span>SPOTTA</span>
        <span className="bg-blue-600 rounded-md px-1 text-white">NG</span>
      </div>

      <div className="flex items-center gap-3">
        <p>Welcome !</p>
        <figure>
          <img src={avatar1} alt="avatar photo" />
        </figure>
      </div>
    </div>
  );
};
