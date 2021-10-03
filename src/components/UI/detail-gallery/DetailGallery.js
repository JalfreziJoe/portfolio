import classes from './DetailGallery.module.scss';

// import ReactPlayer from 'react-player';

const DetailGallery = ({ media, mediaType, mediaCss }) => {
    let content = '<></>';
    let contentContainerClass = classes['image-container'];
    if (media != null) {
        content = media.map((element, index) => {
            switch (mediaType[index]) {
                case 'image':
                    return (
                        <div key={index} className={`${classes.image} ${classes[mediaCss[index]]}`}>
                            <img src={`/media/${element}`} alt="gallery" />
                        </div>
                    );
                case 'video':
                    return (
                        <div
                            key={index}
                            className={`${classes.inlinevideo} ${classes[mediaCss[index]]}`}
                        >
                            <video src={`/media/${element}`} autoPlay muted loop playsInline />
                        </div>
                    );
                case 'video-youtube':
                    contentContainerClass = classes['video-container'];
                    return (
                        <div key={index} className={`${classes.video} ${classes[mediaCss[index]]}`}>
                            <iframe
                                //src={`https://www.youtube.com/embed/z9Ul9ccDOqE`}
                                src={`https://www.youtube.com/embed/${element}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            {/* <ReactPlayer
                                    className={classes['react-player']}
                                    url={`https://www.youtube.com/embed/${element}`}
                                    width="100%"
                                    height="100%"
                                    controls
                                /> */}

                            {/* <VideoPlayer url={element} className={classes[mediaCss[index]]} /> */}
                        </div>

                        //https://www.youtube.com/watch?v=W52fVgBnpfg
                    );
                default:
                    return null;
            }
        });
    }
    return <div className={contentContainerClass}>{content}</div>;
};

export default DetailGallery;
