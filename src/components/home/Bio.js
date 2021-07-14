import classes from './Bio.module.scss';
import Title from '../UI/Title';

const Bio = () => {
    return (
        <div className={classes.bio__wrapper}>
            <Title titleBackgroundClass="title-background__bio" titleText="Bio" />
            <div className={`${classes.para1} ${classes['bio-text']}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id leo vitae quam
                vehicula eleifend sit amet et lorem. Vivamus et risus non ante hendrerit lobortis
                vel eu odio. Donec accumsan blandit nulla nec volutpat. Mauris id velit massa.
                Quisque gravida cursus maximus. Ut fermentum nibh id nisl convallis iaculis. In hac
                habitasse platea dictumst. Aliquam aliquet convallis eros, in pretium eros dapibus
                eget. Morbi porttitor dui turpis. Praesent sollicitudin fermentum elit a varius.
                Donec lacinia sed justo quis aliquet.
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
