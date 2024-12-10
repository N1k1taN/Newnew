"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PanelRech = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="panelrech"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="textbys">
        <div className="ACDS">
          <h3 className='font-quote'>“Кожен наш клієнт для нас є побратимом 
на юридичному фронті, за якого ми будемо 
битись до кінця використовуючи всі можливі методи правової боротьби.“</h3>

        </div>
      </div>

      <div className="Ownerb"></div>
      <div className='ownername font-text2'>
                  <p>Ярослав Науменко</p>
          <p>Засновник NLAW Company</p>
      </div>
    </motion.div>
  );
};

export default PanelRech;