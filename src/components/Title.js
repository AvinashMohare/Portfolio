import classes from "../styles/Title.module.scss";

const AfolioCharacters = [
    {
        char: "A",
        color: "#4285F4",
    },
    {
        char: "f",
        color: "#EA4335",
    },
    {
        char: "o",
        color: "#FBBC05",
    },
    {
        char: "l",
        color: "#4285F4",
    },
    {
        char: "i",
        color: "#34A853",
    },
    {
        char: "o",
        color: "#EA4335 ",
    },
];

const Title = () => {
    return (
        <div className={classes.rootTitle}>
            <p>
                {AfolioCharacters.map(({ color, char }, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                color,
                            }}
                        >
                            {char}
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default Title;
