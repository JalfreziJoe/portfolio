import styles from './Column.module.scss';

const Column = () => {
    return (
        <div className={styles['column-container']}>
            <div className={`${styles['column-texture']} ${styles['column-one']}`}></div>
            <div className={`${styles['column-texture']} ${styles['column-two']}`}></div>
        </div>
    );
};

export default Column;
