import classes from "../styles/Projects.module.scss";
import Image from "next/image";

import Avinash from "../Assets/images/Avinash.jpg";
import Landing from "./landing";

const ProjectsList = [
    {
        title: "Mac",
    },

    {
        title: "Win",
    },
];

const Projects = () => {
    return (
        <div className={classes.rootProjects}>
            <div className={classes.heading}>
                <p>Projects</p>
            </div>

            {/* <div className={classes.content}>
                <div className={classes.cards}>
                    {ProjectsList.map((projects) => {
                        return (
                            <>
                                <a>
                                    <div className={classes.projectCard}></div>
                                </a>
                            </>
                        );
                    })}
                </div>
            </div> */}
        </div>
    );
};

export default Projects;
