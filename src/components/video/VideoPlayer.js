import ReactPlayer from 'react-player';
import classes from './VideoPlayer.module.scss';
const VideoPlayer = ({ url }) => {
    return (
        <div className={classes['player-wrapper']}>
            <ReactPlayer
                className={classes['react-player']}
                url={url}
                width="100%"
                height="100%"
                controls
            />
        </div>
    );
};

export default VideoPlayer;
