"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Step = ({ number, text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="step"
      ref={ref}
      initial="hidden"
      animate={controls}
      data-state={inView ? "visible" : "hidden"} // Добавление data-state
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <motion.div
        className="stuns"
        style={{ backgroundColor: "#f0f0f0" }}
        animate={
          inView
            ? { color: "#FFFFFF", backgroundColor: "#E92C0C", transition: { duration: 2 } }
            : {}
        }
      >
        {number}
      </motion.div>
      <div className="steptext">{text}</div>
    </motion.div>
  );
};

const Steps = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="Steppp"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
      }}
    >
      <h2 className="font-h1">ЯК МИ ПРАЦЮЄМО</h2>
      <div className="steps">
        <div className="container">
          <motion.div
            className="step font-numbers"
            style={{ backgroundColor: "#f0f0f0" }}
            whileInView={{
              color:"white",
              backgroundColor: "#E92C0C",
              transition: { duration: 2 },
            }}
            data-state={inView ? "visible" : "hidden"} // Добавление data-state
          >
            1
          </motion.div>
          <motion.div
            className="step font-numbers"
            style={{ backgroundColor: "#f0f0f0" }}
            whileInView={{
              color:"white",
              backgroundColor: "#E92C0C",
              transition: { duration: 2 },
            }}
            data-state={inView ? "visible" : "hidden"} // Добавление data-state
          >
            2
            
          </motion.div>
          <motion.div
            className="step font-numbers"
            style={{ backgroundColor: "#f0f0f0" }}
            whileInView={{
              color:"white",
              backgroundColor: "#E92C0C",
              transition: { duration: 2 },
            }}
            data-state={inView ? "visible" : "hidden"} // Добавление data-state
          >
            3
          </motion.div>
          <motion.div
            className="step font-numbers"
            style={{ backgroundColor: "#f0f0f0" }}
            whileInView={{
              color:"white",
              backgroundColor: "#E92C0C",
              transition: { duration: 2 },
            }}
            data-state={inView ? "visible" : "hidden"} // Добавление data-state
          >
            4
          </motion.div>
          <motion.div
            className="step font-numbers"
            style={{ backgroundColor: "#f0f0f0" }}
            whileInView={{
              color:"white",
              backgroundColor: "#E92C0C",
              transition: { duration: 2 },
            }}
            data-state={inView ? "visible" : "hidden"} // Добавление data-state
          >
            5
          </motion.div>
        </div>
        <div className="steps-text">
          <h3 className="font-h4-20px-regular">
            Обговоримо справу, проаналізуємо перспективи та ризики.
          </h3>
          <h3 className="font-h4-20px-regular">Увійдемо на будь-якому етапі справи.</h3>
          <h3 className="font-h4-20px-regular">
            Досконально вивчимо суть Вашої ситуації, врахуємо всі наявні обставини.
          </h3>
          <h3 className="font-h4-20px-regular">
            Надамо стратегію, запропонуємо шляхи вирішення справи та план дій.
          </h3>
          <h3 className="font-h4-20px-regular">
            Здійснюємо правовий захист та відстоювання Ваших інтересів.
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Steps;
