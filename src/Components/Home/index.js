import React, { useRef } from "react";
import "./index.scss";
import { useInView, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    const welcome = useRef(null);
    const inView = useInView(welcome, {amount:"all"})

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
      style={{ fontSize: '8rem', display: 'inline-block', color:"#d1190d", padding:"1rem",borderRadius:"1rem" }}
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