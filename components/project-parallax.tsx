"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Premier League News Now",
    link: "https://premierleaguenewsnow.com/",
    thumbnail: "/Premier-league.jpeg"
  },
  {
    title: "Shramak",
    link: "https://shramak.com",
    thumbnail:
      "/Shramak.jpeg",
  },
  {
    title: "We Cover It",
    link: "https://wecoverit.shop",
    thumbnail:
      "/We-cover-it.jpeg",
  },

  {
    title: "Bright Brush and Bristle Works",
    link: "https://brightbristlebrush.com",
    thumbnail:
      "/Bright-Brush-and-Bristle-Works.jpeg",
  },
  {
    title: "Revent AI",
    link: "https://revent.ai",
    thumbnail:
      "/Revent-ai.jpeg",
  },
  {
    title: "Aashiyaanaa Villas",
    link: "https://aashiyaanaavilla.com",
    thumbnail:
      "/Aashiyaanaa-Villas.jpeg",
  },

  {
    title: "Deemonash",
     // maintainance
    link: "https://deemonash.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Blufeather Solutions",
    // maintainance
    link: "https://blufeathersolutions.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Vaiikuntha",
    link: "https://vaiikuntha.com",
    // no website
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "Arsenal Core",
    link: "https://arsenalcore.com",
    thumbnail:
      "/Arsenal-Core.jpeg",
  },
//   repeated projects

  {
    title: "Revent AI",
    link: "https://revent.ai",
    thumbnail:
      "/Revent-ai.jpeg",
  },
  {
    title: "Aashiyaanaa Villas",
    link: "https://aashiyaanaavilla.com",
    thumbnail:
      "/Aashiyaanaa-Villas.jpeg",
  },
  {
    title: "Shramak",
    link: "https://shramak.com",
    thumbnail:
      "/Shramak.jpeg",
  },
  {
    title: "We Cover It",
    link: "https://wecoverit.shop",
    thumbnail:
      "/We-cover-it.jpeg",
  },
];
