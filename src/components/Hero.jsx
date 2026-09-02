import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-background" />

      <div className="hero-overlay" />

      <div className="hero-content">

        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KAWASAKI NINJA ZX-10R
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          READY
          <br />
          TO RACE<span>.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
        >
          Born from racing.
          <br />
          Engineered for the road.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55
          }}
        >
          <a
            href="#motorcycle"
            className="hero-button hero-button-primary"
          >
            EXPLORE ZX-10R
          </a>

          <a
            href="#technology"
            className="hero-button"
          >
            DISCOVER TECHNOLOGY
          </a>
        </motion.div>

      </div>

      <div className="hero-scroll">

        <span>SCROLL TO EXPLORE</span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >
          <ArrowDown size={17} />
        </motion.div>

      </div>

    </section>
  );
}