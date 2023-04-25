import Landing from "@/components/landing";
import LeftContent from "@/components/leftcontent";
import classes from "../styles/Portfolio.module.scss";
import HeaderSearch from "@/components/HeaderSearch";

const Portfolio = () => {
    return (
        <div className={classes.rootPortfolio}>
            <div className={classes.LeftContent}>
                <LeftContent />
            </div>
            <div className={classes.content}>
                <Landing />
            </div>
        </div>
    );
};

export default Portfolio;
