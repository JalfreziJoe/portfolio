import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero__wrapper}>
            <div>Col1</div>
            <div>Col2</div>
            <div>Col3</div>
            <div>Col4</div>
            <div>Col5</div>
        </div>
    );
};

export default Hero;
