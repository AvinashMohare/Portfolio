import classes from "../styles/Landing.module.scss";

const Landing = () => {
    return (
        <div data-aos="fade-in" className={classes.rootLanding} id="home">
            <div className={classes.center}>
                <div className={classes.contentContainer}>
                    <p className={classes.tagline}>Hello, My name is</p>

                    <p className={classes.fname}>Avinash</p>
                    <p className={classes.lname}>Mohare</p>

                    <p className={classes.bio}>
                        I like to craft solid and scalable frontend products
                        with great user experiences. I have a strong background
                        in developing and implementing Responsive Web
                        Applications using React, hooks, and REST APIs.
                        Additionally, I have expertise in building scalable
                        Spring Boot services and working with Java to ensure
                        maximum development efficiency.
                    </p>

                    <div className={classes.Ids}>
                        <a
                            className={classes.linkedin}
                            href="https://www.linkedin.com/in/avinash-mohare-0277b1203/"
                            target="__blank_"
                        >
                            LinkedIn
                        </a>

                        <a
                            className={classes.twitter}
                            href="https://twitter.com/Avinash__Mohare"
                            target="__blank_"
                        >
                            Twitter
                        </a>
                        <a
                            className={classes.instagram}
                            href="https://instagram.com/avinash_mohare?igshid=NzMyMjgxZWIzNw=="
                            target="__blank_"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            <div className={classes.right}></div>
        </div>
    );
};

export default Landing;
