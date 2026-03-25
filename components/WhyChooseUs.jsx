const features = [
  {
    title: "20,000+ Students",
    desc: "Yoga programs that have transformed the lives of thousands worldwide.",
  },
  {
    title: "8+ Years of Experience",
    desc: "Led by seasoned instructors with over a decade of teaching expertise.",
  },
  {
    title: "4.9/5 Rating",
    desc: "Consistently praised for our effective, personalized yoga sessions and supportive community.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔥 Heading */}
        <p className="text-primary uppercase tracking-widest text-base font-semibold mb-3">
          Why Choose Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by Members Worldwide
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Join our community of yoga enthusiasts and experience the
          transformative power of mindful movement.
        </p>

        {/* 🔥 Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-500 hover:border-primary rounded-2xl p-6  transition-all duration-300 hover:-translate-y-2"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
