import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Contact from "./contact";
import classes from "../styles/ContactForm.module.scss";
import Linkedin from "@/Assets/svg/svg_components/Linkedin";
import Instagram from "@/Assets/svg/svg_components/Instagram";
import Twitter from "@/Assets/svg/svg_components/Twitter";

function ContactForm() {
    const [state, handleSubmit] = useForm("xgebdwgo");
    if (false) {
        return (
            <div className={classes.Submitted}>
                <p className={classes.text}>Thank you for contacting!</p>
                <p className={classes.line2}>
                    I have received your message and will respond as soon as
                    possible. For faster communication, please feel free to
                    connect me on my social media handles.
                </p>
                <div className={classes.svgLinked}>
                    <div>
                        <a
                            href="https://www.instagram.com/avinash_mohare/?igshid=ZDdkNTZiNTM%3D"
                            target="_blank"
                        >
                            <Instagram color="#fff" />
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://twitter.com/Avinash__Mohare"
                            target="_blank"
                        >
                            <Twitter color="#fff" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/avinash-mohare-0277b1203/"
                            target="_blank"
                        >
                            <Linkedin color="#fff" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={classes.formDesign}>
            <div className={classes.rootform}>
                <form onSubmit={handleSubmit}>
                    <p className={classes.formInputP}>
                        <input
                            className={classes.formInput}
                            id="name"
                            type="text"
                            name="Name"
                            placeholder="Name"
                        />
                    </p>
                    <p className={classes.formInputP}>
                        <input
                            className={classes.formInput}
                            id="email"
                            type="email"
                            name="Email"
                            placeholder="Email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </p>
                    <p className={classes.formInputP}>
                        <input
                            className={classes.formInput}
                            id="subject"
                            type="text"
                            name="Subject"
                            placeholder="Subject"
                        />
                    </p>
                    <p className={classes.formM}>
                        <textarea
                            className={classes.formMessage}
                            id="message"
                            name="Message"
                            placeholder="Message"
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </p>
                    <p className={classes.contactSubmitHolder}>
                        <button
                            className={classes.button}
                            type="submit"
                            value="SEND"
                            disabled={state.submitting}
                        >
                            Submit
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
