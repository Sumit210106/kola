"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mt-[-150px] sm:mb-[-120px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/reel/DJ1Co45PvPK/embed"
            width="400"
            height="720"
            scrolling="no"
            allowtransparency="true"
            allow="autoplay"
            allowFullScreen
            muted
            loop
          ></iframe>
        </div>
      </ContainerScroll>
    </div>
  );
}
