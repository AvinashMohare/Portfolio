import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import classes from "../styles/HeaderSearch.module.scss";

import Link from "next/link";

import BlueSearch from "@/Assets/svg/svg_components/BlueSearch";
import Voice from "@/Assets/svg/svg_components/Voice";
import Camera from "@/Assets/svg/svg_components/Camera";
import Clock from "@/Assets/svg/svg_components/Clock";
import HomeButtons from "./HomeButtons";

const SearchItems = [
    {
        query: "Want to know more about the person behind this website",
        link: "/about",
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

const HeaderSearch = () => {
    const router = useRouter();

    const inputRef = useRef(null);

    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);

    const onChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };

    useEffect(() => {
        window.addEventListener("click", (event) => {
            if (event.target.id !== "_dont_hide_on_clicked_") setShow(false);
        });

        return () => {
            window.removeEventListener("click", () => {});
        };
    }, []);

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
                id="_dont_hide_on_clicked_"
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                <div className={classes.searchInner}>
                    <input
                        ref={inputRef}
                        id="_dont_hide_on_clicked_"
                        type="text"
                        value={value}
                        onChange={onChange}
                        onFocus={() => {
                            setShow(true);
                        }}
                    />
                </div>

                <div className={classes.voice}>
                    <Voice />
                </div>
                <div className={classes.camera}>
                    <Camera />
                </div>
                <div className={classes.searchIcon}>
                    <BlueSearch />
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
                            console.log(item.link);
                            return (
                                <div className={classes.dropdownContainer}>
                                    <Link
                                        id="_dont_hide_on_clicked_"
                                        href={item.link}
                                        onClick={() => {
                                            setShow(true);
                                            return router.push(item.link);
                                        }}
                                    >
                                        <div className={classes.clock}>
                                            <Clock />
                                        </div>

                                        <p
                                            className={classes.dropdownRow}
                                            key={index}
                                        >
                                            {item.query}
                                        </p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default HeaderSearch;
