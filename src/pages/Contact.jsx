import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#0a1f1a] to-[#071511] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-[#FFF3E0]"
        >
          Contact
        </motion.h3>
        <p className="mt-2 text-white/70 max-w-2xl">We would love to hear from you.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent! Thank you.');
              setForm({ name: '', email: '', message: '' });
            }}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm text-white/80">Name
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Jane Doe"
                  required
                />
              </label>
              <label className="text-sm text-white/80">Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="jane@email.com"
                  required
                />
              </label>
              <label className="text-sm text-white/80">Message
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Your message..."
                  required
                />
              </label>
              <button
                className="mt-2 inline-flex justify-center px-6 py-3 rounded-full bg-[#D4AF37] text-[#3C2F2F] font-semibold hover:brightness-110 transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 shadow-lg min-h-[320px]"
          >
            <iframe
              title="map"
              className="w-full h-full min-h-[320px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086096611575!2d-122.41941568468122!3d37.77492927975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b4b2aef%3A0x7d8bb9e3a4d4d80!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
