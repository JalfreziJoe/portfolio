import styles from './Home.module.css';

import Hero from '../components/home/Hero';
import Bio from '../components/home/Bio';
import Skills from '../components/home/Skills';
import Highlight from '../components/home/Highlight';

const Home = () => {
    return (
        <div className={styles['home-container']}>
            <Hero />
            <Bio />
            <Skills />
            <Highlight />
        </div>
    );
};

export default Home;
