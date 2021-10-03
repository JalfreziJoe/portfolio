import React from 'react';
import classes from './Work.module.scss';

import WorkGallery from '../components/UI/work-gallery/WorkGallery';

import Title from '../components/UI/Title';

const Work = () => {
    return (
        <div className={classes['work-container']}>
            <div className={classes.title__container}>
                <Title titleText="Selected works" titleBackgroundClass="title-background__works" />
            </div>
            <div className={classes.intro}>
                <div className={classes.intro__box}>
                    <div className={classes['content-area']}>
                        <h3>Here are some of my selected works.</h3>
                        <p>Click/tap the image to see more</p>
                        <p>
                            The ad units are designed in Photoshop, assets are optimised, exported
                            and then coded using an ad codebase.
                        </p>
                        <p>
                            All works are coded using HTML5, CSS3 and vanilla Javascript. There are
                            some bespoke JS modules in use such as a Gallery or Carousel. Animation
                            is a combination of the GSAP library and CSS3 transitions. The code is
                            compiled down to the most compatiable format for most browsers.
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.disclaimer}>
                <div className={classes.disclaimer__box}>
                    <div className={classes['content-area']}>
                        <h4>Disclaimer</h4>
                        <p>
                            Some of the works on this portfolio have been produced whilst employed
                            by Adapt Rich Media Ltd.
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.works}>
                <WorkGallery />
            </div>
        </div>
    );
};
export default React.memo(Work);
