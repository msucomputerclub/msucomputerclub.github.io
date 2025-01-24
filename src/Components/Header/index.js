import React, {useState}from "react";
import "./index.scss";
import { useMotionValueEvent, motion, useScroll} from "framer-motion";

const Header = () => {

    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
    const [top,setTop] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if(latest < 150){
            setTop(true);
        } else {
            setTop(false);
        };

        if(latest > 150 && latest > previous){
            setHidden(true);
        } else {
            setHidden(false);
        };
        
    });

    return (
    <motion.div 
        className={top? "content top": "content"}
        variants={{
            visible: {y:0},
            hidden: {y: "-100%"},
        }}
        animate={hidden ? "hidden":"visible"}
        transition={{ duration:0.35, ease:"easeInOut"}}
        
    >
            <h1>MSU Computing Club</h1>
            <div className="buttons">
                
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#meetings">Meetings</a>
                <a href="#calendar">Calendar</a>
                <a href="#e-board">E-Board</a>
                <a href="#socials">Socials</a>
            </div>
    </motion.div>
    );
};

export default Header;