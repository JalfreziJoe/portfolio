import { useParams, Link } from 'react-router-dom';
import useDb from '../hooks/use-db';
import { useEffect, useState } from 'react';
import classes from './WorkDetail.module.scss';
import DetailGallery from '../components/UI/detail-gallery/DetailGallery';

const WorkDetail = () => {
    const { workId } = useParams();
    const [workDetailData, setWorkDetailData] = useState();
    const [isLoading, error, requestData] = useDb();

    useEffect(() => {
        // const workDetailData = []
        const transformData = data => {
            setWorkDetailData({ ...data });
            document.title = data.title + ' - Joe Noordally Portfolio';
            window.scrollTo(0, 0);
        };
        requestData(
            {
                url: `https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/worksdetail/${workId}.json`,
            },
            transformData
        );
    }, [requestData, workId]);

    let content = <div className={`${classes.container__loading} ${classes.container}`}></div>;

    if (!isLoading && !error && workDetailData != null) {
        console.log({ workDetailData });
        const {
            heroImage,
            title,
            subtitle,
            introText,
            para1,
            para2,
            media,
            mediaCss,
            mediaType,
            links,
            linksText,
        } = workDetailData;
        console.log({ linksText });
        content = (
            <div className={classes.container}>
                <section className={classes['bread-crumb']}>
                    <Link to="/work">Selected works</Link> > {workId}
                </section>
                <header>
                    <div className={classes['header-texts']}>
                        <h2>{title}</h2>
                        <h4>{subtitle}</h4>
                        <p>{introText}</p>
                    </div>
                    <div className={classes['header-image']}>
                        <img src={`/media/${heroImage}`} alt={title} />
                    </div>
                </header>
                <section className={classes['main-texts']}>
                    <div>{para1.length <= 50 ? <h5>{para1}</h5> : <p>{para1}</p>}</div>
                    <div>
                        <p>{para2}</p>
                    </div>
                </section>
                <section className={classes['image-gallery']}>
                    <DetailGallery media={media} mediaType={mediaType} mediaCss={mediaCss} />
                </section>
                {links && (
                    <section className={classes.links}>
                        {links.map((link, index) => (
                            <p key={`link${index}`}>
                                <a href={link} target="_blank" rel="noreferrer">
                                    {linksText[index]}
                                </a>
                            </p>
                        ))}
                    </section>
                )}
            </div>
        );
    }

    return content;
};

export default WorkDetail;
