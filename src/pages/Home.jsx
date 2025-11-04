import { motion } from 'framer-motion';
import Coffee3DModel from '../components/Coffee3DModel';
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a1f1a] text-white">
      {/* Decorative floating beans */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-4 bg-[#3C2F2F] rounded-full rotate-45 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 6}s ease-in-out ${Math.random() * 4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Hero 3D */}
      <div className="relative">
        <Coffee3DModel sceneUrl="https://prod.spline.design/Jw2HjK7kU1xY4e5W/scene.splinecode" />
        {/* Steam effect */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[20%] w-24 h-32 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/40 blur-xl animate-pulse rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 pb-24 text-center">
        <AnimatedText
          text="Brewed with Passion, Served with Love"
          className="text-3xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFF3E0] via-white to-[#D4AF37]"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white/80 max-w-2xl mx-auto"
        >
          A luxurious coffee experience with immersive 3D visuals, silky animations, and a refined palette inspired by the classics.
        </motion.p>
        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="inline-flex mt-10 px-8 py-3 rounded-full bg-[#D4AF37] text-[#3C2F2F] font-semibold shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.45)]"
        >
          Explore Menu
        </motion.a>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
      `}</style>
    </section>
  );
}
