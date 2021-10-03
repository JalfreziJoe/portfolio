import classes from './About.module.scss';
import Hero from '../components/home/Hero';
import Title from '../components/UI/Title';
import ContactButton from '../components/UI/ContactButton';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GradeIcon from '@mui/icons-material/Grade';
import AnimationIcon from '@mui/icons-material/Animation';
import ImageIcon from '@mui/icons-material/Image';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ApiIcon from '@mui/icons-material/Api';

const About = () => {
    const images = require.context('../images/', false);
    const tabletUpImg = images('./about-me.jpg').default;
    const mobileImg = images('./about-me-mobile.jpg').default;

    const onHandleContact = url => {
        console.log('onHandleContact');
        window.open(url, '_blank');
    };
    return (
        <div className={classes['about-container']}>
            <Hero type="about" />
            <Title titleBackgroundClass="title__blue" titleText="About" />
            <div className={classes['about-content']}>
                {/* <section>
                    <picture>
                        <source media="(max-width: 767px)" srcSet={`${mobileImg}`}></source>
                        <source media="(min-width: 768px)" srcSet={`${tabletUpImg}`}></source>
                        <img src={mobileImg} alt="Joe Profile" />
                    </picture>
                </section> */}
                <section className={classes['about-text']}>
                    <div className={`${classes['column']} ${classes['column1']}`}>
                        <h3>Past</h3>
                        <p>
                            Before advertising, I have worked for a creative agency, marketing and
                            travel technology companies. Tasks ranged from providing technical
                            support to clients, maintaining backend databases, early days HTML
                            coding (Dreamweaver/Frontpage), HTML emails and Flash coding.
                        </p>
                        <p>
                            Creating rich media ads over the years includes formats such as:
                            <ul>
                                <li>
                                    <GradeIcon />
                                    Standard inpage
                                </li>
                                <li>
                                    {' '}
                                    <GradeIcon />
                                    Expandables
                                </li>
                                <li>
                                    {' '}
                                    <GradeIcon />
                                    Full page takeovers
                                </li>
                                <li>
                                    {' '}
                                    <GradeIcon />
                                    Full width responsive
                                </li>
                                <li>
                                    {' '}
                                    <GradeIcon />
                                    Bespoke mobile ads
                                </li>
                            </ul>
                            Coding features:
                            <ul>
                                <li>
                                    <AnimationIcon />
                                    CSS/GSAP animations
                                </li>
                                <li>
                                    <ImageIcon />
                                    image galleries &amp; video
                                </li>
                                <li>
                                    <FeaturedPlayListIcon />
                                    Interactive elements
                                </li>
                                <li>
                                    <ApiIcon />
                                    API data driven content
                                </li>
                            </ul>{' '}
                            I have used <b>Ad technology platforms:</b> AOL/Verizon’s ONECreative,
                            Google DoubleClick and Weborama. A video showcase is available{' '}
                            <Link to="/work/showreel">here</Link>.
                        </p>
                        <h3>Present</h3>
                        <p>
                            As a developer, I'm always learning &amp; trying to extend my knowledge.
                            Over the last 18 months, I wanted to understand the modern JS frameworks
                            and was curious about NodeJS. Using udemy.com courses I have completed:{' '}
                            <ul>
                                <li>
                                    <AddCircleIcon />
                                    React
                                </li>
                                <li>
                                    <AddCircleIcon />
                                    Vue
                                </li>
                                <li>
                                    <AddCircleIcon />
                                    NodeJS/Express
                                </li>
                                <li>
                                    <AddCircleIcon />
                                    React, NodeJS, Express, MongoDB - The MERN fullstack
                                </li>
                            </ul>
                            Completion certificates are on my{' '}
                            <a
                                href="https://www.linkedin.com/in/joenoordally/"
                                target="_blank"
                                rel="noreferrer"
                                alt="LinkedIn Profile"
                            >
                                LinkedIn profile.
                            </a>
                            <br />
                            Course work projects on my{' '}
                            <a
                                href="https://github.com/JalfreziJoe/"
                                target="_blank"
                                rel="noreferrer"
                                alt="LinkedIn Profile"
                            >
                                public Github repos
                            </a>
                            .
                        </p>
                        <p>
                            To practice these new skills, I have created this portfolio site. It's
                            coded in the React framework and uses React-router-dom for pages,
                            Firebase REST api for JSON data, Hooks for data retieval, Framer
                            Motion/CSS for animations.
                            <div className={classes['coloured-block']}>
                                <p>
                                    <h3>Insta-Vue - Instagram Vue Conversion</h3>I also re-factored
                                    a desktop Instagram clone (Scrimba react tutorial) that was made
                                    in React/Tailwind &amp; Firebase Firestore. Converting from
                                    React to a Vue framework using Vuex as a state store. See the{' '}
                                    <a
                                        href="https://github.com/JalfreziJoe/insta-vue"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        'insta-vue' repo
                                    </a>{' '}
                                    to view the demo.
                                </p>
                                <img
                                    src={'/images/polaroid-insta.jpg'}
                                    alt={'Polaroid of insta-vue, instagram clone conversion'}
                                />
                            </div>
                        </p>
                    </div>
                    <div className={`${classes['column']} ${classes['column2']}`}>
                        <div className={classes['photo-box-content']}>
                            <img
                                src={'/images/polaroid-suite.jpg'}
                                alt={'Polaroid of me in a suite'}
                            />

                            <h3>
                                <div>Profile</div>
                            </h3>

                            <p>
                                I'm Joe Noordally, a web developer in Kent, UK. Developing rich user
                                experiences in the advertising industry for the past 10 years.
                                Starting with Flash and then migrating to HTML5/CSS/JS with
                                Photoshop for designing.
                                <br />
                                <br />I love making/coding content that catches the eye and finding
                                the best ways to capture the user's attention. I have worked on many
                                brands in various sectors including McLaren, Fender, Ford, Dior,
                                Google and Bethesda.
                            </p>
                            <img
                                className={classes.rotate__back}
                                src={'/images/polaroid-run.jpg'}
                                alt={'Polaroid of me on a run'}
                            />
                            <p>
                                I am a married, father of three children. Love getting out in the
                                countryside walking or running. I’m also a committee member for my
                                local resident’s society - looking after the communications and
                                email newsletters.
                            </p>
                        </div>
                    </div>
                    {/* 

                    

                    <p>
                        I am constantly finding myself looking at how something works. Whether it’s
                        a new bit of tech or cool content on a webpage. Then, I usually start
                        looking for ways to improve or refine it! I also enjoy the process of
                        analysing problems and coming up with solutions that meet the needs of all
                        users.
                    </p>

                    

                     */}
                </section>
                {/* <div className={classes['contact-buttons']}>
                    <ContactButton onClick={() => onHandleContact('mailto:joenoordally@gmail.com')}>
                        joenoordally@gmail.com
                    </ContactButton>
                    <ContactButton
                        onClick={() => onHandleContact('https://www.linkedin.com/in/joenoordally/')}
                    >
                        linkedin
                    </ContactButton>
                    <ContactButton
                        onClick={() => onHandleContact('https://github.com/JalfreziJoe')}
                    >
                        github
                    </ContactButton>
                </div> */}
            </div>
        </div>
    );
};
export default About;
