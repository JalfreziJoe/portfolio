import classes from './Footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear().toString();
    return (
        <div className={classes.footer}>
            <p>Joe Noordally {currentYear}</p>
            <p>
                <a href="mailto:joenoordally@gmail.com">joenoordally@gmail.com</a>
            </p>
        </div>
    );
};

export default Footer;
