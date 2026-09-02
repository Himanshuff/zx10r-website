import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setFinished(true);
          }, 400);

          return 100;
        }

        return value + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (finished) {
    return null;
  }

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div className="loader-content">

        <div className="loader-brand">
          NINJA
        </div>

        <div className="loader-model">
          ZX-10R
        </div>

        <div className="loader-line">
          <motion.div
            className="loader-progress"
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.1,
            }}
          />
        </div>

        <div className="loader-bottom">

          <span>
            INITIALIZING PERFORMANCE
          </span>

          <span>
            {progress}%
          </span>

        </div>

      </div>

    </motion.div>
  );
}