import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, Briefcase, HeartPulse, Sparkles } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Yoga Teacher Training",
    desc: "Become a certified yoga instructor with deep knowledge and practice.",
    points: [
      "Yoga philosophy",
      "Asana alignment",
      "Pranayama basics",
      "Meditation techniques",
      "Teaching methods",
      "Class sequencing",
      "Anatomy basics",
      "Adjustment skills",
      "Ethics of teaching",
      "Practice teaching",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Yoga Sessions",
    desc: "Enhance employee wellness and productivity through yoga.",
    points: [
      "Desk yoga",
      "Stress relief",
      "Posture correction",
      "Breathing exercises",
      "Energy boost",
      "Focus improvement",
      "Relaxation breaks",
      "Stretch routines",
      "Work-life balance",
      "Team wellness",
    ],
  },
  {
    icon: HeartPulse,
    title: "Yoga Therapy",
    desc: "Personalized yoga practices for healing and recovery.",
    points: [
      "Pain management",
      "Injury recovery",
      "Chronic conditions",
      "Breath therapy",
      "Mobility improvement",
      "Mind-body healing",
      "Stress reduction",
      "Customized sessions",
      "Lifestyle guidance",
      "Holistic wellness",
    ],
  },
  {
    icon: Sparkles,
    title: "Yoga Workshops",
    desc: "Specialized sessions to deepen practice and explore new techniques.",
    points: [
      "Themed sessions",
      "Advanced asanas",
      "Breathwork focus",
      "Meditation practice",
      "Flexibility training",
      "Strength building",
      "Mindfulness drills",
      "Technique refinement",
      "Group learning",
      "Skill enhancement",
    ],
  },
];

export default function Programs({ limitPoints = false }) {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔥 Heading */}
        <p className="text-primary uppercase tracking-widest text-base font-semibold mb-3">
          Our Programs
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">Yoga Programs</h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Yoga programs designed to help you achieve physical and mental
          well-being through various yoga practices.
        </p>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between border border-gray-200 hover:border-primary rounded-2xl p-8 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <program.icon className="w-8 h-8 text-primary mb-4" />

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>

              {/* Description */}
              <p className="text-gray-700 mb-4">{program.desc}</p>

              {/* Points */}
              <ul className="text-gray-700 space-y-2 mb-6">
                {program.points
                  .slice(0, limitPoints ? 3 : program.points.length)
                  .map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary">✔</span> {point}
                    </li>
                  ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                {limitPoints ? (
                  <Link href="/programs">
                    <Button className="bg-primary w-full">Know More</Button>
                  </Link>
                ) : (
                  <a href="https://wa.me/919491785809" target="_blank">
                    <Button className="bg-primary w-full">Enroll Now</Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
