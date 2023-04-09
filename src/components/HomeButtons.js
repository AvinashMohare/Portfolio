import classes from "../styles/HomeButtons.module.scss";

const HomeButtons = () => {
    return (
        <div className={classes.rootButtons}>
            <div className={classes.b1}>
                <p>Afolio Search</p>
            </div>
            <div className={classes.b2}>
                <p>I'm Feeling Lucky</p>
            </div>
        </div>
    );
};

export default HomeButtons;
