import React from 'react';
import resumePdf from '../../resources/Resume.pdf'
import './styles.scss'

const Resume=()=>{
    return(
        <div>
            <embed src={resumePdf} className="resumePdf" type="application/pdf"/>
        </div>
    )
}

export default Resume;