import classes from "../styles/About.module.scss";

const About = () => {
    return (
        <div className={classes.rootAbout}>
            <div className={classes.heading}>About Me</div>
            <div className={classes.content}>
                <p>
                    Hello, my name is Avinash and I am a web developer. I am
                    currently pursuing BTech in Artificial Intelligence, and
                    while I have a strong interest in AI, my main focus is on
                    building beautiful and functional websites. I aim to
                    leverage my knowledge of AI to enhance my web development
                    skills and create innovative solutions for my clients. I
                    have honed my skills through a combination of education and
                    experience. My approach to web development is focused on
                    creating user-friendly and visually appealing websites that
                    provide a seamless experience for visitors.
                </p>
                <p>
                    I pride myself on delivering high-quality work that meets
                    the unique needs of each client. I am constantly striving to
                    learn and grow, and I am committed to staying up-to-date on
                    the latest trends and technologies in web development.
                </p>
                <p>
                    I have worked with a variety of clients, ranging from small
                    businesses to large corporations, and I am always excited to
                    take on new projects. My approach to web development is
                    focused on creating user-friendly and visually appealing
                    websites that provide a seamless experience for visitors.
                </p>
                <p>
                    When I'm not working on projects, I enjoy exploring new
                    technologies and staying active by practicing yoga. If
                    you're interested in working together or learning more about
                    my services, please don't hesitate to get in touch. I look
                    forward to hearing from you!"
                </p>
            </div>
        </div>
    );
};

export default About;
