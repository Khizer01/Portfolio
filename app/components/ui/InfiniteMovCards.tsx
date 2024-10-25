"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    organization: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
        const getDirection = () => {
          if (containerRef.current) {
            if (direction === "left") {
              containerRef.current.style.setProperty(
                "--animation-direction",
                "forwards"
              );
            } else {
              containerRef.current.style.setProperty(
                "--animation-direction",
                "reverse"
              );
            }
          }
        };
        const getSpeed = () => {
          if (containerRef.current) {
            if (speed === "fast") {
              containerRef.current.style.setProperty("--animation-duration", "25s");
            } else if (speed === "normal") {
              containerRef.current.style.setProperty("--animation-duration", "45s");
            } else {
              containerRef.current.style.setProperty("--animation-duration", "85s");
            }
          }
        };
  
        getDirection();
        getSpeed();
        setStart(true);
      }
    };
    
    addAnimation();
  }, [direction, speed]);

  const [start, setStart] = useState(false);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
            className="w-[55vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 px-5 py-3 md:px-10 md:py-8 sm:w-[80vw] md:w-[50vw] text-center"
            style={{
              //   background:
              //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            // change to idx cuz we have the same name
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* change text color, text-lg */}
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-bold">
                {item.name}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center justify-center">
                {/* add this div for the profile img */}
                <div className="me-3">
                  <Image src={item.image} alt={item.organization} width={40} height={40}/>
                </div>
                <span className="flex flex-col gap-1">
                  {/* change text color, font-normal to font-bold, text-xl */}
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.organization}
                  </span>
                  
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};