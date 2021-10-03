import classes from './Navigation.module.scss';
import NavButton from './NavButton';

const NavList = ({ navType = 'desktop', closeMobileMenu = null }) => {
    const navItems = [
        {
            text: 'Home',
            route: '/',
        },
        {
            text: 'Work',
            route: '/work',
        },
        {
            text: 'About',
            route: '/about',
        },
    ];

    return (
        <nav className={navType === 'desktop' ? classes.desktop : classes.mobile}>
            <ul>
                {navItems.map(item => (
                    <li key={item.text}>
                        <NavButton
                            key={item.text}
                            route={item.route}
                            buttonText={item.text}
                            navType={navType}
                            closeMobileMenu={closeMobileMenu}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
