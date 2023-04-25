import Head from "next/head";
import Landing from "@/components/landing";
import LeftContent from "@/components/leftcontent";
import classes from "../styles/Portfolio.module.scss";
import About from "@/components/about";

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <div className={classes.rootPortfolio}>
                <div className={classes.LeftContent}>
                    <LeftContent />
                </div>
                <div className={classes.content}>
                    <Landing />
                    <About />
                </div>
            </div>
        </>
    );
};

export default Portfolio;
