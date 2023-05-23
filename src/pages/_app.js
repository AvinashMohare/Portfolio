import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { useEffect } from "react";
import initializeAOS from "../utils/aos";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        initializeAOS(); // Initialize AOS on component mount
    }, []);

    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}
