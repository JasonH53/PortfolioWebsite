import { useEffect, useState, React } from 'react'
import resumePdf from '../../resources/Resume.pdf'
import './styles.scss'

const resumeData = {
    "education": [
        {
            "school": "University of Waterloo",
            "degree": "Bachelors of Computer Science, Artificial Intelligence Specialization",
            "time": "September 2023 - Present",
            "gpa": "3.96/4.0 (CAV: 92%)",
            "courses": {
                "CS Courses:": "Algorithm Design and Data Abstraction, Tools & Technique for Software Development, Designing Function Programs",
                "Math and Stats Courses:": "Linear Algeba, Probability, Calculus 1 & 2"
            },
            "description": [
                "Deans Honours List",
                "Term Distinction",
                "President's Scholarship of Distinction"
            ]
        },
        {
            "school": "Canadian International School of Hong Kong",
            "degree": "International Baccalaureate Diploma and OSSD",
            "time": "September 2017 - June 2020",
            "gpa": "IB: 40/45, OSSD: 97% (GPA: 4.0)",
            "description": [
                "Maple Leaf Award",
                "Ontario Merit Scholar",
                "Honour Roll",
                "Learner Profile Award: Knowledgeable, Inquirer"
            ]
        }
    ],
    "experience": [
        {
            "company": "Bonumcare",
            "title": "Software Developer",
            "time": "May 2023 - August 2023",
            "description":
                ["Developed a Conversation Buddy chatbot to chat with lonely elderly individuals"]
        }
    ]
}

const Resume=()=>{

    const [education, setEducation] = useState();
    const [experience, setExperience] = useState();
    const [skills, setSkills] = useState();

    useEffect(() => {
        setEducation(resumeData.education.map(function (education) {
            return <div key={education.school}>
                <h3>{education.school} &bull; {education.time}</h3>
                <p className="info">
                    {education.degree} &bull; {education.gpa}
                    {education.courses && Object.keys(education.courses).map(function (item) {
                        return <div className="courses">
                            <p>{item}</p>
                            <p>{education.courses[item]}</p>
                        </div>
                    })}
                    <div className="description">
                        Honours:
                        {education.description.map((item) => {
                            return <p>&bull;  {item} </p>
                        })}
                    </div>
                </p>
            </div>
        }))
        setExperience(resumeData.experience.map(function (work) {
            return <div key={work.company}>
                <h3>{work.company} &bull; {work.time}</h3>
                <p className="info">{work.title}</p>
                <div className="description">
                    {work.description.map((item) => {
                        return <p> &bull; {item}</p>
                    })}
                </div>
            </div>
        }))
    })

    return(
        // <section id="resume">
        //     <div id="education">
        //         <h1><span>Education</span></h1>
        //         {education}
        //     </div>
        //     <div id="experience">
        //         <h1><span>Experience</span></h1>
        //         {experience}
        //     </div>
        //     {/* <div id="skills">
        //         <h1><span>Skills</span></h1>
        //         {skills}
        //     </div> */}
        // </section>
        <div>
            <embed src={resumePdf} className="resumePdf" type="application/pdf"/>
        </div>
    )
}

export default Resume;