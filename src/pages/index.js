import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.scss";
import Searchbar from "@/components/Searchbar";
import Title from "@/components/Title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className={classes.rootHome}>
            <div className={classes.Title}>
                <Title />
            </div>

            <Searchbar />
        </div>
    );
}
