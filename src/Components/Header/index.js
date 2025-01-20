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
                
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Meetings">Meetings</a>
                <a href="#Announcements">Announcements</a>
                <a href="#E-Board">E-Board</a>
                <a href="#Socials">Socials</a>
            </div>
    </motion.div>
    );
};

export default Header;