import Instagram from "@/Assets/svg/svg_components/Instagram";
import classes from "../styles/Contact.module.scss";
import Twitter from "@/Assets/svg/svg_components/Twitter";
import Linkedin from "@/Assets/svg/svg_components/Linkedin";
import Github from "@/Assets/svg/svg_components/Github";
import ContactForm from "./contactForm";

const Contact = () => {
    return (
        <div className={classes.rootContact} id="contact">
            <div className={classes.heading}>
                <p>Get in Touch</p>
            </div>

            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <div className={classes.info}>
                        <p className={classes.p1}>
                            I believe in the power of creative collaboration and
                            its transformative impact. If you are looking to
                            bring your ideas to life or have an exciting
                            creative endeavor, I am here to be your partner in
                            the process.
                        </p>

                        <p className={classes.p2}>
                            Whether you have a groundbreaking project idea, a
                            potential collaboration opportunity, or even if you
                            just want to reach out and say hello, I'm genuinely
                            excited to lend an ear and hear your thoughts.
                        </p>

                        <p className={classes.p3}>
                            At last, thank you for visiting my website! I
                            appteciate your interest and look forward to hearing
                            from you. Don't hesitate to send me a message or
                            connect with me on social media. Let's stay in
                            touch!
                        </p>

                        <div className={classes.socials}>
                            <p>Follow me on</p>

                            <div className={classes.svgs}>
                                <div>
                                    <a
                                        href="https://github.com/AvinashMohare"
                                        target="_blank"
                                    >
                                        <Github />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.instagram.com/avinash_mohare/?igshid=ZDdkNTZiNTM%3D"
                                        target="_blank"
                                    >
                                        <Instagram color="#a88590" />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://twitter.com/Avinash__Mohare"
                                        target="_blank"
                                    >
                                        <Twitter color="#a88590" />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/avinash-mohare-0277b1203/"
                                        target="_blank"
                                    >
                                        <Linkedin color="#a88590" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.form} data-aos="flip-down">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
