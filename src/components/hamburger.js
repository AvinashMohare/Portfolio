import { useState } from "react";
import classes from "../styles/Hamburger.module.scss";

const Hamburger = (props) => {
    return (
        <div className={classes.menuContainer}>
            <div
                className={
                    props.active ? classes.activeHamburger : classes.hamburger
                }
            ></div>
        </div>
    );
};

export default Hamburger;
