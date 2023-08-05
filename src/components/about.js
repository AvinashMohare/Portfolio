import classes from "../styles/About.module.scss";

const About = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Resume.pdf";
        link.download = "AvinashResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={classes.rootAbout} id="about">
            <div className={classes.heading}>
                <p>About Me</p>
            </div>
            <div className={classes.content}>
                <p>
                    I am currently pursuing B.Tech in Artificial Intelligence,
                    and while I have a strong interest in AI, my main focus is
                    on building beautiful and functional websites. I aim to
                    leverage my knowledge of AI to enhance my web development
                    skills and create innovative solutions. My approach to web
                    development is focused on creating user-friendly and
                    visually appealing websites that provide a seamless
                    experience for visitors.
                </p>
                {/* <p>
                    I pride myself on delivering high-quality work that meets
                    the unique needs of each client. I am constantly striving to
                    learn and grow, and I am committed to staying up-to-date on
                    the latest trends and technologies in web development.
                </p> */}
                {/* <p>
                    I have worked with a variety of clients, ranging from small
                    businesses to large corporations, and I am always excited to
                    take on new projects. My approach to web development is
                    focused on creating user-friendly and visually appealing
                    websites that provide a seamless experience for visitors.
                </p> */}

                <p>
                    I'm an individual with a passion for exploring new
                    experiences. Whether it's playing badminton, reading books,
                    or writing content, I always strive to challenge myself and
                    try new things. I am also a public speaker and I love to
                    host events, I enjoy connecting with people from all walks
                    of life. I believe that life is about continuous learning
                    and growth, and I'm committed to developing myself both
                    personally and professionally.
                </p>
                <p>
                    Through my journey, I've learned the value of stepping
                    outside of my comfort zone and taking risks. I'm excited to
                    keep exploring new horizons, meeting new people, and making
                    a positive impact on the world around me. If you're
                    interested in working together or learning more about my
                    services, please don't hesitate to get in touch. I look
                    forward to hearing from you!
                </p>
            </div>

            <div
                className={classes.button}
                data-aos="fade-up"
                onClick={handleDownload}
            >
                <p>Download CV</p>
            </div>
        </div>
    );
};

export default About;
