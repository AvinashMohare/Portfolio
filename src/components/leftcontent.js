import React, { useState } from "react";

import Image from "next/image";
import classes from "../styles/LeftContent.module.scss";
import sign from "../Assets/images/Avinash_sign_BG_removed.png";
import Hamburger from "./hamburger";

const LeftContent = () => {
    const [active, setActive] = useState(false);

    const showHandler = () => {
        console.log("left");
        setActive(!active);
    };

    return (
        <div className={classes.rootLeftContent}>
            <div className={classes.safe} onClick={showHandler}>
                <Hamburger active={active} />
            </div>

            <div
                className={`${classes.slidingMenu} ${
                    active ? classes.activerootMenu : classes.rootMenu
                }`}
            >
                <div className={classes.Menu}>
                    <div className={classes.options}>
                        <a
                            href="#home"
                            className={classes.optionsLink}
                            onClick={showHandler}
                        >
                            <p>Home</p>
                        </a>

                        <a
                            href="#about"
                            className={classes.optionsLink}
                            onClick={showHandler}
                        >
                            <p>About me</p>
                        </a>

                        <a
                            href="#skills"
                            className={classes.optionsLink}
                            onClick={showHandler}
                        >
                            <p>Skills</p>
                        </a>

                        <a
                            href="#projects"
                            className={classes.optionsLink}
                            onClick={showHandler}
                        >
                            <p>Projects</p>
                        </a>

                        <a
                            href="#contact"
                            className={classes.optionsLink}
                            onClick={showHandler}
                        >
                            <p>Contact</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className={classes.alwaysDisplay}>
                <div className={classes.content}>
                    <div className={classes.info}>
                        <a
                            target="__blank_"
                            href="https://linktr.ee/avinash_mohare?utm_source=linktree_profile_share&ltsid=e873613c-66e9-461e-8d41-7583ba6373e9"
                        >
                            <p className={classes.heading}>Made By</p>
                            <p className={classes.answer}>Avinash Mohare</p>
                        </a>
                    </div>
                    {/* <div className={classes.info}>
                        <p className={classes.heading}>Role</p>
                        <p className={classes.answer}>Web Developer</p>
                    </div> */}
                    <div className={classes.info}>
                        <a
                            target="__blank_"
                            href="mailto:mohareavinash80@gmail.com"
                        >
                            <p className={classes.heading}>Email</p>
                            <p className={classes.answer}>
                                mohareavinash80@gmail.com
                            </p>
                        </a>
                    </div>
                    <div className={classes.info}>
                        <a target="__blank_" href="tel:8003780822">
                            <p className={classes.heading}>Phone</p>
                            <p className={classes.answer}>8003780822</p>
                        </a>
                    </div>
                </div>

                <div className={classes.sign}>
                    <Image
                        src={sign}
                        alt="My Signature"
                        height="100px"
                        width="100px"
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftContent;
