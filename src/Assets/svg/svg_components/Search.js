import classes from "../svg_components_styles/Search.module.scss";

const Search = () => {
    return (
        <svg className={classes.search} viewBox="0 0 24 24" fill="none">
            <path
                d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
                stroke="#000000"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default Search;
