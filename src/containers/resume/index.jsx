import { React } from 'react'
import resumePdf from '../../resources/Resume.pdf'
import './styles.scss'

const Resume=()=>{
    return(
        <div>
            <object data={resumePdf} className="resumePdf" type="application/pdf" width="100%" height="100%">
                <p>Your web browser doesn't have a PDF plugin.
                    Instead you can <a href={resumePdf}>click here to
                    download the PDF file.</a></p>
            </object>
        </div>
    )
}

export default Resume;