import classes from "../styles/Projects.module.scss";

import { default as Svg1 } from "../Assets/svg/svg_components/Clock";

const ProjectsList = [
    {
        title: "AI Odyssey",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Svg1,
    },

    {
        title: "Sukrishak",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Svg1,
    },
    {
        title: "Portfolio",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Svg1,
    },
    {
        title: "AI Odyssey",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Svg1,
    },

    {
        title: "Sukrishak",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Svg1,
    },
    {
        title: "Portfolio",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Svg1,
    },
];

const Projects = () => {
    return (
        <div className={classes.rootProjects}>
            <div className={classes.heading}>
                <p>Projects</p>
            </div>

            <div className={classes.content}>
                <div className={classes.cards}>
                    {ProjectsList.map((Projects) => {
                        return (
                            <>
                                <div className={classes.projectCard}>
                                    <div className={classes.logo}>
                                        <Projects.Svg />
                                    </div>

                                    <div className={classes.Cardcontent}>
                                        <p className={classes.title}>
                                            {Projects.title}
                                        </p>

                                        <p className={classes.desc}>
                                            {Projects.desc}
                                        </p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
