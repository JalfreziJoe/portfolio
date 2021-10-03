import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Page = ({ title, children }) => {
    useEffect(() => {
        document.title = title + ' - Joe Noordally Portfolio' || 'Joe Noordally Portfolio';
    }, [title]);

    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            key={title}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
        >
            {children}
        </motion.div>
    );
};
export default Page;
