import styles from './Header.module.scss';

// header needs work
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1>
                    Joe<span>Noordally</span>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="http://www.nowhere.com">Home</a>
                        </li>
                        <li>
                            <a href="http://www.nowhere.com">Work</a>
                        </li>
                        <li>
                            <a href="http://www.nowhere.com">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
