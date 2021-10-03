import MobileMenu from './MobileMenu';
import NavList from './NavList';

const Navigation = ({ onOpenMobileMenu, onCloseMobileMenu }) => {
    return (
        <>
            <NavList navType="desktop" />
            <MobileMenu onOpenMobileMenu={onOpenMobileMenu} onCloseMobileMenu={onCloseMobileMenu} />
        </>
    );
};

export default Navigation;
