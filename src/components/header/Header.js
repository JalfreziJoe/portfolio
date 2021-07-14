import styles from './Header.module.scss';

import Navigation from './Navigation';

// header needs work
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1>
                    Joe<span>Noordally</span>
                </h1>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
