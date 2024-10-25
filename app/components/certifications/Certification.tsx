"use client";

import React from 'react';

import { companies, certification } from "@/app/data";
import { InfiniteMovCards } from "../ui/InfiniteMovCards";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <h1 className="text-center text-2xl md:text-xl lg:text-3xl font-semibold">
        Some of My
        <span className="text-purple"> Certifications</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
            className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovCards
            items={certification}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-3 items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5 ml-2"
                />
                <p className="md:w-24 w-20">
                  {company.name.toUpperCase()}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
