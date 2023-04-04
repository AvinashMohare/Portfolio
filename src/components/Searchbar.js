import React, { useState } from "react";

import classes from "../styles/Searchbar.module.scss";
import Search from "@/Assets/svg/svg_components/Search";
import Voice from "@/Assets/svg/svg_components/Voice";
import Camera from "@/Assets/svg/svg_components/Camera";
import Clock from "@/Assets/svg/svg_components/Clock";

const SearchItems = [
    {
        query: "Want to know more about the person behind this website",
        link: "page_link",
    },
    {
        query: "Explore my highlights and achievements",
        link: "page_link",
    },
    {
        query: "Browse my project portfolio",
        link: "page_link",
    },
    {
        query: "Curious about my work experience and expertise",
        link: "page_link",
    },
    {
        query: "Discover my personal interests and hobbies outside of work",
        link: "page_link",
    },
    {
        query: "Explore my academic background and qualifications",
        link: "page_link",
    },
];

const Searchbar = () => {
    const [value, setValue] = useState("");
    const [show, setShow] = useState(true);

    const onChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div
            className={`${classes.rootSearchbar} ${
                show ? classes.active : classes.null
            }`}
        >
            <div
                className={`${classes.searchbar} ${
                    show ? classes.active : classes.inactive
                }`}
            >
                <div className={classes.searchIcon}>
                    <Search />
                </div>

                <div className={classes.searchInner}>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        onFocus={() => {
                            setShow(true);
                        }}
                        onBlur={() => setShow(false)}
                        placeholder="Hii I am Avinash "
                    />
                </div>

                <div className={classes.voice}>
                    <Voice />
                </div>
                <div className={classes.camera}>
                    <Camera />
                </div>
            </div>

            {show && (
                <>
                    <div className={classes.divider}></div>

                    <div
                        className={`${classes.dropdown} ${
                            show ? classes.active : classes.null
                        }`}
                    >
                        {SearchItems.map((item, index) => {
                            return (
                                <div className={classes.dropdownContainer}>
                                    <div className={classes.clock}>
                                        <Clock />
                                    </div>

                                    <p
                                        className={classes.dropdownRow}
                                        key={index}
                                    >
                                        {item.query}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default Searchbar;
