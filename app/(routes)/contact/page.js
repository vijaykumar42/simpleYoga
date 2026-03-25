export default function Contact() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🔥 Left - Image */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-primary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0169956194986!2d77.55389319999999!3d13.034589599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0e5083297f%3A0x57fe837661260660!2sAadhyantha%20yoga%20studio!5e0!3m2!1sen!2sin!4v1774323746313!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Small floating card */}
          <div className="absolute bottom-4 left-4 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-bold">Reach Out</p>
            <p className="text-sm">We’re here to help!</p>
          </div>
        </div>

        {/* 🔥 Right - Content */}
        <div>
          <p className="text-primary uppercase tracking-widest text-base font-semibold mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get in Touch with Us
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We’d love to hear from you! Whether you have questions about our
            programs, want to schedule a demo, or collaborate with us, our team
            is ready to assist you.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Reach out via phone, email, or WhatsApp. We’re here to help you take
            the next step in your yoga journey. Let’s connect and explore how we
            can support your wellness goals together!
          </p>

          {/* 🔥 Contact Info */}
          <div className="grid gap-6">
            <div>
              <p className="font-semibold ">📞 Phone</p>
              <p className="text-gray-700">+91 9491785809</p>
            </div>
            <div>
              <p className="font-semibold">✉ Email</p>
              <p className="text-gray-700"> aadhyanthaacademy@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">📍 Address</p>
              <p>
                <a
                  className="font-medium text-primary hover:underline"
                  href="https://g.co/kgs/vTR5LXg"
                  target="_blank"
                >
                  ✔ Aadhyantha Academy, Mattikere, Bangalore, India
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
