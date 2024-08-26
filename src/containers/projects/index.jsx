import React, { useState, useEffect, useRef, useCallback } from 'react';
import './styles.scss';
import BoulderPhoto from '../../resources/BoulderSolver.png'
import AssignPlanner from '../../resources/UWScheduler.png'
import UWCompass from '../../resources/UWCompass.png'
import PersonalWebsite from '../../resources/PersonalWebsite.png'
import YouTubeChan from '../../resources/YouTubeChannel.png'
import SLMod from '../../resources/SLMod.png'
import SunshinePhoto from '../../resources/sunshineAction.jpg'
import ConversationBuddy from '../../resources/bonumcare.png'
import chess from '../../resources/chess.png'
import PMHK from '../../resources/PMHK.png'
import PPP from '../../resources/PPP.png'
import notes from '../../resources/notes.png'
import notesPdf from '../../resources/CS246.pdf'
import './styles.scss'

const filterData = [
    { filterId: 1, label: 'All' },
    { filterId: 2, label: 'Development' },
    { filterId: 4, label: 'Research' },
    { filterId: 3, label: 'Others' }
];
  

const portfolioData = [
    {
        id: 2,
        name: "UWScheduler",
        image: AssignPlanner,
        link: "https://github.com/JasonH53/UWAssignmentPlanner",
        desc: "Assignment Planner and Scheduler designed for UWaterloo students, built with MEAN stack."
    },
    {
      id: 2,
      name: "UWCompass",
      image: UWCompass,
      link: "https://jasonh53.github.io/UWCompass/",
      desc: "Course Planner and Gruadation Tracker, built with MERN stack"
    },
    {
        id: 2,
        name: "Personal Website",
        image: PersonalWebsite,
        link: "https://www.jasonhon.com/#/",
        desc: "The website you are visiting right now! It is built with React"
    },
    {
        id: 2,
        name: "Chess Engine",
        image: chess,
        link: "https://github.com/pacman-ty/chess-engine",
        desc: "Chess Engine with various levels of AI opponents developed using C++"
    },
    {
      id: 2,
      name: "SLMod",
      image: SLMod,
      link: "https://github.com/JasonH53/SLM",
      desc: "QOL game modification for Minecraft, built with Java"
    },
    {
      id: 2,
      name: "Boulder Solver",
      image: BoulderPhoto,
      link: "https://github.com/JasonH53/BoulderSolver",
      desc: "Solver for the famous Boulder Box Push Puzzle (7x7), built entirely with Java."
    },
    {
        id: 3,
        name: "YouTube Channel",
        image: YouTubeChan,
        link: "https://youtube.com/c/JasonStrafes",
        desc: "YouTube channel with over 20,000 subscribers, documenting gameplay and history of games"
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
        name: "Prev. HR Manager @ Sunshine Action CDNIS",
        image: SunshinePhoto,
        link: "https://www.sunshine-action.org/",
        desc: "Organized weekly meetings and volunteered 3 hours weekly to help the disadvantaged, meeting Sustainable Development Goals #1, 2, 10, 17"
    },
    {
        id: 4,
        name: "Research on Air Pollution in Hong Kong",
        image: PMHK,
        link: "https://docs.google.com/document/d/1E4uAIjOeHOV3LNY5y7Xw_vQI0zFsir-kr-7wKMLjG_U/edit?usp=sharing",
        desc: "Analyzing the relationship between Altitude and the concentration of PM2.5, PM10, and PM1.0 as altitude decreases in Hong Kong"
    },
    {
        id: 4,
        name: "Research on the Paycheck Protection Program in Houston",
        image: PPP,
        link: "https://docs.google.com/document/d/141zf7djZBWBaddjscn_EwI9g5a2ge7TOE3UwnGufamA/edit?usp=sharing",
        desc: "Analyzing the effectiveness of the Paycheck Protection Program in lowering COVID related unemployment in Houston, TX"
    },
    {
        id: 3,
        name: "CS 246 - OOP Course Notes",
        image: notes,
        link: notesPdf,
        desc: "LaTeX typed course notes for CS 246, Object Oriented Programming"
    }
]

const Projects = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredItems = filteredValue === 1 ? portfolioData :
    portfolioData.filter(item => item.id === filteredValue);

  const itemsPerSlide = 3;
  const totalSlides = Math.max(1, Math.ceil(filteredItems.length / itemsPerSlide));

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
    setCurrentSlide(0);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1
      }
    );
  
    const currentSection = sectionRef.current;
  
    if (currentSection) {
      observer.observe(currentSection);
    }
  
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible && totalSlides > 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isVisible, totalSlides, nextSlide]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section id="portfolio" className="projects" ref={sectionRef}>
      <div className="portfolio-content">
        <div className="portfolio-filter">
          {filterData.map((item) => (
            <button
              key={item.filterId}
              className={item.filterId === filteredValue ? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="portfolio-slider">
          <div className="slider-container" ref={sliderRef}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="slide-group">
                {filteredItems.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item, index) => (
                  <div key={index} className="project-card">
                    <img src={item.image} alt={item.name} />
                    <div className="project-info">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                      <button onClick={() => window.open(item.link, '_blank')}>Visit</button>
                    </div>
                  </div>
                ))}
                {Array.from({ length: Math.max(0, itemsPerSlide - (filteredItems.length - slideIndex * itemsPerSlide)) }).map((_, i) => (
                  <div key={`empty-${i}`} className="project-card empty"></div>
                ))}
              </div>
            ))}
          </div>
          {totalSlides > 1 && (
            <>
              <button className="prev-btn" onClick={prevSlide}>&lt;</button>
              <button className="next-btn" onClick={nextSlide}>&gt;</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;