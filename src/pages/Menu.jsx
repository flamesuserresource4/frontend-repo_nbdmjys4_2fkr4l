import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { code: 'A1', price: 4.5 },
  { code: 'A2', price: 5.0 },
  { code: 'B1', price: 5.5 },
  { code: 'B2', price: 6.0 },
  { code: 'C1', price: 4.8 },
  { code: 'C2', price: 5.8 },
];

export default function Menu() {
  const [active, setActive] = useState(null);

  return (
    <section id="menu" className="relative py-24 bg-gradient-to-b from-[#0a1f1a] to-[#0f2d25] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3C2F2F]/30 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-[#FFF3E0]"
        >
          Menu
        </motion.h3>
        <p className="mt-2 text-white/70">Swipe through our coded specialties.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.button
              key={item.code}
              whileHover={{ y: -6 }}
              onClick={() => setActive(item)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 text-left shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#036635]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-start justify-between">
                <span className="text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white/80">
                  {item.code}
                </span>
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 25 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-b from-[#3C2F2F] to-[#1f1717] shadow-inner grid place-items-center"
                >
                  <div className="w-6 h-6 rounded-b-xl border-2 border-[#FFF3E0] border-t-transparent" />
                </motion.div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-white/70">Premium Roast</span>
                <span className="text-[#D4AF37] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">${item.price.toFixed(2)}</span>
              </div>
              <div className="mt-4">
                <span className="inline-flex px-4 py-2 rounded-full bg-[#D4AF37]/90 text-[#3C2F2F] font-semibold shadow hover:bg-[#D4AF37] transition-colors">Order Now</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 16 }}
              className="w-full max-w-md rounded-2xl bg-[#0f2d25] border border-white/10 p-6 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-2xl font-semibold">Order {active.code}</h4>
              <p className="mt-2 text-white/70">A signature coded selection brewed to perfection.</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[#D4AF37] font-semibold text-xl">${active.price.toFixed(2)}</span>
                <button
                  onClick={() => {
                    alert(`Order placed for ${active.code}!`);
                    setActive(null);
                  }}
                  className="px-5 py-2 rounded-full bg-[#D4AF37] text-[#3C2F2F] font-semibold"
                >
                  Confirm Order
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
