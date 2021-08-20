import classes from './Bio.module.scss';
import Title from '../UI/Title';

const Bio = () => {
    return (
        <div className={classes.bio__wrapper}>
            <Title titleBackgroundClass="title-background__bio" titleText="Bio" />
            <div className={`${classes.para1} ${classes['bio-text']}`}>
                I'm Joe Noordally, a web developer in Kent, UK. Developing rich user experiences in
                the advertising industry for the past 10 years. Starting with Flash and then
                migrating to HTML5/CSS/JS with Photoshop for designing. I love making content that
                catches the eye and finding the best ways to capture the user's attention. I have
                worked on many brands in various sectors including McLaren, Fender, Ford, Dior,
                Google and Bethesda.
            </div>
            <div className={`${classes.para2} ${classes['bio-text']}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id leo vitae quam
                vehicula eleifend sit amet et lorem. Vivamus et risus non ante hendrerit lobortis
                vel eu odio. Donec accumsan blandit nulla nec volutpat. Mauris id velit massa.
                Quisque gravida cursus maximus. Ut fermentum nibh id nisl convallis iaculis. In hac
                habitasse platea dictumst. Aliquam aliquet convallis eros, in pretium eros dapibus
                eget. Morbi porttitor dui turpis. Praesent sollicitudin fermentum elit a varius.
                Donec lacinia sed justo quis aliquet.
            </div>
        </div>
    );
};

export default Bio;
