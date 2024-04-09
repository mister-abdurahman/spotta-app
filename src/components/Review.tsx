import React from "react";
import { FaStar } from "react-icons/fa";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";

import img from "../assets/avatar1.png";

export const Review = ({ review }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-xs sm:text-sm">
          <figure className="w-6 h-6 rounded-full">
            <img src={img} alt="" className="w-full" />
          </figure>
          <span>{review.name}</span>
          <span className="text-gray-600 text-xs">{review.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <FaStar fill="gold" className="w-4 aspect-square" />
          </span>
          <span>{review.rating}.0</span>
        </div>
      </div>
      <p className="text-sm">{review.text}</p>

      <div className="flex justify-between">
        <div className="flex items-center gap-3 text-gray-500 text-sm">
          <div className="flex gap-1 items-center">
            <span>
              <FaThumbsUp />
            </span>
            <span>{review.like}</span>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FaThumbsDown />
            </span>
            <span>{review.dislike}</span>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FaCommentAlt />
            </span>
            <span>{review.comment}</span>
          </div>
        </div>

        <div>
          {review.place.map((el) => (
            <span className="text-xs mr-1 border-[1px] border-blue-700 rounded-md px-1">
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
