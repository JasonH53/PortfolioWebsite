import React, { useState } from 'react';
import './styles.scss';
import math136 from '../../resources/MATH_136.pdf';
import math138 from '../../resources/MATH_138.pdf';
import cs136 from '../../resources/CS_136.pdf';
import cs246 from '../../resources/CS246.pdf';
import cs245 from '../../resources/CS245.pdf';
import stat230 from '../../resources/STAT230.pdf';
import engl119 from '../../resources/ENGL119.pdf';

const terms = [
  { id: 1, label: '1A' },
  { id: 2, label: '1B' },
  { id: 3, label: '2A' },
  { id: 4, label: '2B' }
];

const courses = [
  // 1A
  { id: 1, name: 'CS 135', link: '', hasNotes: false, WIP: false },
  { id: 1, name: 'MATH 135', link: '', hasNotes: false, WIP: false },
  { id: 1, name: 'MATH 137', link: '', hasNotes: false, WIP: false },
  { id: 1, name: 'COMMST 223', link: '', hasNotes: false, WIP: false },
  { id: 1, name: 'ECON 102', link: '', hasNotes: false, WIP: false },
  // 1B
  { id: 2, name: 'CS 136', link: cs136, hasNotes: true, WIP: false },
  { id: 2, name: 'MATH 136', link: math136, hasNotes: true, WIP: false },
  { id: 2, name: 'MATH 138', link: math138, hasNotes: true, WIP: false },
  { id: 2, name: 'CLAS 104', link: '', hasNotes: false, WIP: false },
  { id: 2, name: 'ECON 101', link: '', hasNotes: false, WIP: false },
  // 2A
  { id: 3, name: 'CS 246', link: cs246, hasNotes: true, WIP: false },
  { id: 3, name: 'CS 245', link: cs245, hasNotes: true, WIP: false },
  { id: 3, name: 'STAT 230', link: stat230, hasNotes: true, WIP: false },
  { id: 3, name: 'ENGL 119', link: engl119, hasNotes: true, WIP: false },
  { id: 3, name: 'CLAS 202', link: '', hasNotes: false, WIP: false },
  { id: 3, name: 'EARTH 123', link: '', hasNotes: false, WIP: false },
  // 2B
  { id: 4, name: 'CS 240', link: '', hasNotes: false, WIP: false },
  { id: 4, name: 'CS 241E', link: '', hasNotes: false, WIP: false },
  { id: 4, name: 'CS 251', link: '', hasNotes: false, WIP: false },
  { id: 4, name: 'MATH 239', link: '', hasNotes: false, WIP: false }
];

const Notes = () => {
  const [activeTerm, setActiveTerm] = useState(3);

  const handleTermChange = (termId) => {
    setActiveTerm(termId);
  };

  const filteredCourses = courses.filter(course => course.id === activeTerm);


  return (
    <section id="notes" className="notes">
      <div className="notes__content">
        <h2 className="notes__title">My Notes</h2>
        <div className="notes__term-selector">
          {terms.map((term) => (
            <button
              key={term.id}
              className={`notes__term-button ${activeTerm === term.id ? 'active' : ''}`}
              onClick={() => handleTermChange(term.id)}
            >
              {term.label}
            </button>
          ))}
        </div>
        <div className="notes__courses-container">
          <div className="notes__courses">
            {filteredCourses.map((course) => (
              <div key={course.name} className="notes__course-card">
                <h3 className="notes__course-title">{course.name}</h3>
                {course.hasNotes ? (
                  <a
                    href={course.link}
                    className="notes__course-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Notes {course.WIP && '(W.I.P)'}
                  </a>
                ) : (
                  <span className="notes__course-unavailable">No Notes Available</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="notes__disclaimer">
          These notes are provided for personal use only. All rights to the content belong to the instructor. Redistribution, reproduction, or commercial use of these notes in any form is strictly prohibited without the explicit permission of the instructor. The author of these notes does not guarantee the accuracy or completeness of the content and shall not be held liable for any errors or omissions. Use these notes at your own risk.
        </p>
      </div>
    </section>
  );
};

export default Notes;