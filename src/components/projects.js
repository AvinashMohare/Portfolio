import classes from "../styles/Projects.module.scss";

import { default as Svg1 } from "../Assets/svg/svg_components/Clock";
import { default as Globe } from "../Assets/svg/svg_components/Globe";
import { default as Android } from "../Assets/svg/svg_components/Android";
import { default as Robot } from "../Assets/svg/svg_components/Robot";
import Link from "next/link";

const ProjectsList = [
    {
        title: "AI Odyssey",
        desc: "Website for an event hosted by G.H. Raisoni College of Engineering to provide information, registration facilities, and updates related to the event.",
        Svg: Globe,
        link: "https://www.aiodyssey.tech/",
        aos: "fade-up",
    },

    {
        title: "Sukrishak",
        desc: "Mobile application designed to help farmers connect to useful resources. To empower farmers by providing them valuable information,and opportunities",
        Svg: Android,
        link: "https://github.com/sukrishak?view_as=public",
        aos: "fade-down",
    },
    {
        title: "Befikra Website",
        desc: "Befikra Website is a platform created for a student community named Befikra. One of my first projects that I contributed in.",
        Svg: Globe,
        link: "https://github.com/AvinashMohare/Befikra-Community.github.io",
        aos: "fade-up",
    },
    {
        title: "FinAnalytix",
        desc: "A NLP based project that focuses on predicting sentiments of financial texts. The aim is to analyze and understand the sentiments expressed in financial documents",
        Svg: Robot,
        link: "https://github.com/AvinashMohare/FinAnalytix",
        aos: "fade-down",
    },

    {
        title: "MoodSnap",
        desc: "MoodSnap is a deep learning-based project that aims to predict the mood or emotional state of a user based on a given photo.",
        Svg: Robot,
        link: "https://github.com/AvinashMohare/MoodSnap",
        aos: "fade-up",
    },
    {
        title: "OrangeHacks",
        desc: "Website for a community that hosts and organizes tech events in Nagpur. The website serves as a hub for providing information about past and upcoming events.",
        Svg: Globe,
        link: "#projects",
        aos: "fade-down",
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
                            <div
                                key={Projects.title}
                                className={classes.projectCard}
                                data-aos={Projects.aos}
                            >
                                <Link href={Projects.link} target="__blank_">
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
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Projects;
