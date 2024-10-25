import React from "react";
import { workExperience } from "@/app/data";
import { Timeline } from "../ui/TimeLine"; 

const Experience = () => {
  // Transform workExperience to match TimelineEntry format
  const timelineData = workExperience.map((exp) => ({
    title: exp.title,
    content: (
      <div className="flex items-center">
        {exp.thumbnail ? (
          <img
            src={exp.thumbnail}
            alt={exp.title}
            className="w-16 h-16 rounded-full mr-4" // Style as needed
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-full">
            <span>No Image</span>
          </div>
        )}
        <div>
          <p className="font-semibold">{exp.title}</p>
          <p>{exp.desc}</p>
        </div>
      </div>
    ),
  }));

  return (
    <div className="py-10 w-full">
      <h1 className="text-center text-2xl md:text-xl lg:text-3xl font-semibold">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <Timeline data={timelineData} />
    </div>
  );
};

export default Experience;
