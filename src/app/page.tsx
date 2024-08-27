import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full py-8 flex flex-wrap items-center justify-center">
      <div className="w-full max-w-[1420px] flex flex-wrap gap-8 mx-auto">
        <Link
          href="/admin"
          className="flex-1 p-4 flex items-center justify-center bg-lamaYellow rounded-xl"
        >
          Admin
        </Link>
        <Link
          href="/student"
          className="flex-1 p-4 flex items-center justify-center bg-lamaYellow rounded-xl"
        >
          Student
        </Link>
        <Link
          href="/teacher"
          className="flex-1 p-4 flex items-center justify-center bg-lamaYellow rounded-xl"
        >
          Teacher
        </Link>
        <Link
          href="/parent"
          className="flex-1 p-4 flex items-center justify-center bg-lamaYellow rounded-xl"
        >
          Parent
        </Link>
      </div>
    </div>
  );
};

export default Home;
