"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Reports from "./reports/report";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const reponse = await fetch("http://localhost:3000/api/", {
        method: "GET",
      });

      console.log(await reponse.json());
      return await reponse.json();
    };

    getData();
  }, []);

  return (
    <>
      <section className="p-2 md:p-6 justify-center items-center">
        <article className="md:flex grid grid-cols-2 flex-wrap md:flex-row justify-center items-center gap-2">
          <Radial value="70" color="text-[#4a00ff]" />
          <Radial value="90" color="text-green" />
          <Radial value="40" color="text-red" />
          <Radial value="65" color="text-[#4a00ff]" />
        </article>
      </section>
      <Reports />
    </>
  );
}

function Radial({ value, color }: { value: string; color: string }) {
  const style: React.CSSProperties = {
    "--value": value as unknown as string, // Use type assertion to handle custom properties
    "--size": "10rem",
    "--thickness": "2rem",
  } as React.CSSProperties;

  return (
    <div
      className={`radial-progress ${color}`}
      style={style}
      role="progressbar"
    >
      {value}
    </div>
  );
}
