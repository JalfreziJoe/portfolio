import styles from './Home.module.css';

import Hero from '../components/home/Hero';

const Home = () => {
    return (
        <div className={styles['home-container']}>
            <Hero />
            <p>Home</p>
        </div>
    );
};

export default Home;
