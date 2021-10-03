import { useRef, useEffect } from 'react';
import classes from './Hero.module.scss';
import { gsap } from 'gsap';

//import scrollDownIcon from '../../images/scroll-down.png';
//import hoverEffect from 'hover-effect';
//import blurImage from '../../images/hero-image-blur.jpg';
//import mainImage from '../../images/hero-image-main.jpg';
//import disImage from '../../images/height-map.png';

const Hero = ({ heroType }) => {
    const images = require.context('../../images/', false);
    let mainImage, scrollDownIcon, githubIcon, linkedinIcon;
    const t1 = useRef();
    const heroImage = useRef();
    const heroFrame = useRef();
    const heroScroll = useRef();
    const q = gsap.utils.selector(heroFrame);
    const heroIcon0 = useRef();
    const heroIcon1 = useRef();

    if (heroType === 'hero') {
        mainImage = classes['home-image'];
        scrollDownIcon = images('./scroll-down.png').default;
        //heroTexts.current = [q('h3'), q('h2')];
    } else {
        mainImage = classes['about-image'];
        //heroTexts.current = [q('h3'), q('h2'), q('a')];
        scrollDownIcon = images('./scroll-down-blue.png').default;
        githubIcon = '/images/github-icon.png';
        linkedinIcon = '/images/linkedin-icon.png';
    }

    //console.log(heroTexts.current);

    useEffect(() => {
        t1.current = gsap
            .timeline()
            .fromTo(
                heroImage.current,
                {
                    filter: 'blur(50px)',
                },
                {
                    duration: 1.5,
                    filter: 'blur(0px)',
                    ease: 'power3.out',
                }
            )
            .fromTo(
                heroImage.current,
                { scale: 2 },
                { scale: 1, duration: 1.7, ease: 'power2.inOut' },
                0
            )
            .fromTo(
                heroFrame.current,
                {
                    autoAlpha: 0,
                    xPercent: 50,
                    rotate: -30,
                },
                {
                    autoAlpha: 1,
                    xPercent: 0,
                    rotate: 0,
                    ease: 'back.out',
                    duration: 0.6,
                },
                0.5
            )
            .to(
                [q('h3'), q('h2')],
                {
                    autoAlpha: 1,
                    ease: 'expo.out',
                    duration: 0.5,
                    stagger: 0.3,
                },
                0.7
            )
            .fromTo(
                heroScroll.current,
                {
                    filter: 'blur(5px)',
                    y: -20,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 0.4,
                    ease: 'back.out',
                }
            );
        if (heroType !== 'hero') {
            gsap.to([heroIcon0.current, heroIcon1.current], {
                autoAlpha: 1,
                ease: 'expo.out',
                duration: 0.5,
                stagger: 0.3,
                delay: 1.2,
            });
        }
    }, [q, heroType]);

    return (
        <div className={classes['hero__wrapper']}>
            <div className={classes['hero-image-wrapper']}>
                <div className={`${classes['hero-image']} ${mainImage}`} ref={heroImage}></div>
            </div>
            {heroType === 'hero' ? (
                <div className={classes['hero-frame']} ref={heroFrame}>
                    <h3>Hi I'm</h3>
                    <h2>Joe</h2>
                    <h3>Web developer</h3>
                </div>
            ) : (
                <div
                    ref={heroFrame}
                    className={`${classes['hero-frame']} ${classes['hero-frame__blue']}`}
                >
                    <h3>Get to know</h3>
                    <h2>Me</h2>
                    <div className={classes['hero-icons']}>
                        <a
                            href="https://github.com/JalfreziJoe"
                            rel="noreferrer"
                            target="_blank"
                            ref={heroIcon0}
                        >
                            <img src={githubIcon} alt="goto my github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joenoordally/"
                            rel="noreferrer"
                            target="_blank"
                            ref={heroIcon1}
                        >
                            <img src={linkedinIcon} alt="goto my linkedin" />
                        </a>
                    </div>
                </div>
            )}
            <div className={classes['scroll-down-icon']} ref={heroScroll}>
                <img src={scrollDownIcon} alt="scroll down icon" />
            </div>
        </div>
    );
};

export default Hero;
