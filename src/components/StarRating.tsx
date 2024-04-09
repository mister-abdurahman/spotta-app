import React from "react";
import { FaStar } from "react-icons/fa";

const starNum = 5;

export const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: starNum }).map((el, i) => {
        if (rating > i) return <FaStar fill="gold" />;
        else return <FaStar fill="lightgray" />;
      })}
    </div>
  );
};
