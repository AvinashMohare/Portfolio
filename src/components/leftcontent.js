import React from "react";

import classes from "../styles/LeftContent.module.scss";

const LeftContent = () => {
    return (
        <div className={classes.rootLeftContent}>
            <div className={classes.content}>
                <div className={classes.info}>
                    <p className={classes.heading}>Name</p>
                    <p className={classes.answer}>Avinash Mohare</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.heading}>Role</p>
                    <p className={classes.answer}>Web Developer</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.heading}>Email</p>
                    <p className={classes.answer}>mohareavinash80@gmail.com</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.heading}>Phone</p>
                    <p className={classes.answer}>8003780822</p>
                </div>
            </div>
        </div>
    );
};

export default LeftContent;
