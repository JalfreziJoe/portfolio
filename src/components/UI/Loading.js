import { motion } from 'framer-motion';
const Loading = () => {
    return (
        <motion.div
            style={{ backgroundColor: '#fefefe', width: '100vw', position: 'absolute', zIndex: 10 }}
            initial={{ height: '0vh' }}
            animate={{ height: '100vh' }}
            exit={{ height: '0vh' }}
        ></motion.div>
    );
};

export default Loading;
