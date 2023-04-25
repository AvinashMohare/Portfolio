import classes from "../styles/Projects.module.scss";
import Image from "next/image";

import Avinash from "../Assets/images/Avinash.jpg";
import Landing from "./landing";

const Projects = () => {
    return (
        <div className={classes.rootProjects}>
            <div className={classes.heading}>
                <p>Projects</p>
            </div>
        </div>
    );
};

export default Projects;
