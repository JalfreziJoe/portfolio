import classes from './Title.module.scss';

const Title = ({ titleBackgroundClass = null, titleText }) => {
    return (
        <div
            className={`${classes.title} ${
                titleBackgroundClass !== null ? classes[titleBackgroundClass] : ''
            }`}
        >
            <div className={classes['title-text']}>{titleText}</div>
        </div>
    );
};

export default Title;
