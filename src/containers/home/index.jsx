import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import './styles.scss'
import { ReactTyped } from "react-typed";

const Home=()=>{

    const navigate = useNavigate();

    const navigateToContact=()=>{
        navigate("/resume");
    }

    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1 className="responsive-headline">Hi! I'm Jason.</h1>
                <h2 className="responsive-headline">
                        <ReactTyped className="typed-text"
                            strings={[
                                "I am a UWaterloo Student",
                                "I am a Software Engineer",
                                "I am a Content Creator",
                            ]}
                            typeSpeed={35}
                            backSpeed={35}
                            loop
                            smartBackspace
                        />
                    </h2>
            </div>
            <Animate play duration={1} delay={1}
            start={{
                transform : 'translateY(550px)',
            }}
            
            end={{
                transform: 'translateX(0px)',
            }}>
                <div className="home_contact">
                    <button onClick={navigateToContact}>Resume</button>
                </div>
            </Animate>
        </section>
    )
}

export default Home;