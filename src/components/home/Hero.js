import { useRef, useEffect } from 'react';
import classes from './Hero.module.scss';
//import scrollDownIcon from '../../images/scroll-down.png';
import hoverEffect from 'hover-effect';
//import blurImage from '../../images/hero-image-blur.jpg';
//import mainImage from '../../images/hero-image-main.jpg';
import disImage from '../../images/height-map.png';

const Hero = ({ heroType }) => {
    const images = require.context('../../images/', false);
    let mainImage, blurImage, scrollDownIcon, githubIcon, linkedinIcon;

    if (heroType === 'hero') {
        mainImage = images('./hero-image-main.jpg').default;
        blurImage = images('./hero-image-blur.jpg').default;
        scrollDownIcon = images('./scroll-down.png').default;
    } else {
        mainImage = images('./about-image-main.jpg').default;
        blurImage = images('./about-image-blur.jpg').default;
        scrollDownIcon = images('./scroll-down-blue.png').default;
        githubIcon = images('./github-icon.png').default;
        linkedinIcon = images('./linkedin-icon.png').default;
    }
    const heroImage = useRef();
    //const [heroAnimation, setHeroAnimation] = useState(null);
    // let heroAnimation = useRef();
    useEffect(() => {
        const heroAnimation = new hoverEffect({
            parent: heroImage.current,
            intensity: 0.3,
            image1: blurImage,
            image2: mainImage,
            displacementImage: disImage,
            hover: false,
            angle: Math.PI / 1,
        });
        const timer = setTimeout(() => {
            heroAnimation.next();
        }, 500);

        return () => {
            clearTimeout(timer);
            //heroImage.current.removeChild(heroAnimation.renderer.domElement);
            // heroAnimation.renderer.dispose();
        };
    }, [mainImage, blurImage]);

    return (
        <div className={classes['hero__wrapper']}>
            <div className={classes['hero-image']} ref={heroImage}></div>
            {heroType === 'hero' ? (
                <div className={classes['hero-frame']}>
                    <h3>Hi I'm</h3>
                    <h2>Joe</h2>
                    <h3>Web developer</h3>
                </div>
            ) : (
                <div className={`${classes['hero-frame']} ${classes['hero-frame__blue']}`}>
                    <h3>Get to know</h3>
                    <h2>Me</h2>
                    <div className={classes['hero-icons']}>
                        <a href="https://github.com/JalfreziJoe" rel="noreferrer" target="_blank">
                            <img src={githubIcon} alt="goto my github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joenoordally/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={linkedinIcon} alt="goto my linkedin" />
                        </a>
                    </div>
                </div>
            )}
            <div className={classes['scroll-down-icon']}>
                <img src={scrollDownIcon} alt="scroll down icon" />
            </div>
        </div>
    );
};

export default Hero;
