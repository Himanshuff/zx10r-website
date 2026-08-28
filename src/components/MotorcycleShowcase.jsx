import { motion } from "framer-motion";

const specs = [
  {
    value: "998",
    unit: "CC",
    label: "ENGINE"
  },
  {
    value: "203",
    unit: "HP",
    label: "MAX POWER"
  },
  {
    value: "201",
    unit: "KG",
    label: "CURB MASS"
  },
  {
    value: "6",
    unit: "SPEED",
    label: "TRANSMISSION"
  }
];

export default function MotorcycleShowcase() {
  return (
    <section
      className="motorcycle-showcase"
      id="motorcycle"
    >

      {/* Background atmosphere */}

      <div className="showcase-glow" />

      <div className="showcase-grid" />

      <div className="showcase-container">

        {/* Section heading */}

        <motion.div
          className="showcase-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-label">
            NINJA ZX-10R
          </span>

          <h2>
            ENGINEERED
            <br />
            TO <span>DOMINATE.</span>
          </h2>

          <p>
            A race-bred machine engineered to deliver
            uncompromising performance on the road and track.
          </p>

        </motion.div>


        {/* Motorcycle */}

        <motion.div
          className="motorcycle-image-wrapper"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 60
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.25
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1]
          }}
        >

          <div className="bike-light" />

          <img
            src="/images/zx10r.jpg"
            alt="Kawasaki Ninja ZX-10R"
          />

        </motion.div>


        {/* Specifications */}

        <div className="specifications">

          {specs.map((spec, index) => (

            <motion.div
              className="spec-item"
              key={spec.label}
              initial={{
                opacity: 0,
                y: 35
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.4
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
            >

              <div className="spec-number">

                <span>
                  {spec.value}
                </span>

                <small>
                  {spec.unit}
                </small>

              </div>

              <div className="spec-label">
                {spec.label}
              </div>

            </motion.div>

          ))}

        </div>


        {/* Bottom content */}

        <motion.div
          className="showcase-bottom"
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
        >

          <div className="showcase-description">

            <span>
              PERFORMANCE DNA
            </span>

            <p>
              Born from Kawasaki's racing technology,
              the Ninja ZX-10R combines explosive
              acceleration, precise handling and
              advanced electronics into one
              uncompromising machine.
            </p>

          </div>


          <div className="showcase-buttons">

            <a
              href="#technology"
              className="showcase-button primary"
            >
              EXPLORE TECHNOLOGY
            </a>

            <a
              href="#gallery"
              className="showcase-button"
            >
              VIEW GALLERY
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}