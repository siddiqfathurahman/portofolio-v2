import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const GithubGraph = () => {
  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="font-poppins text-center px-2 flex flex-col justify-center bg-slate-100 pt-20 items-center">
      <h1 className="md:text-5xl text-3xl text-purple-700 font-extrabold mb-3">Github Activity</h1>
      <p className="text-black mb-6 px-2 max-w-[650px]">
        This calendar shows my GitHub contributions over time. Darker colors represent more activity,
        giving an overview of my coding journey.
      </p>
      <GitHubCalendar
        username="siddiqfathurahman"
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
        showWeekdayLabels
        weekStart={1}
        colorScheme="light"
      />
      <div className="mt-8">
        <button
          className="text-red-800 font-medium px-4 py-2 flex items-center gap-2"
          onClick={toggleStats}
        >
          {showStats ? (
            <>
              Close Most Used Languages <IoIosArrowUp />
            </>
          ) : (
            <>
              Most Used Languages <IoIosArrowDown />
            </>
          )}
        </button>
      </div>
      {showStats && (
        <p className="mt-6">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=siddiqfathurahman&show_icons=true&locale=en&layout=compact"
            className="md:w-[450px] w-[350px] shadow-lg h-auto"
            alt="siddiqfathurahman"
          />
        </p>
      )}
    </div>
  );
};

export default GithubGraph;
