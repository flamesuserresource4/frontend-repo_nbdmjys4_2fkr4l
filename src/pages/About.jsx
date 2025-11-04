import { motion } from 'framer-motion';

const timeline = [
  { year: '1971', text: 'Where our story began — a humble roastery with a dream.' },
  { year: '1995', text: 'Innovation met tradition, crafting richer experiences.' },
  { year: '2010', text: 'Global horizons with community at the heart.' },
  { year: 'Today', text: 'Immersive, sustainable, and crafted with love.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#0f2d25] to-[#0a1f1a] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_20%_20%,#036635_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#3C2F2F_0%,transparent_40%)] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-[#FFF3E0]"
        >
          About
        </motion.h3>
        <p className="mt-2 text-white/70 max-w-2xl">A cinematic journey through our heritage and craft.</p>

        <div className="mt-12 space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white/80">{t.year}</div>
                <p className="text-white/80">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((n) => (
            <motion.div
              key={n}
              whileHover={{ rotateX: 8, rotateY: -8, y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 14 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#036635]/40 mb-4" />
              <h4 className="text-xl font-semibold">Team Member {n}</h4>
              <p className="text-white/70 mt-1">Crafting joy, one cup at a time.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
