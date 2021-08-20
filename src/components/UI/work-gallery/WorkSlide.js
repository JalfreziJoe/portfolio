import classes from './WorkSlide.module.scss';

const WorkSlide = ({ imageSrc, title, desc, link }) => {
    return (
        <div className={classes['work-slide']}>
            <img src={imageSrc} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default WorkSlide;
