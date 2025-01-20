import React, { useRef } from "react";
import "./index.scss";
import { useInView, motion } from "framer-motion";

const Home = () => {
    const welcome = useRef(null);
    const inView = useInView(welcome, {amount:"all"})

    return  (
        <div className="container">
            <motion.h1
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
                
            </motion.h1>

        </div>
    );
}

export default Home;