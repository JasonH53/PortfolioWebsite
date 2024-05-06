import './styles.scss'
import { useState } from 'react'
import math136 from '../../resources/MATH_136.pdf'
import math138 from '../../resources/MATH_138.pdf'
import cs136 from '../../resources/CS_136.pdf'
import math_image1 from '../../resources/math_image1.jpg'

const terms =[
    {
        filterId: 1,
        label: '1A'
    },
    {
        filterId: 2,
        label: '1B'
    },
    {
        filterId: 3,
        label: '2A'
    }
]

const courses = [
    // 1A
    {
        id: 1,
        name: 'CS 135',
        link: '',
        hasNotes: false
    },
    {
        id: 1,
        name: 'MATH 135',
        link: '',
        hasNotes: false
    },
    {
        id: 1,
        name: 'MATH 137',
        link: '',
        hasNotes: false
    },
    {
        id: 1,
        name: 'COMMST 223',
        link: '',
        hasNotes: false
    },
    {
        id: 1,
        name: 'ECON 102',
        link: '',
        hasNotes: false
    },
    // 1B
    {
        id: 2,
        name: 'CS 136',
        link: cs136,
        hasNotes: true
    },
    {
        id: 2,
        name: 'MATH 136',
        link: math136,
        hasNotes: true
    },
    {
        id: 2,
        name: 'MATH 138',
        link: math138,
        hasNotes: true
    },
    {
        id: 2,
        name: 'CLAS 104',
        link: '',
        hasNotes: false
    },
    {
        id: 2,
        name: 'ECON 101',
        link: '',
        hasNotes: false
    },
    {
        id: 3,
        name: 'CS 246',
        link: '',
        hasNotes: false
    },
    {
        id: 3,
        name: 'CS 245',
        link: '',
        hasNotes: false
    },
    {
        id: 3,
        name: 'STAT 230',
        link: '',
        hasNotes: false
    },
    {
        id: 3,
        name: 'ENGL 119',
        link: '',
        hasNotes: false
    },
    {
        id: 3,
        name: 'CLAS 202',
        link: '',
        hasNotes: false
    },
    {
        id: 3,
        name: 'EARTH 123',
        link: '',
        hasNotes: false
    }
]

const Notes =()=> {

    const [term, setTerm] = useState(2);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currId) {
        setTerm(currId);
    }

    function handleHover(idx) {
        setHoveredValue(idx);
    }

    const filteredItems = courses.filter(item => item.id === term);

    return (
        <section id="notes" className="notes">

            <div className="notes_content">
                <ul className="notes_content_filter">
                    {
                        terms.map((item) => (
                            <li className={item.filterId === term ? 'active' : ''}
                            onClick={() => handleFilter(item.filterId)} key={ item.filterId }>
                            { item.label }
                            </li>
                        ))
                    }
                </ul>
                <div className="notes_content_cards">
                {filteredItems.map((item, index) => (
                        <div className="notes_content_cards_item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}>
                            <p className="notes_title">{item.name}</p>

                            <div className="overlay">
                                {index === hoveredValue && (
                                    item.hasNotes ? 
                                    <div>
                                        <button onClick={() => window.location.href = item.link}>View</button>
                                    </div> : 
                                    <div className="desc">
                                        <p>No Notes Available</p>
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

export default Notes;