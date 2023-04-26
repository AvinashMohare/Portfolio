import classes from "../styles/Projects.module.scss";

import { ReactComponent as Svg1 } from "../Assets/svg/clock.svg";

const ProjectsList = [
    {
        title: "AI Odyssey",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        // svg: <Svg1 />,
    },

    {
        title: "Sukrishak",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        // svg: <Svg1 />,
    },
    {
        title: "Portfolio",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        // svg: <Svg1 />,
    },
    {
        title: "AI Odyssey",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        // svg: <Svg1 />,
    },

    {
        title: "Sukrishak",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        // svg: <Svg1 />,
    },
    {
        title: "Portfolio",
        desc: "A full stack allaround designer that may or may not include a guide for specific creative people",
        // svg: <Svg1 />,
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
                    {ProjectsList.map((projects) => {
                        console.log(projects.color);
                        return (
                            <>
                                <div className={classes.projectCard}>
                                    <div className={classes.logo}>
                                        {projects.svg}
                                    </div>

                                    <div className={classes.Cardcontent}>
                                        <p className={classes.title}>
                                            {projects.title}
                                        </p>

                                        <p className={classes.desc}>
                                            {projects.desc}
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
