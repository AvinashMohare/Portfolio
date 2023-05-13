import Dots from "@/Assets/svg/svg_components/Dots";
import classes from "../styles/Header.module.scss";

const Header = () => {
    return (
        <div className={classes.rootHeader}>
            <div className={classes.headerControls}>
                <div className={classes.text}>
                    <a
                        target="__blank_"
                        href="mailto:mohareavinash80@gmail.com"
                    >
                        Gmail
                    </a>
                </div>
                <div className={classes.text}>
                    <p>Images</p>
                </div>

                <div className={classes.dots}>
                    <Dots />
                </div>
                <div className={classes.logo}>
                    <img src="https://lh3.googleusercontent.com/ogw/AAEL6sjPYKRuIUwl70nypeeeNDxyVXAGTb0hWfj0svp6fA=s32-c-mo" />
                </div>
            </div>
        </div>
    );
};

export default Header;
