import WorkGallery from '../components/UI/work-gallery/WorkGallery';
import VideoPlayer from '../components/video/VideoPlayer';

const Work = () => {
    return (
        <div>
            <VideoPlayer url="https://www.youtube.com/watch?v=W52fVgBnpfg" />
            <WorkGallery />
        </div>
    );
};
export default Work;
