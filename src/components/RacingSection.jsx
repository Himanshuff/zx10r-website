import { motion } from "framer-motion";

export default function RacingSection() {
  return (
    <section className="racing-section" id="racing">

      <div className="racing-container">

        {/* LEFT SIDE */}
        <motion.div
          className="racing-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-label">
            RACING DNA
          </span>

          <h2>
            BORN
            <br />
            TO <span>RACE.</span>
          </h2>

          <p>
            The Ninja ZX-10R carries the spirit of
            Kawasaki racing technology onto the road.
            Developed with lessons learned from
            competition, every detail is focused on
            speed, control and precision.
          </p>

          <div className="racing-stats">

            <div>
              <strong>998</strong>
              <span>CC ENGINE</span>
            </div>

            <div>
              <strong>203</strong>
              <span>HORSEPOWER</span>
            </div>

            <div>
              <strong>6</strong>
              <span>SPEED</span>
            </div>

          </div>

          <button className="racing-button">
            EXPLORE RACING
          </button>

        </motion.div>


        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="racing-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <img
            src="/images/zx10r-track.jpg"
            alt="Kawasaki Ninja ZX-10R racing on track"
          />

          <div className="racing-overlay">
            <span>ZX-10R</span>
            <span>RACING / 01</span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}