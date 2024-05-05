import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import './styles.scss'
import myPhoto from '../../resources/personal_photo.png'

const self_desc = "I'm a computer science student at the University of Waterloo. I am very passionate about software development and machine learning. My hobbies include working out, coding, cooking and video games. I was also one of the few who transferred from Mathematics to Computer Science in my 1B term. If you wonder how I did it, checkout my"
const more_desc = "I started coding when I was Grade 8, starting with Swift and Python but things really clicked when I first dived into Java and started developing Minecraft mods. I also previously ran a YouTube channel with 20k+ subscribers but it was put aside due to my other commitments."

const About=()=>{
    return(
        <div>
            <section id="about" className="about">
                <div className="header">
                    <PageHeaderContent
                    headerText = "About Me"
                    icon={<BsInfoCircleFill size = {40}/>}  />
                </div>
                <div className="about_content">
                    <div className="about_content_info">
                        <h3>Hi! I am Jason ...</h3>
                        <br/>
                        <p>{self_desc} <a href="https://medium.com/@jasonh53/how-i-transferred-to-cs-university-of-waterloo-in-2024-d94139c368af">Medium Article.</a></p>
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