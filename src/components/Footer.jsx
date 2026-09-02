import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer-section">

            {/* FINAL CTA */}

            <div className="footer-cta">

                <div className="footer-cta-image">
                    <img
                        src="/images/zx10r-track.jpg"
                        alt="Ninja ZX-10R"
                    />
                </div>

                <div className="footer-cta-overlay" />

                <motion.div
                    className="footer-cta-content"
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >

                    <span className="section-label">
                        NINJA ZX-10R
                    </span>

                    <h2>
                        READY
                        <br />
                        <span>TO RIDE?</span>
                    </h2>

                    <p>
                        Experience the machine engineered
                        for riders who demand more.
                    </p>

                    <button className="footer-main-button">
                        EXPLORE ZX-10R
                        <ArrowUpRight size={18} />
                    </button>

                </motion.div>

            </div>


            {/* FOOTER CONTENT */}

            <div className="footer-content">

                <div className="footer-brand">

                    <div className="footer-logo">
                        NINJA
                        <span>ZX-10R</span>
                    </div>

                    <p>
                        ENGINEERED FOR THE EDGE.
                    </p>

                </div>


                {/* LINKS */}

                <div className="footer-links">

                    <div className="footer-column">

                        <span className="footer-heading">
                            EXPLORE
                        </span>

                        <a href="#motorcycles">
                            Motorcycles
                        </a>

                        <a href="#technology">
                            Technology
                        </a>

                        <a href="#racing">
                            Racing
                        </a>

                        <a href="#gallery">
                            Gallery
                        </a>

                    </div>


                    <div className="footer-column">

                        <span className="footer-heading">
                            SUPPORT
                        </span>

                        <a href="#">
                            Contact
                        </a>

                        <a href="#">
                            Dealers
                        </a>

                        <a href="#">
                            Service
                        </a>

                        <a href="#">
                            Accessories
                        </a>

                    </div>


                    <div className="footer-socials">

                        <a href="#" aria-label="Instagram">
                            IG
                        </a>

                        <a href="#" aria-label="YouTube">
                            YT
                        </a>

                        <a href="#" aria-label="Facebook">
                            f
                        </a>

                    </div>
                </div>





            </div>


            {/* BOTTOM */}

            <div className="footer-bottom">

                <span>
                    © 2026 ZX-10R PROJECT
                </span>

                <span>
                    PERFORMANCE / ENGINEERING / RACING
                </span>

                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                >
                    BACK TO TOP ↑
                </button>

            </div>

        </footer>
    );
}