"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import About from "./components/About";
import Mission from "./components/mission";
import Achivement from "./components/achivement";
import Executive from "./components/executive";

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
      <main className="flex min-h-screen flex-col items-center justify-between">
        <About />
        <Mission />
        <Achivement />
        <Executive />
      </main>
      <footer className="w-full h-[40vh] bg-black"></footer>
    </>
  );
}
