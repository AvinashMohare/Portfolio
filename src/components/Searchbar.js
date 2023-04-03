import React from "react";

import classes from "../styles/Searchbar.module.scss";
import Search from "@/Assets/svg/svg_components/search";

const Searchbar = () => {
    return (
        <div className={classes.rootSearchbar}>
            <div className={classes.searchbar}>
                <div className={classes.searchIcon}>
                    <Search />
                </div>
                <input placeholder="Hii I am Avinash " />
            </div>
        </div>
    );
};

export default Searchbar;
