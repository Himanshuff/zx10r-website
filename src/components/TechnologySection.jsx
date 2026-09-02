import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { technologyPoints } from "../data/technology";

export default function TechnologySection() {
  const [activePoint, setActivePoint] = useState(
    technologyPoints[0]
  );

  return (
    <section
      className="technology-section"
      id="technology"
    >

      <div className="technology-container">

        {/* HEADER */}

        <motion.div
          className="technology-header"
          initial={{
            opacity: 0,
            y: 40
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
            duration: 0.8
          }}
        >

          <div>

            <span className="section-label">
              ZX-10R TECHNOLOGY
            </span>

            <h2>
              ENGINEERED
              <br />
              FOR THE <span>EDGE.</span>
            </h2>

          </div>

          <p>
            Every component has a purpose.
            Explore the technology behind the
            Ninja ZX-10R.
          </p>

        </motion.div>


        {/* INTERACTIVE AREA */}

        <div className="technology-stage">

          {/* GRID */}

          <div className="technology-grid" />


          {/* MOTORCYCLE */}

          <motion.div
            className="technology-bike"
            initial={{
              opacity: 0,
              scale: 0.92
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.25
            }}
            transition={{
              duration: 1
            }}
          >

            <img
              src="/images/zx10r.jpg"
              alt="ZX-10R technology"
            />

          </motion.div>


          {/* HOTSPOTS */}

          <div className="technology-hotspots">

            {technologyPoints.map((point) => (

              <button
                key={point.id}
                className={
                  activePoint.id === point.id
                    ? "technology-hotspot active"
                    : "technology-hotspot"
                }
                style={{
                  left: point.position.left,
                  top: point.position.top
                }}
                onClick={() => setActivePoint(point)}
                aria-label={point.title}
              >

                <span className="hotspot-pulse" />

                <span className="hotspot-core">
                  <Plus size={14} />
                </span>

                <span className="hotspot-number">
                  {point.number}
                </span>

              </button>

            ))}

          </div>


          {/* INFORMATION PANEL */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activePoint.id}
              className="technology-info"

              initial={{
                opacity: 0,
                x: 30
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              exit={{
                opacity: 0,
                x: -20
              }}

              transition={{
                duration: 0.4
              }}
            >

              <span className="technology-number">
                {activePoint.number}
              </span>

              <span className="technology-category">
                {activePoint.short}
              </span>

              <h3>
                {activePoint.title}
              </h3>

              <p>
                {activePoint.description}
              </p>

              <div className="technology-line" />

              <span className="technology-instruction">
                SELECT ANOTHER COMPONENT
              </span>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* BOTTOM LINE */}

        <div className="technology-footer">

          <span>
            PERFORMANCE WITHOUT COMPROMISE
          </span>

          <span>
            ZX-10R / ENGINEERING / RACING DNA
          </span>

        </div>

      </div>

    </section>
  );
}