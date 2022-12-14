import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-2xl md:text-5xl font-bold py-10 md:py-14 md:mx-10 text-center md:text-left">
          Experience
        </h1>
      </div>
      <br/><br/>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-36 md:-mt-24">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-10 md:pt-14">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                details={exp.details}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, details, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 lg:p-6 lg:-mx-32">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl lg:text-5xl lg:-top-12 text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl lg:text-3xl">{title}</h1>
      <a href={companyLink} className="text-gray-500 lg:text-2xl">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2 lg:text-xl">{desc}</p><br/>
      <p className="text-sm text-gray-600 dark:text-gray-400 my-2 lg:text-xl">{details}</p>
    </div>
  );
};
