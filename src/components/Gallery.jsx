import { motion } from "framer-motion";

const galleryItems = [
  {
    id: "01",
    title: "THE MACHINE",
    category: "ZX-10R / DESIGN",
    image: "/images/zx10r.jpg",
    size: "large",
  },
  {
    id: "02",
    title: "TRACK FOCUSED",
    category: "ZX-10R / RACING",
    image: "/images/zx10r-track.jpg",
    size: "small",
  },
  {
    id: "03",
    title: "PURE PERFORMANCE",
    category: "ZX-10R / ENGINEERING",
    image: "/images/zx10r-performance.jpg",
    size: "small",
  },
  {
    id: "04",
    title: "BUILT FOR THE STREET",
    category: "ZX-10R / ROAD",
    image: "/images/zx10r-street.jpg",
    size: "wide",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-container">

        {/* HEADER */}

        <motion.div
          className="gallery-header"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div>

            <span className="section-label">
              ZX-10R / VISUAL ARCHIVE
            </span>

            <h2>
              SEE THE
              <br />
              <span>DIFFERENCE.</span>
            </h2>

          </div>

          <p>
            Every angle tells a story.
            Explore the design, aggression and
            engineering behind the Ninja ZX-10R.
          </p>

        </motion.div>


        {/* GALLERY */}

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <motion.article
              key={item.id}
              className={`gallery-item gallery-${item.size}`}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
            >

              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay" />

                <span className="gallery-number">
                  {item.id}
                </span>

                <span className="gallery-category">
                  {item.category}
                </span>

                <div className="gallery-caption">

                  <h3>
                    {item.title}
                  </h3>

                  <span>
                    VIEW →
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* FOOTER */}

        <div className="gallery-footer">

          <span>
            NINJA ZX-10R
          </span>

          <span>
            PERFORMANCE / DESIGN / RACING
          </span>

        </div>

      </div>

    </section>
  );
}