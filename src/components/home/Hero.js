import classes from './Hero.module.scss';
import scrollDownIcon from '../../images/scroll-down.png';

const Hero = () => {
    return (
        <div className={classes['hero__wrapper']}>
            <div className={classes['scroll-down-icon']}>
                <img src={scrollDownIcon} alt="scroll down icon" />
            </div>
        </div>
    );
};

export default Hero;
