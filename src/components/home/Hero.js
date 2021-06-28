import styles from './Hero.module.scss';
import lottieAnimation from '../../images/desktop-v2.json';

import { Player } from '@lottiefiles/react-lottie-player';
// import '@dotlottie/player-component';
import { useRef, useEffect } from 'react';

import { DotLottiePlayer } from '@dotlottie/player-component';

const Hero = () => {
    const playerRef = useRef();
    // useEffect(() => {
    //     console.log(playerRef.current.addEventListener);
    //     playerRef.current.addEventListener('ready', () => {
    //         console.log('load');
    //         playerRef.current.play();
    //     });
    //     playerRef.current.load(lottieAnimation);
    // }, []);
    // playerRef.current.play();
    // playerRef.current.addEventListener('load', () => {
    //     console.log('loaded');
    // });
    const playerEventHandler = event => {
        switch (event) {
            default:
                return;
            case 'load':
                playerRef.current.play();
                break;
            case 'error':
                console.log(`Error with the animation file: ${event}`);
                break;
        }
    };

    return (
        <div className={styles.hero__wrapper}>
            {/* <dotlottie-player
                // src={lottieAnimation}
                ref={playerRef}
                style={{ width: '100%', height: '100vh' }}
            /> */}
            <Player
                onEvent={playerEventHandler}
                autoplay={false}
                loop={false}
                ref={playerRef}
                src={lottieAnimation}
                style={{ width: '100%', height: '100vh' }}
            />
        </div>
    );
};

export default Hero;
