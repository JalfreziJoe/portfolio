import WorkSlide from './WorkSlide';
import classes from './WorkGallery.module.scss';

const DUMMY_DATA = [
    {
        id: 's1',
        imageSrc: '',
        title: '',
        desc: '',
        link: '',
    },
    {
        id: 's2',
        imageSrc: '',
        title: '',
        desc: '',
        link: '',
    },
    {
        id: 's3',
        imageSrc: '',
        title: '',
        desc: '',
        link: '',
    },
];

const WorkGallery = () => {
    return (
        <div className={classes['work-gallery__wrapper']}>
            {DUMMY_DATA.map(item => (
                <WorkSlide
                    key={item.id}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    desc={item.desc}
                    link={item.link}
                />
            ))}
        </div>
    );
};

export default WorkGallery;
