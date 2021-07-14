import classes from './MobileMenu.module.scss';
import MobileMenuOverlay from '../utils/MobileMenuOverlay';
import { useState } from 'react';

const MobileMenu = () => {
    const [menuBarAnimateStyles, setMenuBarAnimationStyles] = useState(classes.closed);

    const menuClickHandler = () => {
        if (menuBarAnimateStyles === classes.closed) {
            setMenuBarAnimationStyles(classes.open);
        } else {
            setMenuBarAnimationStyles(classes.closed);
        }
    };

    return (
        <>
            <div className={classes['mobile-menu']} onClick={menuClickHandler}>
                <div className={`${menuBarAnimateStyles} ${classes['menu-bar']}`}></div>
                <div className={`${menuBarAnimateStyles} ${classes['menu-bar']}`}></div>
                <div className={`${menuBarAnimateStyles} ${classes['menu-bar']}`}></div>
            </div>
            {menuBarAnimateStyles === classes.open && (
                <MobileMenuOverlay exitMenu={menuClickHandler}>
                    Mobile menu pullout
                </MobileMenuOverlay>
            )}
        </>
    );
};

export default MobileMenu;
