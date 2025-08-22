// src/components/ScrollAnimation.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const boxVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;