import WorkSlide from './WorkSlide';
import classes from './WorkGallery.module.scss';
import React, { useEffect, useState } from 'react';
import useDb from '../../../hooks/use-db';

const WorkGallery = () => {
    const [works, setWorks] = useState([]);
    const [isLoading, error, requestData] = useDb();

    useEffect(() => {
        const transformData = data => {
            const transformedData = [];
            for (const key in data) {
                transformedData.push({
                    id: key,
                    title: data[key].title,
                    desc: data[key].desc,
                    imageSrc: data[key].imageSrc,
                    link: data[key].link,
                });
            }
            transformedData.sort();
            transformedData.reverse();
            setWorks(transformedData);
        };
        requestData(
            {
                url: 'https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/works.json',
            },
            transformData
        );
    }, [requestData]);

    let content = <WorkSlide loading={true} />;
    if (works.length > 0 || !isLoading || !error) {
        content = works.map(item => (
            <WorkSlide
                key={item.id}
                imageSrc={'images/' + item.imageSrc}
                title={item.title}
                desc={item.desc}
                link={item.link}
            />
        ));
    }
    if (error) {
        content = <p>Whoops! There has been an error. Please refresh or try again later.</p>;
    }

    return <div className={classes['work-gallery__wrapper']}>{content}</div>;
};

export default React.memo(WorkGallery);
