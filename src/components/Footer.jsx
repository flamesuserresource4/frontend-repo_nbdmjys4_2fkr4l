import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#0a1f1a]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#036635]/20 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/80"
          >
            © {new Date().getFullYear()} Aurora Coffee. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -2, scale: 1.05 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
