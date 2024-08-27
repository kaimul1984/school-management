import Announcments from "@/components/Announcments";
import BigCalender from "@/components/BigCalender";
import EventCalender from "@/components/EventCalender";
import React from "react";

export default function StudentPage() {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalender />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcments />
      </div>
    </div>
  );
}
