import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="text-2xl md:text-6xl lg:text-7xl xl:text-8xl mx-4 my-1 text-left md:mt-12 lg:text-center lg:mt-10 lg:mx-20 xl:mx-32">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={'blue'}>
            <h1 className="font-bold text-gray-700 dark:text-gray-200">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={'green'}>
            <h1 className="font-bold text-gray-700 dark:text-gray-200 xs:mx-4 my-1">
              Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={'orange'}>
            <h1 className="font-bold text-gray-700 dark:text-gray-200 xs:mx-4 my-1">
              Blockchain.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={'red'}>
            <h1 className="font-bold text-gray-700 dark:text-gray-200 xs:mx-4 my-1">
              Gamer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={'purple'}>
            <h1 className="font-bold text-gray-700 dark:text-gray-200 xs:mx-4 my-1">
              Astronomer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}

      <div className="md:hidden relative text-right">
        <img src={userData.avatarUrl} alt="avatar" className="shadow w-4/5 mx-2 -mt-6 mb-2" />
      </div>

      <div className="hidden md:block lg:block xl:block relative w-full lg:w-3/5 -mr-40 md:-mt-4">
        <div className="w-3/5 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me, and here's my</p>
              <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                CV
                </a>{" "}
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}