import React from "react";
import img from "../assets/avatar1.png";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { StarRating } from "./StarRating";
import { reviewType } from "../pages/HomePage";

export const ReviewCard = ({ review }: { review: reviewType }) => {
  return (
    <div className="w-[16rem] py-4 px-5 rounded-md bg-bg_white">
      <header className="flex justify-between items-center">
        <div className="grid grid-rows-[1rem] gap-x-2">
          <figure className="col-start-1 col-end-1 row-start-1 row-end-2 rounded-full w-8 aspect-square">
            <img src={img} alt="reviewer image" className="w-full" />
          </figure>
          <h4 className="col-start-2 col-end-3 row-start-1 row-end-1 text-sm">
            {review.name}
          </h4>
          <p className="col-start-2 col-end-3 row-start-2 row-end-2 text-[.65rem]">
            {review.date}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Ikate, Lekki</p>
          <span>
            <StarRating rating={review.rating} />
          </span>
        </div>
      </header>
      <main>
        <p className="text-sm">{review.text}</p>
      </main>
      <footer className="flex justify-between items-center mt-2">
        <div className="text-gray-400 flex gap-2 items-center">
          <div className="flex gap-1 items-center text-xs">
            <span>
              <FaThumbsUp />
            </span>

            <span>{review.like}</span>
          </div>
          <div className="flex gap-1 items-center text-xs">
            <span>
              <FaThumbsDown />
            </span>

            <span>{review.dislike}</span>
          </div>
          <div className="flex gap-1 items-center text-xs">
            <span>
              <FaCommentAlt />
            </span>

            <span>{review.comment}</span>
          </div>
        </div>
        <div>
          <span className="text-xs border-2 border-rose-700 font-semibold bg-rose-200 text-rose-700 px-2 rounded-xl">
            {review.tag}
          </span>
        </div>
      </footer>
    </div>
  );
};
