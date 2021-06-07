import styles from './Header.module.scss';

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
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Work</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
