import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

import MobileMenu from './MobileMenu';

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName={classes.active} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/work">
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <MobileMenu />
        </>
    );
};

export default Navigation;
