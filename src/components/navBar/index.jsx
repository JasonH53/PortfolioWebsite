import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { HiCodeBracket } from 'react-icons/hi2'
import { HiX } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: 'home'
    },
    {
        label: 'About',
        to: 'about'
    },
    {
        label: 'Projects',
        to: 'projects'
    },
    {
        label: 'Notes',
        to: 'notes'
    },
    {
        label: 'Resume',
        to: '/resume'
    }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    const handleNavigation = (to) => {
        setToggleIcon(false);
        if (to === '/resume') {
            navigate(to);
        } else {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(to);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }

    return (
        <div>
            <nav className={`navbar ${!isVisible ? 'hidden' : ''}`}>
                <div className="navbar_container">
                    <a href="https://www.jasonhon.com" className="navbar_container_logo" target="_blank" rel="noopener noreferrer">
                        <HiCodeBracket size={30} />
                    </a>
                    <a href="https://github.com/JasonH53" className="navbar_container_social" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/jasonhonhk/" className="navbar_container_social" target="_blank" rel="noopener noreferrer">
                        <AiOutlineLinkedin size={30} />
                    </a>
                    <a href="https://youtube.com/c/JasonStrafes" className="navbar_container_social" target="_blank" rel="noopener noreferrer">
                        <AiFillYoutube size={30} />
                    </a>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <a 
                                    className="navbar_container_menu_item_links" 
                                    href={item.to === '/resume' ? item.to : `/#${item.to}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(item.to);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;