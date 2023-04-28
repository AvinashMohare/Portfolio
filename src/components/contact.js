import Instagram from "@/Assets/svg/svg_components/Instagram";
import classes from "../styles/Contact.module.scss";
import Twitter from "@/Assets/svg/svg_components/Twitter";
import Linkedin from "@/Assets/svg/svg_components/Linkedin";
import Github from "@/Assets/svg/svg_components/Github";

const Contact = () => {
    return (
        <div className={classes.rootContact}>
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
                            Energy hidden in matter a mote of lorem ipsum dust
                            suspended in a sunbeam billions upon ratione
                            voluptatem sequi nesciunt permano lorem ipsum.
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
                                        <Instagram />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://twitter.com/Avinash__Mohare"
                                        target="_blank"
                                    >
                                        <Twitter />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/avinash-mohare-0277b1203/"
                                        target="_blank"
                                    >
                                        <Linkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.formDesign}>
                        <div className={classes.rootform}>
                            <form>
                                <p className={classes.formInputP}>
                                    <input
                                        className={classes.formInput}
                                        id="name"
                                        type="text"
                                        name="your-name"
                                        placeholder="Name"
                                    />
                                </p>
                                <p className={classes.formInputP}>
                                    <input
                                        className={classes.formInput}
                                        id="contact-email"
                                        type="email"
                                        name="your-email"
                                        placeholder="Email"
                                    />
                                </p>
                                <p className={classes.formInputP}>
                                    <input
                                        className={classes.formInput}
                                        id="subject"
                                        type="text"
                                        name="your-subject"
                                        placeholder="Subject"
                                    />
                                </p>
                                <p className={classes.formM}>
                                    <textarea
                                        className={classes.formMessage}
                                        id="message"
                                        name="your-message"
                                        placeholder="Message"
                                    ></textarea>
                                </p>
                                <p className={classes.contactSubmitHolder}>
                                    <input
                                        className={classes.button}
                                        type="submit"
                                        value="SEND"
                                    />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
