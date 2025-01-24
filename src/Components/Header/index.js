import React, {useState, useEffect}from "react";
import "./index.scss";
import { useMotionValueEvent, motion, useScroll, AnimatePresence} from "framer-motion";
import Logo from "../../Assets/Images/computing-club-logo-white.png"

const Header = () => {

    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [menuOpen]);


    const item = {
        exit:{
            opacity: 0,
            height: 0,
            transition:{
                ease:"easeInOut",
                duration:0.3,
                delay:1.2
            }
        }
    }

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

            <a className="logo" href="#home"><img src={Logo} alt="" /></a>
            <div className="buttons">
                
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#meetings">Meetings</a>
                <a href="#calendar">Calendar</a>
                <a href="#e-board">E-Board</a>
                <a href="#socials">Socials</a>
            </div>
            <div className="menu" onClick={toggleMenu}>
                        &#9776;
            </div>
            <AnimatePresence>
                {
                    menuOpen && (

                        // Menu container
                        
                        <motion.div 
                        variants={item}
                        initial={{height:0,opacity:0}}
                        animate={{height:"100vh",opacity:1}}
                        transition={{delay:.1}}
                        exit="exit"
                        className="menu-container">
                        <div className="btn-close" onClick={toggleMenu}>&times;</div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#home"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.6}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.6}
                                    }}>
                                        Home
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#about"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.5}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.5
                                        }
                                    }}>
                                         About
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#meetings"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.4}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.4}
                                    }}>
                                        Meetings
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    href="#calendar"
                                    className="motion-a"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.3}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.3}
                                    }}> 
                                        Calendar
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#e-board"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.2}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.2}
                                    }}>
                                        E-Board
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#socials"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.1}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.1}
                                    }}>
                                        Socials
                                </motion.a>
                            </div>
                        </motion.div>
                    )
                }
                </AnimatePresence>

    </motion.div>
    );
};

export default Header;