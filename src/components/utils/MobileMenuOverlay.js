import ReactDOM from 'react-dom';

import classes from './MobileMenuOverlay.module.scss';

const Overlay = ({ exitMenu }) => {
    return <div className={classes.overlay} onClick={exitMenu}></div>;
};

const SlideOutArea = ({ children }) => {
    return <div className={classes.slideOutArea}>{children}</div>;
};

const MobileMenuOverlay = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Overlay exitMenu={props.exitMenu} />,
                document.getElementById('overlay')
            )}
            {ReactDOM.createPortal(
                <SlideOutArea children={props.children} />,
                document.getElementById('mobileMenu')
            )}
        </>
    );
};

export default MobileMenuOverlay;
