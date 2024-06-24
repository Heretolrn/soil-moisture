import React from "react";
import Underline from "./underline";
import CybersecurityImg from "@/app/assets/images/cybersecurityimg.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      <Underline title="ABOUT US" />

      <div className="max-w-[598px] px-6 mx-auto">
        <p className="text-white text-center">
          UMaT cybersecurity club is the altimate club that explores
          cyberscurity and reshearch, Train the younger to aquire the skill
          needed to fill up the roles to keep our systems save
        </p>
      </div>

      <article className="max-w-[1597.3px] mx-auto mt-10 md:flex md:flex-col lg:flex-row justify-center px-3">
        <div className="md:min-w-[712px] flex justify-center items-center flex-col md:block md:justify-start md:items-start gap-3 md:gap-0">
          <figure
            id="about-img1"
            className="w-[80%] max-w-[455px] md:max-w-auto h-[300px] md:w-[460px] md:h-[400px] bg-range shadow-xl"
          >
            {/* <Image
            src={CybersecurityImg}
            alt="cybersecurity image"
            width={460}
            height={423}
          /> */}
          </figure>
          <figure
            id="about-img2"
            className="w-[80%] max-w-[455px] md:max-w-auto h-[300px] md:w-[460px] md:h-[400px] bg-range shadow-xl md:translate-x-[200px] md:-translate-y-[90px]"
          >
            {/* <Image
            src={CybersecurityImg}
            alt="cybersecurity image"
            width={460}
            height={423}
          /> */}
          </figure>
        </div>

        <article className="max-w-[480px] p-4 mx-auto md:mx-0">
          <p className="text-white mb-4">
            We provide employment pathways in the tech sector to young graduates
            in Sub-Saharan Africa, connecting them to the global demand for tech
            talent. Our approach combines training with employment and
            continuous learning because evidence show that only this integrated
            approach actually works. By focusing on skilled ICT services, we
            contribute to ecosystem development and to the emergence of the
            future-proof industry with growth engine potential. Through the UN’s
            Decent Jobs for the Youth Initiative, we have committed to:
          </p>
          <p className="text-white mb-4">
            We provide employment pathways in the tech sector to young graduates
            in Sub-Saharan Africa, connecting them to the global demand for tech
            talent. Our approach combines training with employment and
            continuous learning because evidence show that only this integrated
            approach actually works. By focusing on skilled ICT services, we
            contribute to ecosystem development and to the emergence of the
            future-proof industry with growth engine potential. Through the UN’s
            Decent Jobs for the Youth Initiative, we have committed to:
          </p>
          <p className="text-white mb-4">
            We provide employment pathways in the tech sector to young graduates
            in Sub-Saharan Africa, connecting them to the global demand for tech
            talent.
          </p>

          <div className="flex gap-3 flex-col md:flex-row items-start md:items-center">
            <div className="flex flex-col items-center">
              <p className="text-range text-4xl font-bold">2000+ </p>
              <span className="text-white">Current Students</span>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-range text-4xl font-bold">300+ </p>
              <span className="text-white">Trained Student</span>
            </div>
          </div>
        </article>
      </article>
    </div>
  );
}
