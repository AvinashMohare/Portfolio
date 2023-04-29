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

                <div className={classes.content}>
                    <div className={classes.info}>
                        <p className={classes.p1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Viverra tristique placerat in massa
                            consectetur quisque nunc fames.
                        </p>

                        <p className={classes.p2}>
                            Magni dolores eos qui sed quia consequuntur ratione
                            voluptatem sequi nesciunt permano Nence of the stars
                            from which we spring muse about as a patch of light
                            billions upon billions.
                        </p>

                        <p className={classes.p3}>
                            Thank you for visiting my website! I appreciate your
                            interest and look forward to hearing from you. Don't
                            hesitate to send me a message or connect with me on
                            social media. Let's stay in touch!
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
                    <div className={classes.form}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
