import AOS from "aos";
import "aos/dist/aos.css";

const initializeAOS = () => {
    AOS.init({
        offset: 150,
        duration: 500,
    });
};

export default initializeAOS;
