import ReactDOM from 'react-dom';
import { useRef, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './MobileMenuOverlay.module.scss';
import { useState } from 'react';

const Overlay = ({ exitMenu }) => {
    return (
        <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.overlay}
            onClick={exitMenu}
        ></motion.div>
    );
};

const SlideOutArea = ({ children, refHandler }) => {
    return (
        <motion.div
            key="menu"
            initial={{ opacity: 0, right: '-180px' }}
            animate={{ opacity: 1, right: 0 }}
            exit={{ right: '-180px' }}
            className={`${classes.slideOutArea}`}
        >
            {children}
        </motion.div>
    );
};

const MobileMenuOverlay = props => {
    const slideOutAreaRef = useRef();
    const [isVisible, setIsVisible] = useState(true);

    useLayoutEffect(() => {
        //setTimeout(slideOutAreaRef.current.classList.add(classes['slide-in']), 1000);
    }, []);
    const exitMenuHandler = () => {
        // console.log(slideOutAreaRef.current);
        // slideOutAreaRef.current.classList.remove(classes['slide-in']);
        // slideOutAreaRef.current.classList.add(classes['slide-out']);
        // setTimeout(props.exitMenu, 300);
        setIsVisible(false);
        props.exitMenu();
    };
    return (
        <>
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {isVisible && <Overlay exitMenu={exitMenuHandler} />}
                </AnimatePresence>,
                document.getElementById('overlay')
            )}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {isVisible && (
                        <SlideOutArea children={props.children} refHandler={slideOutAreaRef} />
                    )}
                </AnimatePresence>,
                document.getElementById('mobileMenu')
            )}
        </>
    );
};

export default MobileMenuOverlay;
