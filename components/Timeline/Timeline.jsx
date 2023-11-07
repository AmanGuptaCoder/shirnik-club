import React from "react";
import { TimelineCard } from "./TimelineCard";
import { TimelineDay } from "./TimelineDay";
import { motion } from "framer-motion";

export const Timeline = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.20,
      },
    },
  };
  return (
    <div className="mx-auto md:flex md:gap-20" id="timeline">
      <h1 className="text-center text-glow md:self-center text-5xl md:text-6xl font-semibold text-white pb-8">
        timeline
      </h1>
      <div>
        <div className="text-white mt-6 mx-auto" id="timeline">
          <motion.ol
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-l border-gray-200"
          >
              
            <TimelineCard
              heading={"Registration Starts"}
              timing={"7th Nov 2023"}
              dotColor={"bg-[#FFFFFF]"}
              E94336
            />
            <TimelineCard
              heading={"Registration Ends"}
              timing={"25th Nov 2023"}
              dotColor={"bg-[#FFFFFF]"}
            />
            <TimelineDay day={1} date={"29th Nov 2023"} />
            <TimelineCard
              heading={"Team Check-In and Opening Ceremony"}
              timing={"9:00 AM to 10:00 AM"}
              dotColor={"bg-[#FFFFFF]"}
            />
            
            <TimelineCard
              heading={"Hacking Starts!"}
              timing={"10:00 AM onwards"}
              dotColor={"bg-[#FFFFFF]"}
            />
            
            <TimelineCard
              heading={"Lunch"}
              timing={"2:00 PM onwards"}
              dotColor={"bg-[#FFFFFF]"}
            />
            <TimelineCard
              heading={"Elimination Round"}
              timing={"4:00 PM onwards"}
              dotColor={"bg-[#FFFFFF]"}
            />
            <TimelineCard
              heading={"Top 15 Team Announcement"}
              timing={"4:30 PM to 5:00 PM"}
              dotColor={"bg-[#FFFFFF]"}
            />
            
            {/* <TimelineCard
              heading={"Dinner"}
              timing={"8:00 PM onwards"}
              dotColor={"bg-[#FFFFFF]"}
            />
            
            <TimelineCard
              heading={"Mentoring Round"}
              timing={"9:00 PM onwards"}
              dotColor={"bg-[#FFFFFF]"}
            /> */}
            <TimelineDay day={2} date={"30th Nov 2023"} />
            
            
            <TimelineCard
              heading={"Team 15 Teams Check- In"}
              timing={"9:00 AM to 10:00 AM"}
              dotColor={"bg-[#FFFFFF]"}
            />
            
            <TimelineCard
              heading={"Final Presentation"}
              timing={"10:00 AM to 12:00 AM"}
              dotColor={"bg-[#FFFFFF]"}
            />
            {/* <TimelineCard
              heading={"Final Round of Judging"}
              timing={"11:00 AM to 1:00 PM"}
              dotColor={"bg-[#FFFFFF]"}
            /> */}
            <TimelineCard
              heading={"Felicitaion of Winners"}
              timing={"1:00 PM to 2:00 PM"}
              dotColor={"bg-[#FFFFFF]"}
            />
            
            <TimelineCard
              heading={"Hackathon Ends"}
              timing={"3:00 PM"}
              dotColor={"bg-[#FFFFFF]"}
            />
          </motion.ol>
        </div>
      </div>
    </div>
  );
};
