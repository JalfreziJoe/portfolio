import styles from './Columns.module.scss';

import Column from './Column';

const Columns = () => {
    return (
        <div className={styles['columns-container']}>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    );
};

export default Columns;
