import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import './styles.scss'
import myPhoto from '../../resources/personal_photo.png'

const self_desc = "I'm a student at the University of Waterloo. I am very passionate about software development and machine learning. My hobbies include working out, coding, cooking and video games."
const more_desc = "I started coding when I was Grade 8, starting with Swift and Python but things really clicked when I first dived into Java and started developing Minecraft mods. I also previously ran a YouTube channel with 20k+ subscribers but it was put aside due to my other commitments."

const About=()=>{
    return(
        <div>
            <section id="about" className="about">
                <PageHeaderContent
                headerText = "About Me"
                icon={<BsInfoCircleFill size = {40}/>}  />
                <div className="about_content">
                    <div className="about_content_info">
                        <h3>Hi! I am Jason ...</h3>
                        <br/>
                        <p>{self_desc}</p>
                        <br/>
                        <p>{more_desc}</p>
                    </div>
                    <div className="about_content_photo">
                        <img src={myPhoto}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;