import classes from './Gallery.module.scss';
import { useRef, useLayoutEffect, useCallback, useState, useEffect } from 'react';
import useDb from '../../../hooks/use-db';
import { motion, AnimatePresence } from 'framer-motion';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useHistory } from 'react-router-dom';

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

const wrap = (first, last, current) => {
    const range = last - first;
    return ((((current - first) % range) + range) % range) + first;
};

const Gallery = () => {
    const history = useHistory();
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [images, setImages] = useState([]);
    const imageIndex = wrap(0, images.length, page);
    const paginate = useCallback(
        newDirection => {
            setPage(page + newDirection);
            setDirection(newDirection);
        },
        [page]
    );

    const galleryClickHandler = url => {
        history.push(`/work/${url}`);
    };

    const containerRef = useRef();
    const imageRef = useRef();

    const [isLoading, error, requestData] = useDb();

    let content = <div></div>;

    useEffect(() => {
        const transformBrandData = data => {
            console.log(data);
            // for (const key in data) {
            //     loadedData.push({ id: key, name: data[key].name, img: data[key].img });
            // }
            setImages(data);
        };
        requestData(
            {
                url: 'https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/highlights.json',
            },
            transformBrandData
        );
    }, [requestData]);

    useLayoutEffect(() => {
        let timer = setTimeout(() => {
            paginate(1);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [paginate]);

    if (!isLoading && !error && images.length !== 0) {
        content = (
            <div className={classes['gallery-slide']} ref={containerRef}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        className={classes['gallery-image-container']}
                        ref={imageRef}
                        key={page}
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
                        onClick={() => galleryClickHandler(images[imageIndex].link)}
                    >
                        <img
                            className={classes['gallery-image']}
                            alt="gallery"
                            src={`/images/${images[imageIndex].galleryImage}`}
                        />
                        <img
                            className={classes['gallery-image-mobile']}
                            alt="gallery mobile"
                            src={`/images/${images[imageIndex].galleryMobileImage}`}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className={classes.prev} onClick={() => paginate(-1)}>
                    <NavigateBeforeIcon />
                </div>
                <div className={classes.next} onClick={() => paginate(1)}>
                    <NavigateNextIcon />
                </div>
            </div>
        );
    }

    return <div className={classes['gallery-container']}>{content}</div>;
};

export default Gallery;
