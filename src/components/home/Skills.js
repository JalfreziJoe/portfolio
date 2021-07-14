import Title from '../UI/Title';

import classes from './Skills.module.scss';

const DUMMY_DATA = [
    {
        id: 's1',
        skillName: 'Vue',
        skillIcon: 'vue.svg',
    },
    {
        id: 's2',
        skillName: 'Vue',
        skillIcon: 'vue.svg',
    },
    {
        id: 's3',
        skillName: 'Vue',
        skillIcon: 'vue.svg',
    },
    {
        id: 's4',
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
                        <p>{skill.skillName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
