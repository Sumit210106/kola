"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
const products = [
  {
    title: "Purva Desai & Co",
    link: "https://purvadesai.com",
    thumbnail: "/projects/Purva Desai & Co.jpeg",
  },
  {
    title: "Revent AI",
    link: "https://revent.ai",
    thumbnail: "/projects/Revent AI.jpeg",
  },
  {
    title: "Anantapur-II REZ Phase-I",
    link: "https://anantapur2rez.com",
    thumbnail: "/projects/Anantapur-II REZ Phase-I.jpeg",
  },
  {
    title: "Veena Developers",
    link: "https://veenadevelopers.com",
    thumbnail: "/projects/Veena Developers.jpeg",
  },
  {
    title: "NBTL",
    link: "https://nbtl.co.in",
    thumbnail: "/projects/Nangalbibra-Bongaigaon Transmission Line.jpeg",
  },
  {
    title: "Zevana Jewels",
    link: "https://zevanajewels.com.au",
    thumbnail: "/projects/Zevana Jewels.jpeg",
  },
  {
    title: "Kanodia Enterprises",
    link: "https://kanodiaenterprise.com",
    thumbnail: "/projects/Kanodia Enterprises.jpeg",
  },
  {
    title: "Acha Parhlo",
    link: "https://achaparhlo.com",
    thumbnail: "/projects/Acha Parhlo.jpeg",
  },
  {
    title: "Livyor",
    link: "https://livyor.com",
    thumbnail: "/projects/Livyor.jpeg",
  },
  {
    title: "Gcube Ethnic",
    link: "https://gcubeethnic.com",
    thumbnail: "/projects/Gcube Ethnic.jpeg",
  },
  {
    title: "Shramak",
    link: "https://shramak.com",
    thumbnail: "/projects/Shramak.jpeg",
  },
  {
    title: "Arsenal Core",
    link: "https://arsenalcore.com",
    thumbnail: "/projects/Arsenal Core.jpeg",
  },
  {
    title: "Premier League News Now",
    link: "https://premierleaguenewsnow.com",
    thumbnail: "/projects/Premier League News Now.jpeg",
  },
  {
    title: "BluFeather Solutions",
    link: "https://blufeathersolution.com",
    thumbnail: "/projects/BluFeather Solutions.jpeg",
  },
  {
    title: "Aashiyaanaa Villa",
    link: "https://aashiyaanaavilla.com",
    thumbnail: "/projects/Aashiyaanaa Villa.jpeg",
  },
]