import Title from '../UI/Title';

import classes from './Skills.module.scss';

const DUMMY_DATA = [
    {
        id: 's1',
        skillName: 'HTML',
        skillIcon: 'html-5.svg',
    },
    {
        id: 's2',
        skillName: 'CSS',
        skillIcon: 'css-3.svg',
    },
    {
        id: 's3',
        skillName: 'Javascript',
        skillIcon: 'javascript.svg',
    },
    {
        id: 's4',
        skillName: 'React',
        skillIcon: 'react.svg',
    },
    {
        id: 's5',
        skillName: 'NodeJS',
        skillIcon: 'nodejs.svg',
    },
    {
        id: 's6',
        skillName: 'Express',
        skillIcon: 'express.svg',
    },
    {
        id: 's7',
        skillName: 'MongoDB/\nMongoose',
        skillIcon: 'mongodb.svg',
    },
    {
        id: 's8',
        skillName: 'Vue',
        skillIcon: 'vue.svg',
    },
];

const Skills = () => {
    const images = require.context('../../images/', false);
    return (
        <div className={classes.skills}>
            <Title titleBackgroundClass="title-background__skills" titleText="Skills" />
            <div className={classes['skills-wrapper']}>
                {DUMMY_DATA.map(skill => (
                    <div className={classes['skill-container']} key={skill.id}>
                        {console.log(images('./' + skill.skillIcon))}
                        <img src={images('./' + skill.skillIcon).default} alt={skill.skillName} />
                        {/* <p>{skill.skillName}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
