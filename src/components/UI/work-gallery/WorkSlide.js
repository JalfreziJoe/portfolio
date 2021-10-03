import classes from './WorkSlide.module.scss';

import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const WorkSlide = ({ loading = false, imageSrc, title, desc, link }) => {
    const history = useHistory();

    const clickHandler = pathname => {
        console.log('work gallery click. scroll: ' + window.scrollY);
        history.push(pathname);
    };

    return (
        <div className={classes['work-slide']}>
            <div className={classes['work-slide__panel']}>
                <h2>{title || <Skeleton count={1} width={'90%'} />}</h2>
            </div>

            {!!imageSrc ? (
                <div
                    className={classes['work-slide__image-container']}
                    onClick={() => {
                        clickHandler(`/work/${link}`);
                    }}
                >
                    {/* <Link to={`/work/${link}`}> */}
                    <img src={imageSrc} alt={title} />
                    {/* </Link> */}
                </div>
            ) : (
                <div style={{ padding: '1em' }}>
                    <Skeleton height={600} />
                </div>
            )}

            <div className={classes['work-slide__panel']}>
                {!!desc ? (
                    <p>{desc}</p>
                ) : (
                    <p>
                        <Skeleton count={3} width={'90%'} />
                    </p>
                )}
            </div>
        </div>
    );
};

export default WorkSlide;
