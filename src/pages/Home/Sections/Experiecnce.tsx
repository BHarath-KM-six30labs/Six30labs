import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [count, setCount] = useState({
    platforms: 0,
    accelerators: 0,
    services: 0,
    projects: 0,
  });

  const [hasCounted, setHasCounted] = useState(false); 

  useEffect(() => {
    if (inView && !hasCounted) {
      setHasCounted(true); 

      const countUp = (target: number, key: string) => {
        let start = 0;
        const duration = 2000; 
        const stepTime = Math.abs(Math.floor(duration / target));

        const increment = () => {
          start += 1;
          setCount((prev) => ({ ...prev, [key]: start }));
          if (start < target) {
            setTimeout(increment, stepTime);
          }
        };
        increment();
      };

      countUp(4, "platforms");
      countUp(16, "accelerators");
      countUp(6, "services");
      countUp(200, "projects");
    }
  }, [inView, hasCounted]); 

  return (
    <div
      ref={ref}
      className="mt-8 flex flex-wrap justify-center items-center gap-6 mx-5"
    >
      <span className="flex items-center gap-2">
        <motion.span
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {count.platforms}
        </motion.span>
        PLATFORMS
      </span>
      <span className="border-r-2 h-8 mx-2 hidden md:block"></span>
      <span className="flex items-center gap-2">
        <motion.span
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {count.accelerators}
        </motion.span>
        ACCELERATORS
      </span>
      <span className="border-r-2 h-8 mx-2 hidden md:block"></span>
      <span className="flex items-center gap-2">
        <motion.span
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {count.services}
        </motion.span>
        SERVICES
      </span>
      <span className="border-r-2 h-8 mx-2 hidden md:block"></span>
      <span className="flex items-center gap-2">
        <motion.span
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {count.projects}+
        </motion.span>
        PROJECTS
      </span>
    </div>
  );
}

export default Experience;
