import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { useInView, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    const welcome = useRef(null);
    const inView = useInView(welcome, {amount:"all"})

    const [resize, setResize] = useState(window.innerWidth < 900);
    useEffect(() => {
        const handleResize = () => {
            setResize(window.innerWidth < 900); // Update state based on window size
        };

        window.addEventListener("resize", handleResize); // Add resize event listener

        return () => {
            window.removeEventListener("resize", handleResize); // Clean up listener on unmount
        };
    }, []);

    return  (
        <div className="container">
            <div className="typing">
            <TypeAnimation

                sequence={[
                // Same substring at the start will only be typed out once, initially
                    'Welcome!',
                    1000,
                    'Hello World!',
                    1000,
                    'Bienvenidos!',
                    1000,
                    '',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: resize? "4rem": "8rem", display: 'inline-block', color:"#d1190d", padding:"1rem",borderRadius:"1rem" }}
                repeat={Infinity}

            >

            </TypeAnimation>

            {/* <motion.h1
            ref={welcome}
            variants={{
                inView: {y:0, opacity:1},
                notInView: {y:"-30px", opacity:0}
            }}
            initial="notInView"
            animate={inView? "inView": "notInView"}
            transition={{duration:0.5,ease:"easeInOut"}}
            >
                Welcome to the MSU Computing Club!
                
            </motion.h1> */}
            </div>

        </div>
    );
}

export default Home;