import classes from './About.module.scss';
import Hero from '../components/home/Hero';
import Title from '../components/UI/Title';
import ContactButton from '../components/UI/ContactButton';

const About = () => {
    const images = require.context('../images/', false);
    const tabletUpImg = images('./about-me.jpg').default;
    const mobileImg = images('./about-me-mobile.jpg').default;

    const onHandleContact = () => {
        console.log('onHandleContact');
    };
    return (
        <div className={classes['about-container']}>
            <Hero type="about" />
            <Title titleBackgroundClass="title__blue" titleText="About" />
            <div className={classes['about-content']}>
                <section>
                    <picture>
                        <source media="(max-width: 767px)" srcSet={`${mobileImg}`}></source>
                        <source media="(min-width: 768px)" srcSet={`${tabletUpImg}`}></source>
                        <img src={mobileImg} alt="Joe Profile" />
                    </picture>
                </section>
                <section className={classes['about-text']}>
                    <p>
                        I'm Joe Noordally, a web developer in Kent, UK. Developing rich user
                        experiences in the advertising industry for the past 10 years. Starting with
                        Flash and then migrating to HTML5/CSS/JS with Photoshop for designing. I
                        love making content that catches the eye and finding the best ways to
                        capture the user's attention. I have worked on many brands in various
                        sectors including McLaren, Fender, Ford, Dior, Google and Bethesda.
                    </p>

                    <p>
                        Creating rich media ads over the years includes formats such as standard
                        inpage, expandables, takeovers, full width responsive and bespoke mobile
                        ads. They have contained features such as bespoke animations, image
                        galleries, interactive elements, video and API data driven content. I have
                        used ad technology platforms including AOL/Verizon’s ONECreative, Google
                        DoubleClick and Weborama. A video showcase is available here.
                    </p>

                    <p>
                        I am constantly finding myself looking at how something works. Whether it’s
                        a new bit of tech or cool content on a webpage. Then, I usually start
                        looking for ways to improve or refine it! I also enjoy the process of
                        analysing problems and coming up with solutions that meet the needs of all
                        users.
                    </p>

                    <p>
                        Always looking to extend my knowledge, In my downtime I have been learning
                        React, Vue, Node/Express and MongoDB/Mongoose via udemy.com courses. I’m
                        also a committee member for my local resident’s society - looking after the
                        communications and email newsletters.
                    </p>

                    <p>
                        Before advertising, I have worked for a creative agency, marketing and
                        travel technology companies. Tasks ranged from providing technical support
                        to clients, maintaining backend databases, early days HTML coding
                        (Dreamweaver/Frontpage), HTML emails and Flash coding.
                    </p>

                    <p>
                        I am a married, father of three children. Love getting out in the
                        countryside walking or running.
                    </p>
                    <ContactButton onClick={onHandleContact} />
                </section>
            </div>
        </div>
    );
};
export default About;
