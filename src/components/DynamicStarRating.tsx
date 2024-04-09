import React, { useState } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function DynamicStarRating({
  ParentStyle = "",
  childStyle = "",
  length = 5,
  func,
}: any) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
    func(rating);
  }

  return (
    <div className="flex justify-normal">
      {Array.from({ length }).map((_, i): any => (
        <Star
          key={i}
          num={i}
          onRating={handleRating}
          // setRating={setRating}
          rating={rating}
          tempRating={tempRating}
          setTempRating={setTempRating}
          childStyle={childStyle}
          full={tempRating ? tempRating : rating}
        />
      ))}

      <input type="hidden" value={rating} />
    </div>
  );
}

export function Star({
  num,
  setRating,
  rating,
  setTempRating,
  tempRating,
  onRating,
  full,
  childStyle,
}: any) {
  return (
    <span
      className={`${childStyle}`}
      onClick={() => onRating(num + 1)}
      onMouseEnter={() => setTempRating(num + 1)}
      onMouseLeave={() => setTempRating(0)}
    >
      {num < full ? (
        <FaStar
          fill="gold"
          className="star-style md:w-[1.2rem] md:h-[1.2rem] w-[1.2rem] h-[1.2rem]"
        />
      ) : (
        <AiOutlineStar
          className="star-style md:w-[1.2rem] md:h-[1.2rem] w-[1.2rem] h-[1.2rem]"
          onClick={() => onRating(num + 1)}
        />
      )}
    </span>
  );
}
