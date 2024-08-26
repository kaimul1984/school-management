import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 ">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full border-2 px-2 ">
        <Image src="/search.png" alt="searchImg" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent outline-none py-2"
        />
      </div>
      {/* ICON AND USER */}
      <div className="flex items-center justify-center gap-6">
        <div className="bg-white rounded-full size-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="messagePic" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full size-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="messagePic"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John doe</span>
          <span className="text-[10px] text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={20}
          height={20}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
