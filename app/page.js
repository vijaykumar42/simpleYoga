import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Programs limitPoints />
      <Testimonials />
      <Faqs />
    </>
  );
}
