import classes from './ContactButton.module.scss';

const ContactButton = ({ onClick, children }) => {
    return (
        <button className={classes['contact-button']} onClick={onClick}>
            {children}
        </button>
    );
};

export default ContactButton;
