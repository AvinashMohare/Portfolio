import classes from "../styles/Projects.module.scss";

import { default as Svg1 } from "../Assets/svg/svg_components/Clock";
import { default as Globe } from "../Assets/svg/svg_components/Globe";
import { default as Android } from "../Assets/svg/svg_components/Android";
import { default as Robot } from "../Assets/svg/svg_components/Robot";

const ProjectsList = [
    {
        title: "AI Odyssey",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Globe,
    },

    {
        title: "Sukrishak",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Android,
    },
    {
        title: "Befikra Website",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Globe,
    },
    {
        title: "FinAnalytix",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Robot,
    },

    {
        title: "MoodSnap",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Robot,
    },
    {
        title: "OrangeHacks",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        Svg: Globe,
    },
];

const Projects = () => {
    return (
        <div className={classes.rootProjects} id="projects">
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
                <div></div>
            </div>
        </div>
    );
};

export default Projects;
