"use client";
import { WorldMap } from "../components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <div className="py-20 md:pt-30 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Our Clients Across{" "}
          <span className="text-neutral-400">
            Countries{"".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          We have proudly served clients across the globe, extending our reach to diverse countries and cultures. Explore our remote connectivity network.
        </p>
      </div>
      <WorldMap
        dots={[
          { start: { lat: 18.5167, lng: 73.8563 }, end: { lat: 40.7128, lng: -74.0060 } },  // Pune -> New York City
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: -37.8136, lng: 129.9631 }, // Melbourne, Australia
          },
          {
             start: { lat: 35.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: -27.4698, lng: 43.0251 }, // Brisbane, Australia
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -34.9285, lng: 138.6007 }, // Adelaide, Australia
          },
        ]}
      />
    </div>
  );
}
