import classes from "../styles/Skills.module.scss";

const SkillsList = [
    {
        name: "Web Development",
        percentage: "75",
        width: 75,
        aos: "fade-right",
    },
    {
        name: "App Development",
        percentage: "65",
        width: 65,
        aos: "fade-left",
    },
    {
        name: "Machine Learning",
        percentage: "60",
        width: 60,
        aos: "fade-right",
    },
    {
        name: "Data Science",
        percentage: "50",
        width: 50,
        aos: "fade-left",
    },
];

const Skills = () => {
    return (
        <div className={classes.rootSkills} id="skills">
            <div className={classes.heading}>
                <p>Skills</p>
            </div>

            <div className={classes.content}>
                {SkillsList.map((skill) => {
                    return (
                        <div
                            key={skill.name}
                            className={classes.skill}
                            data-aos={skill.aos}
                        >
                            <div className={classes.skillHolder}>
                                <div className={classes.progressbarMain}>
                                    <div className={classes.progressBar}></div>
                                    <div
                                        className={classes.progressBarAnim}
                                        style={{
                                            width: `${skill.width}%`,
                                            maxWidth: `${skill.width}%`,
                                        }}
                                    >
                                        <div
                                            className={classes.progressBarUp}
                                        ></div>
                                    </div>
                                </div>
                                <div className={classes.skillPercentage}>
                                    <p>{skill.percentage + "%"}</p>
                                </div>
                            </div>
                            <div className={classes.skillName}>
                                <p>{skill.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
