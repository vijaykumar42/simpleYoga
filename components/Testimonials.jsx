const testimonials = [
  {
    name: "Toni Monge",
    place: "Taiwan",
    content:
      "Great yoga class! Mixed yoga and meditation, Teacher Suman is very knowledgeable! Happy to have joined.",
  },
  {
    name: "Aswini koduri",
    place: "Michigan USA",
    content:
      "I am the beginner in yoga and feel fresh and relaxed after the class.Suman is the excellence instructor for the morning Online sessions. Yoga Asanas helped for my head back pain.",
  },
  ,
  {
    name: "Girija Sharma",
    place: "London, UK",
    content:
      "It was wonderful doing yoga with Suman Sir!!! His systematic and smooth way of teaching yoga helped me improving myself. It was a complete package with Asanas, Surya Namaskara and Pranayama. It was a pleasant journey throughout Suman Sir.",
  },
  {
    name: "Seina Yamanaka",
    place: "Japan,Tokyo",
    content:
      "Thank you for amazing morning class!! Class was based on Hatha and he is good at supporting us for deeper posture. Above all, he is really nice person and friendly. I will go back to his class when I come back to Bangalore!!",
  },
  {
    name: "Ashok Srinivasan",
    place: "Bangalore",
    content:
      "Suman has been a great source of inspiration for me .. The way he had trained me to do my Himalaya (mayali pass) trek is truly commendable and to this day it has been helping me and my wife lead a healthy lifestyle .. He does not stuck only in teaching you the asana’s but goes in length in explaining the reason and the logic behind it",
  },
  {
    name: "Sowmya S (Youtuber)",
    place: "Bangalore",
    content:
      "Very good positive vibe in the class with meditation, pranayama and yoga. Suman sir teaches Very well and tells the benefits of each Asanas and teaches the breathing techniques required for each asana so that we reap the full benefit of the asana. Thank you sir!",
  },
  {
    name: "Chanda Rawat",
    place: "Gurugram, Haryana",
    content:
      "The daily Asanas were well planned to take care of our body and mind completely. Suman Sir always gave variations according to our strength and flexibility which helped me a lot. I had a nice experience practicing yoga with Aadhyantha",
  },
  {
    name: "Monika Tara Yeluri",
    place: "Rajahmundry, AP",
    content:
      "Yoga Instructor Suman garu has a lot of patience and make us more informative about the Asanas we do and brings us the lot of positivity.",
  },
  {
    name: "Santosh Kumar",
    place: "Mangalore, Karnataka",
    content:
      "Suman sir is a very good yoga teacher his teaching methodology is unique and very useful for today's stress and lifestyle thank you very much sir",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔥 Heading */}
        <p className="text-primary uppercase tracking-widest text-base font-semibold mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Our Students Say
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Hear from our students about their transformative experiences with our
          yoga classes. From improved flexibility to enhanced mental clarity,
          discover how our teachings have impacted their lives.
        </p>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-gray-500 rounded-2xl p-8 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Text */}
              <p className="text-gray-700 mb-6 italic">“{item.content}”</p>

              {/* User */}
              <h4 className="font-semibold">
                {item.name} - {item.place}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
