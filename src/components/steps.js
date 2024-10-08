"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Step = ({ number, text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="step"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="stuns">{number}</div>
      <div className="steptext">{text}</div>
    </motion.div>
  );
};

const Steps = () => {
  return (
    <div className="steps">
      <h2>Як ми працюємо</h2>
      <Step number="1" text="Увійдемо на будь-якому етапі справи." />
      <Step number="2" text="Обговоримо справу з Вами, проаналізуємо перспективи та ризики" />
      <Step number="3" text="Досконально вивчимо суть Вашої ситуації, врахуємо всі наявні обставини" />
      <Step number="4" text="Надамо стратегію, запропонуємо шляхи вирішення справи та план дій" />
      <Step number="5" text="Здійснюємо правовий захист та відстоювання Ваших інтересів." />
    </div>
  );
};

export default Steps;