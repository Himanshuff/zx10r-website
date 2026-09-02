import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        <a href="/" className="navbar-logo">
          <span className="logo-mark">K</span>
          <span className="logo-text">ZX-10R</span>
        </a>

        <nav className="navbar-links">
          <a href="#motorcycle">MOTORCYCLE</a>
          <a href="#performance">PERFORMANCE</a>
          <a href="#technology">TECHNOLOGY</a>
          <a href="#racing">RACING</a>
          <a href="#gallery">GALLERY</a>
        </nav>

        <div className="navbar-actions">

          <button aria-label="Search">
            <Search size={19} />
          </button>

          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={21} />
          </button>

        </div>

      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>

        <a href="#motorcycle" onClick={() => setMenuOpen(false)}>
          MOTORCYCLE
        </a>

        <a href="#performance" onClick={() => setMenuOpen(false)}>
          PERFORMANCE
        </a>

        <a href="#technology" onClick={() => setMenuOpen(false)}>
          TECHNOLOGY
        </a>

        <a href="#racing" onClick={() => setMenuOpen(false)}>
          RACING
        </a>

        <a href="#gallery" onClick={() => setMenuOpen(false)}>
          GALLERY
        </a>

      </div>
    </>
  );
}
