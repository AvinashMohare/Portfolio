import AOS from "aos";
import "aos/dist/aos.css";

const initializeAOS = () => {
    AOS.init({
        offset: 200,
        duration: 1000,
        // Add any configuration options here
    });
};

export default initializeAOS;
