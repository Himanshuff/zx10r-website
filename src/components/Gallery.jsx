import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-header">

        <div>
          <span className="section-label">
            ZX-10R GALLERY
          </span>

          <h2>
            BUILT TO BE
            <br />
            <span>SEEN.</span>
          </h2>
        </div>

        <p>
          From the racetrack to the street,
          experience the ZX-10R from every angle.
        </p>

      </div>


      <div className="gallery-grid">

        {/* LARGE TRACK IMAGE */}

        <motion.div
          className="gallery-item gallery-large"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
        >

          <img
            src="/images/zx10r-track.jpg"
            alt="ZX-10R on racetrack"
          />

          <div className="gallery-overlay">

            <span>01</span>

            <h3>
              BORN
              <br />
              FOR THE TRACK
            </h3>

            <p>
              Racing DNA engineered into every line.
            </p>

          </div>

        </motion.div>


        {/* STREET IMAGE */}

        <motion.div
          className="gallery-item"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >

          <img
            src="/images/zx10r-street.jpg"
            alt="ZX-10R street"
          />

          <div className="gallery-overlay">

            <span>02</span>

            <h3>
              NIGHT
              <br />
              MOVEMENT
            </h3>

          </div>

        </motion.div>


        {/* PERFORMANCE IMAGE */}

        <motion.div
          className="gallery-item"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >

          <img
            src="/images/zx10r-performance.jpg"
            alt="ZX-10R performance"
          />

          <div className="gallery-overlay">

            <span>03</span>

            <h3>
              PURE
              <br />
              PERFORMANCE
            </h3>

          </div>

        </motion.div>

      </div>


      <div className="gallery-footer">

        <span>
          ZX-10R / VISUAL EXPERIENCE
        </span>

        <span>
          PERFORMANCE WITHOUT COMPROMISE
        </span>

      </div>

    </section>
  );
}