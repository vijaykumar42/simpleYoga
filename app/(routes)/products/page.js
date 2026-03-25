import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PRODUCTS = [
  { title: "Yoga Mats", image: "/yoga-mats.webp" },
  { title: "Wooden Bricks", image: "/woodenBricks.webp" },
  { title: "Yoga Belt", image: "/yogaBelts.webp" },
  { title: "Yoga Ropes", image: "/yogaRopes.webp" },
  { title: "Professional ChessBoard", image: "/pChessBoard.webp" },
  { title: "Chess Clock", image: "/chessClock.webp" },
  { title: "Tarataka Stand", image: "/taratakaStand.webp" },
  { title: "Sutra Neti", image: "/sutraNeti.webp" },
  { title: "Jala Neeti Pot", image: "/jalaNeetiPot.webp" },
  { title: "Eye Washing Cups", image: "/eyeWashingCups.webp" },
  { title: "Agni Hotra Kit", image: "/agniHotraKit.webp" },
];

export default function page() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary uppercase tracking-widest text-base font-semibold mb-3">
          products
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Check Our Products
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We offer a curated selection of high-quality yoga and chess products
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center border border-gray-500 hover:border-primary rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={300}
              />

              <h3 className="text-base font-semibold mt-4">{item.title}</h3>

              <a href="https://wa.me/9491785809" target="_blank">
                <Button className="mt-4 bg-primary">Order on WhatsApp</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
