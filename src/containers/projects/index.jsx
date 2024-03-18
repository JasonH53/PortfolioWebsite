import React from 'react';
import BoulderPhoto from '../../resources/BoulderSolver.jpg'
import AssignPlanner from '../../resources/UWAssignmentPlanner.png'
import PersonalWebsite from '../../resources/PersonalWebsite.png'
import YouTubeChan from '../../resources/YouTubeChannel.png'
import SLMod from '../../resources/SLMod.png'
import SunshinePhoto from '../../resources/sunshineAction.jpg'
import ConversationBuddy from '../../resources/bonumcare.png'
import PMHK from '../../resources/PMHK.png'
import PPP from '../../resources/PPP.png'
import './styles.scss'
import { useState } from 'react';

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Others'
    }
]

const portfolioData = [
    {
        id: 2,
        name: "Boulder Solver",
        image: BoulderPhoto,
        link: "https://github.com/JasonH53/BoulderSolver",
        desc: "Solver for the famous Boulder Box Push Puzzle (7x7), built entirely with Java."
    },
    {
        id: 2,
        name: "Waterloo Assignment Planner",
        image: AssignPlanner,
        link: "https://github.com/JasonH53/UWAssignmentPlanner",
        desc: "Assignment Planner designed for UWaterloo students, built with MEAN stack."
    },
    {
        id: 2,
        name: "Personal Website",
        image: PersonalWebsite,
        link: "/",
        desc: "The website you are visiting right now! It is built with React"
    },
    {
        id: 3,
        name: "YouTube Channel",
        image: YouTubeChan,
        link: "https://youtube.com/c/JasonStrafes",
        desc: "YouTube channel with over 22,000 subscribers, documenting gameplay and history of games"
    },
    {
        id: 2,
        name: "SLMod",
        image: SLMod,
        link: "https://github.com/JasonH53/SLMod",
        desc: "QOL game modification for Minecraft, built with Java"
    },
    {
        id: 3,
        name: "Prev. HR Manager @ Sunshine Action CDNIS",
        image: SunshinePhoto,
        link: "https://www.sunshine-action.org/",
        desc: "Organized weekly meetings and volunteered 3 hours weekly to help the disadvantaged, meeting Sustainable Development Goals #1, 2, 10, 17"
    },
    {
        id: 2,
        name: "Conversation Buddy @ Bonumcare",
        image: ConversationBuddy,
        link: "https://bonumcare.com/conversation-buddy",
        desc: "Now inactive but previously developed an interactive chat bot to chat with lonely elderlies"
    },
    {
        id: 3,
        name: "Research on Air Pollution in Hong Kong",
        image: PMHK,
        link: "https://docs.google.com/document/d/1E4uAIjOeHOV3LNY5y7Xw_vQI0zFsir-kr-7wKMLjG_U/edit?usp=sharing",
        desc: "Analyzing the relationship between Altitude and the concentration of PM2.5, PM10, and PM1.0 as altitude decreases in Hong Kong"
    },
    {
        id: 3,
        name: "Research on the Paycheck Protection Program in Houston",
        image: PPP,
        link: "https://docs.google.com/document/d/141zf7djZBWBaddjscn_EwI9g5a2ge7TOE3UwnGufamA/edit?usp=sharing",
        desc: "Analyzing the effectiveness of the Paycheck Protection Program in lowering COVID related unemployment in Houston, TX"
    }
]


const Projects = () => {

    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId)
    };

    function handleHover(index) {
        setHoveredValue(index);
    }

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredValue)

    return (
        <section id="portfolio" className="projects">
            <div className="portfolio_content">
                <ul className="portfolio_content_filter">
                    {
                        filterData.map((item) => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio_content_cards">
                    {filteredItems.map((item, index) => (
                        <div className="portfolio_content_cards_item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}>
                            <a>
                                <img alt="project" src={item.image} />
                            </a>
                            <div className="overlay">
                                {index === hoveredValue && (
                                    <div>
                                        <p className="title">{item.name}</p>
                                        <p className="desc">{item.desc}</p>
                                        <button onClick={() => window.location.href = item.link}>Visit</button>
                                        <div />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;