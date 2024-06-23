import React from "react";

export default function Underline({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-white text-bold text-[24px] font-inter mt-[55px] text-center capitalize">
        {title}
      </h2>
      <div className="h-2 w-[70px] mx-auto bg-range mb-[18px]"></div>
    </div>
  );
}
