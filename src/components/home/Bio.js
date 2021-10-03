import classes from './Bio.module.scss';
import Title from '../UI/Title';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BrandsMarquee from '../UI/brands-marquee/BrandsMarquee';

const Bio = () => {
    const headline = useRef();
    const subline = useRef();
    const boldFont = useRef();

    useEffect(() => {
        gsap.to([headline.current, subline.current], {
            // repeat: -1,
            // yoyo: true,
            color: '#705475',
            duration: 5,
            stagger: 0.3,
        });
    }, []);
    return (
        <div className={classes.bio__wrapper}>
            <div className={classes.title}>
                <Title titleBackgroundClass="title-background__bio" titleText="Bio" />
            </div>
            <div className={classes.header}>
                <h2 ref={headline}>
                    Web developer with over{' '}
                    <span className={classes.bolder} ref={boldFont}>
                        10 years
                    </span>{' '}
                    professional experience.
                </h2>
                <h3 ref={subline}>Coding &amp; design with UX at its heart.</h3>
            </div>
            <div className={`${classes.para1} ${classes['bio-text']}`}>
                <h3>Who</h3>
                <p>I have worked prominently in the advertisting industry on many brands.</p>
                <BrandsMarquee />
            </div>
            <div className={`${classes.para2} ${classes['bio-text']}`}>
                <h3>What</h3>
                <p>
                    I have produced various web works. For advertisting, rich media banners have
                    been my bread & butter. Ranging from simple in-page units to expandables,
                    full-width responsive and takeovers.
                </p>
                <p>
                    Other works include simple websites, HTML emails, website app widgets and (old
                    school) Flash apps.
                </p>
            </div>
        </div>
    );
};

export default Bio;
