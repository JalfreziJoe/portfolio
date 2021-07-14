import Title from '../UI/Title';
import Gallery from '../UI/gallery/Gallery';
import classes from './Highlight.module.scss';

const Highlight = () => {
    return (
        <div className={classes.highlight__wrapper}>
            <Title titleText="Highlight" titleBackgroundClass="title-background__highlight" />
            <div className={classes.gallery__wrapper}>
                <Gallery />
            </div>
        </div>
    );
};
export default Highlight;
