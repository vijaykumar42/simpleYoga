import React from "react";
import Image from "next/image";

const imageGallery = [
  "/yoga/founder.jpeg",
  "/yoga/13.jpeg",
  "/yoga/15.jpeg",
  "/yoga/40.jpeg",
  "/yoga/41.jpeg",
  "/yoga/42.jpeg",
  "/yoga/16.jpeg",
  "/yoga/18.jpeg",
  "/yoga/19.jpeg",
  "/yoga/22.jpeg",
  "/yoga/23.jpeg",
  "/yoga/28.jpeg",
  "/yoga/29.jpeg",
  "/yoga/30.jpeg",
  "/yoga/31.jpeg",
  "/yoga/32.jpeg",
  "/yoga/34.jpeg",
  "/yoga/36.jpeg",
  "/yoga/about.jpeg",
  "/yoga/44.jpeg",
  "/yoga/45.jpeg",
  "/yoga/46.jpeg",
  "/yoga/47.jpeg",
  "/chess/0.jpeg",
  "/chess/2.jpeg",
  "/chess/4.jpeg",
  "/chess/6.jpeg",
  "/chess/7.jpeg",
  "/chess/8.jpeg",
  "/chess/9.jpeg",
  "/chess/10.jpeg",
  "/chess/11.jpeg",
  "/chess/12.jpeg",
  "/chess/13.jpeg",
  "/chess/14.jpeg",
  "/chess/15.jpeg",
  "/chess/16.jpeg",
  "/chess/17.jpeg",
  "/chess/18.jpeg",
  "/yoga/53.jpeg",
  "/yoga/54.jpeg",
  "/yoga/55.jpeg",
  "/yoga/56.jpeg",
  "/yoga/43.jpeg",
  "/yoga/48.jpeg",
  "/yoga/49.jpeg",
  "/yoga/50.jpeg",
  "/yoga/51.jpeg",
  "/yoga/57.jpeg",
  "/yoga/58.jpeg",
  "/yoga/59.jpeg",
  "/yoga/60.jpeg",
  "/yoga/61.jpeg",
  "/yoga/62.jpeg",
];

export default function page() {
  return (
    <div className="px-4 md:px-8">
      <h1 className="pt-12 text-3xl md:text-4xl text-center font-medium">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12">
        {imageGallery.map((url, index) => (
          <Image
            className="border rounded-md shadow-md md:hover:scale-125 transition duration-500 cursor-pointer"
            key={index}
            src={url}
            height="150"
            width="500"
          />
        ))}
      </div>
    </div>
  );
}
