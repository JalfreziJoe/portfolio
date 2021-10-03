import { useHistory, useLocation, matchPath } from 'react-router';
import classes from './NavButton.module.scss';

const NavButton = ({ route, buttonText, navType, closeMobileMenu }) => {
    const history = useHistory();
    const location = useLocation();

    console.log(route.length);
    console.log(location.pathname);

    const activeClassChecker = () => {
        if (route === '/' && location.pathname.length > 1) {
            return null;
        }

        const matched = matchPath(location.pathname, route);
        console.log(matched);
        if (matched == null) {
            return null;
        }
        return classes.active;
    };
    const navClickHandler = route => {
        if (navType === 'mobile') {
            closeMobileMenu();
        }
        history.push(route);
        //history.push();
    };
    return (
        // <NavLink
        //     to={route}
        //     className={classes['nav-button']}
        //     activeClassName={classes.active}
        //     onClick={navClickHandler}
        // >
        //     {buttonText}
        //     {/* <div className={classes['active-underline']}></div> */}
        // </NavLink>

        <button
            className={`${classes['nav-button']} ${activeClassChecker()}`}
            onClick={() => {
                navClickHandler(route);
            }}
        >
            {buttonText}
            <div className={classes['active-underline']}></div>
        </button>
    );
};

export default NavButton;
