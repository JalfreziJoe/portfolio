import classes from './GallerySlide.module.scss';

const GallerySlide = ({ title, desc, imageSrc }) => {
    return (
        <div className={classes['gallery-slide']}>
            <img src={imageSrc} alt={title} />
            <div className={classes['top-band']}>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default GallerySlide;
