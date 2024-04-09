import React, { useState } from "react";
import { Header } from "../components/Header";
import { CiSearch } from "react-icons/ci";
import { ReviewCard } from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";
import { dummyReviews } from "../data/dummyData";

export interface IReview {
  review: reviewType;
}

export interface reviewType {
  name: string;
  date: string;
  text: string;
  rating: number;
  tag: string;
  like: number;
  dislike: number;
  comment: string;
}

export const HomePage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  function handleNav() {
    if (!search) return setError("Enter an address to see reviews");
    navigate("/all-reviews", { state: { address: search } });
  }
  return (
    <div className="bg-bg_white h-screen overflow-hidden sm:px-16 px-8">
      <Header />

      <main className="flex flex-col xl:flex-row xl:justify-between sm:justify-normal sm:h-full xl:max-h-full relative">
        <div className="flex flex-col gap-4 xl:basis-2/5 lg:basis-1/5 mt-auto xl:mt-[7.5rem] items-left">
          <h2 className="text-3xl sm:text-6xl font-bold">
            Find a place you <br className="xl:block lg:hidden sm:block" /> will
            love to live!
          </h2>
          <p className="text-sm sm:text-base">
            See through the lenses of people who have lived or visited the
            neighbourhood you might have in mind.
          </p>
          <div className="relative">
            <span className="absolute left-1 top-1/2 -translate-y-1/2">
              <CiSearch className="w-5 h-5 text-gray-500" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Address"
              className="sm:text-base text-xs pl-8 w-full bg-slate-100 ring-2 ring-offset-1 ring-slate-300 py-1 outline-none rounded-md"
            />
          </div>
          <span className="text-xs -mt-3 text-red-600">{error}</span>
          <div className="flex gap-2">
            <button
              onClick={handleNav}
              className="sm:text-base text-xs w-fit bg-blue-600 text-white px-8 py-2 rounded-md uppercase"
            >
              Search
            </button>
          </div>
        </div>
        <div
          className="shadow-box basis-[46%] overflow-scroll bg-slate-200 px-3 py-2 grid gap-3 xl:grid-cols-2 lg:grid-cols-3 mx-auto xl:mx-0 grid-cols-1 sm:grid-cols-2 sm:mt-20 mt-12 xl:mt-auto
        "
        >
          {dummyReviews.map((review: any) => (
            <ReviewCard review={review} />
          ))}
        </div>
      </main>
    </div>
  );
};
