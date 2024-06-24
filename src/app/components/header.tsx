import { IoMenu } from "react-icons/io5";
import React from "react";
import GroupPhoto from "@/app/assets/images/group photo.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-darkblue to-blue text-white">
      <div className="navbar bg-base-100 px-3 md:w-[90%]  bg-transparent mx-auto ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">Cybersecurity club</a>
        </div>

        <div className="md:hidden">
          <button className="text-range text-[2.5rem] font-bold btn bg-transparent border-none">
            <IoMenu />
          </button>
        </div>

        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="homepage-hero"
        className="h-[526px] md:h-[542px] pt-3 bg-cover bg-center"
      ></div>
    </header>
  );
}
