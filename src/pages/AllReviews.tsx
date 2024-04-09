import React, { useState } from "react";
import { CiSearch, CiBookmark, CiShare2 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { dummyReviews, dummyWorkPlaces } from "../data/dummyData";
import { Review } from "../components/Review";

import avatar1 from "../assets/avatar1.png";
import placeholder from "../assets/placeholder.png";
import placeholder1 from "../assets/placeholder2.png";
import placeholder2 from "../assets/placeholder3.png";
import placeholder3 from "../assets/placeholder4.png";
import Modal from "../components/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import DynamicStarRating from "../components/DynamicStarRating";

const options = [
  { value: "ParkingLot", label: "ParkingLot" },
  { value: "NightLife", label: "NightLife" },
  { value: "Hospitals", label: "Hospitals" },
  { value: "ParkingLot", label: "ParkingLot" },
  { value: "NightLife", label: "NightLife" },
  { value: "Hospitals", label: "Hospitals" },
];

export const AllReviews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { address } = location?.state;

  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [reviewMessage, setReviewMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const animatedComponents = makeAnimated();

  function addReview() {
    if (selectedPlaces.length < 1 || !reviewMessage) return;

    dummyReviews.push({
      name: anonymous ? "Anonymous" : "Abdurahman",
      date: "2 days ago",
      text: reviewMessage,
      rating: 3,
      tag: "electricity",
      like: 120,
      dislike: 2,
      comment: 34,
      place: selectedPlaces,
    });
    setSelectedPlaces([]);
    setReviewMessage("");
    setAnonymous(false);

    navigate("/");
  }

  return (
    <div>
      <header className="bg-slate-100 py-8 px-8 sm:px-16">
        <div className="flex justify-between items-center flex-wrap sm:gap-0 gap-2">
          <div className="space-x-2 font-mono font-semibold">
            <span>SPOTTA</span>
            <span className="bg-blue-600 rounded-md px-1 text-white">NG</span>
          </div>

          <div className="relative w-1/2 sm:order-none order-last">
            <span className="absolute left-1 top-1/2 -translate-y-1/2">
              <CiSearch className="w-5 h-5 text-gray-500" />
            </span>
            <span className="absolute right-1 top-1/2 -translate-y-1/2">
              <MdOutlineCancel className="w-5 h-5 text-gray-500" />
            </span>

            <input
              type="text"
              placeholder="Enter Address"
              className="sm:text-base text-xs pl-8 sm:w-full w-full ring-2 ring-offset-1 ring-slate-300 py-1 outline-none rounded-md"
            />
          </div>

          <div className="flex items-center gap-3">
            <p className="sm:block hidden">Welcome !</p>
            <figure>
              <img src={avatar1} alt="avatar photo" />
            </figure>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-2 mt-3">
          <div>
            <p className="text-lg font-semibold">{address}</p>
            <p className="text-sm">
              450 Reviews (People are raving about the selected location)
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <Modal>
              <Modal.Open>
                <button className="sm:text-base text-xs w-fit bg-blue-600 text-white px-8 py-2 rounded-md uppercase">
                  Leave a review
                </button>
              </Modal.Open>
              <span className="border-[1px] border-blue-600 text-blue-600 p-3 rounded-md">
                <CiBookmark />
              </span>
              <span className="border-[1px] border-blue-600 text-blue-600 p-3 rounded-md">
                <CiShare2 />
              </span>

              <Modal.Window>
                <>
                  <h4 className="text-center">Review location</h4>
                  <p className="text-xl font-semibold">{address}</p>

                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[]}
                    isMulti
                    options={options}
                    onChange={(newValue, { action }) => {
                      const x = newValue.map((el) => el.value);
                      setSelectedPlaces(x);
                    }}
                    className="mt-3"
                  />

                  <div className="mt-3 space-y-3">
                    <p>Rate location</p>
                    <span>
                      <DynamicStarRating />
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="mb-2">Write Review</p>
                    <textarea
                      placeholder="write review here"
                      onChange={(e) => setReviewMessage(e.target.value)}
                      value={reviewMessage}
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="p-2 w-full outline-none ring-[1px] ring-offset-0 ring-blue-700 rounded-md"
                    ></textarea>
                    <span className="flex gap-2">
                      <input
                        type="checkbox"
                        value={anonymous}
                        onChange={(e) => setAnonymous(e.target.checked)}
                      />
                      <p>Post as anonymous</p>
                    </span>
                  </div>

                  <div className="w-full flex gap-2 mt-5">
                    <button
                      onClick={addReview}
                      className="basis-1/2 sm:text-base text-xs w-fit bg-blue-600 text-white px-8 py-2 rounded-md uppercase"
                    >
                      Submit
                    </button>
                    <Modal.Close>
                      <button className="basis-1/2 sm:text-base text-xs w-fit border-[1px] border-blue-700 text-blue-600 px-8 py-2 rounded-md uppercase">
                        Cancel
                      </button>
                    </Modal.Close>
                  </div>
                </>
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {dummyWorkPlaces.map((place, i) => (
            <span
              key={i}
              className="text-sm rounded-md bg-bg_white border-[1px] border-black px-2"
            >
              {place}
            </span>
          ))}
          <span>
            <IoIosArrowForward className="bg-white p-1 rounded-full text-2xl" />
          </span>
        </div>
      </header>

      <main className="flex xl:flex-row flex-col justify-between gap-3 bg-slate-50 px-6 sm:px-14">
        <div className="basis-3/5 xl:order-1 order-2 space-y-2 px-5 py-8">
          {dummyReviews.map((review, i) => (
            <Review key={i} review={review} />
          ))}
        </div>
        <div className="basis-2/5 xl:order-2 sm:order-1">
          <div className="sm:px-16 px-4 py-6 xl:grid xl:grid-cols-2 xl:gap-1 flex justify-center gap-3 h-fit">
            <figure className="sm:w-44 w-72 aspect-square">
              <img
                src={placeholder}
                alt="image placeholder"
                className="w-full rounded-xl"
              />
            </figure>
            <figure className="sm:w-44 w-72 aspect-square">
              <img
                src={placeholder3}
                alt="image placeholder"
                className="w-full rounded-xl"
              />
            </figure>
            <figure className="sm:w-44 w-72 aspect-square">
              <img
                src={placeholder2}
                alt="image placeholder"
                className="w-full rounded-xl"
              />
            </figure>
            <figure className="sm:w-44 w-72 aspect-square">
              <img
                src={placeholder1}
                alt="image placeholder"
                className="w-full rounded-xl"
              />
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
};
