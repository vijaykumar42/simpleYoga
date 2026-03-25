import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-t from-white to-secondary px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
            Find Your Inner Peace & Balance
          </h1>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Join our yoga sessions to improve flexibility, reduce stress, and
            strengthen your mind and body. Experience the transformative power
            of yoga.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://wa.me/919491785809" target="_blank">
              <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-5 text-sm font-semibold">
                Book a Session
              </Button>
            </a>

            <Link href="/about">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-6 py-5 text-sm font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/img/yoga-hero3.png"
            alt="Yoga practice"
            width={800}
            height={600}
            className="rounded-2xl object-cover w-full h-[450px] md:h-[550px]"
          />

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-bold">10+ Years</p>
            <p className="text-sm">Yoga Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
