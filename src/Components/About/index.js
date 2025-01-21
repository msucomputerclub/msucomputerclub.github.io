import { useRef } from "react";
import React from "react";
import {motion, useInView} from "framer-motion";
import "./index.scss";

const About = () => {
    return (
        <div className="about">
            <div className="ABOUTUS">ABOUT US</div>
            <div className="about-text">
                <h1>Hello World!</h1>
                <p> 
                Welcome to the Montclair State University Computing Club!

                Our mission is to enhance the educational experience of students in the Computer Science department while fostering a strong, supportive community for networking and collaboration.

                We are dedicated to helping students succeed both academically and professionally by offering:

                    <ul>
                        <li><span>Hackathons</span> to challenge creativity and coding skills</li>
                        <li><span>Workshops</span> for hands-on learning opportunities</li>
                        <li><span>Industry Talks</span> with professionals sharing insights and advice</li>
                        <li><span>Interview prep</span> to help members land their dream roles</li>
                    </ul>
                    Our long-term vision is to build a strong reputation for Montclair's computer science students as innovative, skilled, and collaborative contributors to the tech world.

                    The Computing Club is open to all Montclair State students, regardless of major or background. We pride ourselves on fostering an inclusive environment where everyone is encouraged to share ideas, collaborate, and grow.

                    Join us and be part of a community that's shaping the future of tech!
                </p>
            </div>
        </div>
    )
};

export default About;
