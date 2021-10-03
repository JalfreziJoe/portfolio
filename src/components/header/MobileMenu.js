import classes from './MobileMenu.module.scss';
import MobileMenuOverlay from '../utils/MobileMenuOverlay';
import { useState } from 'react';
import NavList from './NavList';

const MobileMenu = ({ onOpenMobileMenu, onCloseMobileMenu }) => {
    const [menuBarAnimateStyles, setMenuBarAnimationStyles] = useState(classes.closed);

    const menuClickHandler = () => {
        console.log('menuClickHandler');
        if (menuBarAnimateStyles === classes.closed) {
            console.log('open it');
            setMenuBarAnimationStyles(classes.open);
            onOpenMobileMenu();
        } else {
            console.log('close it');
            setMenuBarAnimationStyles(classes.closed);
            onCloseMobileMenu();
        }
    };

    const closeMobileMenu = () => {
        console.log('closeMobileMenu');
        setMenuBarAnimationStyles(classes.closed);
        onCloseMobileMenu();
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
                    <NavList navType="mobile" closeMobileMenu={closeMobileMenu} />
                </MobileMenuOverlay>
            )}
        </>
    );
};

export default MobileMenu;
