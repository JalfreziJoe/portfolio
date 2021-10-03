import classes from './GallerySlide.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const variants = {
    enter: direction => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: direction => {
        return {
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            zIndex: 0,
        };
    },
};

const images = [
    require('../../../images/highlight-slide0.jpg'),
    require('../../../images/highlight-slide1.jpg'),
];

const wrap = (first, last, current) => {
    const range = last - first;
    return ((((current - first) % range) + range) % range) + first;
};

const GallerySlide = ({ title, desc, imageSrc }) => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const imageIndex = wrap(0, images.length, page);
    const paginate = newDirection => {
        setPage(page + newDirection);
        setDirection(newDirection);
    };
    return (
        <div className={classes['gallery-slide']}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                            opacity: { duration: 0.2 },
                        },
                    }}
                    onClick={() => paginate(1)}
                />
            </AnimatePresence>
            <img src={imageSrc} alt={title} />
            {/* <div className={classes['top-band']}>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div> */}
        </div>
    );
};

export default GallerySlide;
