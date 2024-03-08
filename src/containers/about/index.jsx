import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import './styles.scss'
import myPhoto from '../../resources/personal_photo.png'

const selfDesc = "I'm a first-year Computer Science student at the University of Waterloo, diving headfirst into the world of software development and machine learning. My passion lies in crafting innovative solutions and exploring the potential of AI."

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
                        <p>{selfDesc}</p>
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