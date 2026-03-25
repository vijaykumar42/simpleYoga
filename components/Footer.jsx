import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 px-4 md:px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* 🔥 Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Aadhyantha Academy</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Aadhyantha Academy is a yoga center dedicated to providing
            high-quality yoga instruction and promoting holistic wellness.
          </p>
        </div>

        {/* 🔥 Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 🔥 Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a
                href="https://g.co/kgs/vTR5LXg"
                target="_blank"
                className="hover:text-primary"
              >
                📍 Mattikere, Bangalore, India
              </a>
            </li>
            <li>📞 +91 9491785809</li>
            <li>📧 aadhyanthaacademy@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* 🔥 Bottom Bar */}
      <div className="border-t border-gray-300 mt-12 pt-12 text-center text-sm text-gray-700 space-y-2">
        <p>
          © {new Date().getFullYear()} Aadhyantha Academy. All rights reserved.
        </p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://web2grow.vercel.app/"
            target="_blank"
            className="text-primary hover:underline"
          >
            Web2Grow
          </a>
        </p>
      </div>
    </footer>
  );
}
