import classes from './Gallery.module.scss';
import GallerySlide from './GallerySlide';

const Gallery = () => {
    const images = require.context('../../../images/', false);
    return (
        <div className={classes['gallery-container']}>
            <GallerySlide
                title="Max Factor"
                desc="Multi-product campaign with parallax effect"
                imageSrc={images('./highlight-slide0.jpg').default}
            />
        </div>
    );
};

export default Gallery;
