import { motion } from 'framer-motion';

export default function AnimatedText({ text, className = '' }) {
  const letters = Array.from(text);
  return (
    <h2 className={`font-semibold tracking-tight ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03, duration: 0.4 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
}
