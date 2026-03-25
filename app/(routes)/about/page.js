const COACHES = [
  {
    name: "Sulappagari Suman",
    role: "Founder & Trainer",
    details: [
      "Yoga Instructor",
      "Certified Yoga Teacher",
      "Teaching Experience: 8+ Years",
    ],
  },
  {
    name: "Karthik",
    role: "Yoga Trainer",
    details: ["Yoga Instructor", "Certified Yoga Teacher"],
  },
];

export default function About() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔥 Hero */}
        <p className="text-primary uppercase tracking-widest text-base font-semibold mb-3">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Aadhyantha Academy
        </h1>
        <p className="text-gray-700 max-w-5xl mx-auto mb-6">
          Yoga is a holistic practice that unites the mind, body, and spirit
          through a combination of physical postures, breathing techniques, and
          meditation. At Aadhyantha Yoga Academy, we focus on helping
          individuals achieve balance, flexibility, and inner calm through
          structured and mindful practice.
        </p>

        <p className="text-gray-700 max-w-5xl mx-auto mb-6">
          Our classes are thoughtfully designed for all levels — from beginners
          taking their first step into yoga to advanced practitioners looking to
          deepen their journey. With expert guidance, students experience steady
          progress in strength, focus, and overall well-being.
        </p>

        <p className="text-gray-700 max-w-5xl mx-auto mb-6">
          We offer a wide range of practices including Yoga Asanas, Pranayama,
          Meditation, Yoga Nidra, and therapeutic healing techniques. Each
          session is crafted to not only improve physical health but also
          enhance mental clarity and emotional balance.
        </p>

        <p className="text-gray-700 max-w-5xl mx-auto mb-6">
          Our serene and supportive environment encourages self-discovery and
          personal growth. Whether you choose to attend classes at our center or
          join online, we provide flexibility to suit your lifestyle and
          schedule.
        </p>

        <p className="text-gray-700 max-w-5xl mx-auto mb-12">
          At Aadhyantha Yoga Academy, we believe yoga is more than just exercise
          — it is a journey toward a healthier, more mindful, and harmonious
          life. Join us and experience the true essence of yoga.
        </p>

        {/* 🔥 Coaches */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Trainers</h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-6">
            Our team of experienced trainers is dedicated to guiding you on your
            yoga journey, helping you achieve physical, mental, and spiritual
            well-being.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {COACHES.map((coach) => (
              <div
                key={coach.name}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>

                <p className="text-primary font-semibold text-sm mb-4">
                  {coach.role}
                </p>

                <ul className="space-y-2 text-gray-700 text-sm">
                  {coach.details.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
