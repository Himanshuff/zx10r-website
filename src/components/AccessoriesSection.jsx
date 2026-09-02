import { motion } from "framer-motion";

const accessories = [
  {
    number: "01",
    title: "RACING GEAR",
    description: "Track-focused equipment engineered for performance.",
    image: "/images/accessory-gear.jpg",
  },
  {
    number: "02",
    title: "PERFORMANCE",
    description: "Performance components developed for the ZX-10R.",
    image: "/images/accessory-performance.jpg",
  },
  {
    number: "03",
    title: "HELMETS",
    description: "Premium protection built for high-speed riding.",
    image: "/images/accessory-helmet.jpg",
  },
  {
    number: "04",
    title: "EXHAUST",
    description: "Performance exhaust systems with race-inspired character.",
    image: "/images/accessory-exhaust.jpg",
  },
];

export default function AccessoriesSection() {
  return (
    <section className="accessories-section" id="accessories">

      <div className="accessories-header">

        <div>
          <span className="section-label">
            ZX-10R ACCESSORIES
          </span>

          <h2>
            RIDE.
            <br />
            <span>UPGRADE.</span>
          </h2>
        </div>

        <p>
          Complete your ZX-10R experience with
          performance-focused equipment and
          premium riding essentials.
        </p>

      </div>


      <div className="accessories-grid">

        {accessories.map((item, index) => (

          <motion.article
            className="accessory-card"
            key={item.number}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="accessory-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="accessory-number">
                {item.number}
              </div>

              <div className="accessory-arrow">
                ↗
              </div>

            </div>


            <div className="accessory-info">

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <button>
                EXPLORE
              </button>

            </div>

          </motion.article>

        ))}

      </div>


      <div className="accessories-footer">

        <span>
          PERFORMANCE / EQUIPMENT / ENGINEERING
        </span>

        <span>
          ZX-10R
        </span>

      </div>

    </section>
  );
}