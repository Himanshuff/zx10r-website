import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { motorcycles } from "../data/motorcycles";

export default function ModelSelector() {
  const [selectedId, setSelectedId] = useState("superbike");

  const selectedBike = motorcycles.find(
    (bike) => bike.id === selectedId
  );

  return (
    <section
      className="model-selector"
      id="performance"
    >

      <div className="model-selector-container">

        {/* Heading */}

        <motion.div
          className="model-selector-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-label">
            CHOOSE YOUR MACHINE
          </span>

          <h2>
            FIND YOUR
            <br />
            <span>EDGE.</span>
          </h2>

        </motion.div>


        {/* Model navigation */}

        <div className="model-tabs">

          {motorcycles.map((bike) => (

            <button
              key={bike.id}
              className={
                selectedId === bike.id
                  ? "model-tab active"
                  : "model-tab"
              }
              onClick={() => setSelectedId(bike.id)}
            >

              <span className="tab-number">
                0{motorcycles.indexOf(bike) + 1}
              </span>

              <span>
                {bike.category}
              </span>

            </button>

          ))}

        </div>


        {/* Main display */}

        <div className="model-display">

          <div className="model-background-glow" />

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedBike.id}
              className="model-image"
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.94
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                x: -80,
                scale: 0.94
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1]
              }}
            >

              <img
                src={selectedBike.image}
                alt={selectedBike.name}
              />

            </motion.div>

          </AnimatePresence>


          {/* Information */}

          <AnimatePresence mode="wait">

            <motion.div
              key={`${selectedBike.id}-info`}
              className="model-info"

              initial={{
                opacity: 0,
                y: 25
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: -20
              }}

              transition={{
                duration: 0.45
              }}
            >

              <span className="model-category">
                {selectedBike.category}
              </span>

              <h3>
                {selectedBike.name}
              </h3>

              <p>
                {selectedBike.description}
              </p>

              <div className="model-specs">

                <div>
                  <strong>
                    {selectedBike.specs.engine}
                  </strong>

                  <span>
                    ENGINE
                  </span>
                </div>

                <div>
                  <strong>
                    {selectedBike.specs.power}
                  </strong>

                  <span>
                    POWER
                  </span>
                </div>

                <div>
                  <strong>
                    {selectedBike.specs.weight}
                  </strong>

                  <span>
                    WEIGHT
                  </span>
                </div>

                <div>
                  <strong>
                    {selectedBike.specs.transmission}
                  </strong>

                  <span>
                    GEARBOX
                  </span>
                </div>

              </div>

              <a
                href="#technology"
                className="model-button"
              >
                EXPLORE MODEL
              </a>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}