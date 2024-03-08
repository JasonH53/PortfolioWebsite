import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {HiCodeBracket} from 'react-icons/hi2'
import {Link} from 'react-router-dom';
import {HiCode, HiX} from 'react-icons/hi';
import {AiFillYoutube, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Projects',
        to: '/projects'
    },
    {
        label: 'Resume',
        to: '/resume'
    },
    {
        label: 'About',
        to: '/about'
    }
];

const Navbar =()=>{
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon =()=> {
        setToggleIcon(!toggleIcon);
    }

    return(
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'https://github.com/JasonH53/PortfolioWebsite'} className="navbar_container_logo">
                    <HiCodeBracket size={30}/>
                    </Link>
                    <Link to={'https://github.com/JasonH53'} className="navbar_container_social">
                    <AiOutlineGithub size={30}/>
                    </Link>
                    <Link to={'https://www.linkedin.com/in/jasonhonhk/'} className="navbar_container_social">
                    <AiOutlineLinkedin size={30}/>
                    </Link>
                    <Link to={'https://youtube.com/c/JasonStrafes'} className="navbar_container_social">
                    <AiFillYoutube size={30}/>
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key)=> (
                            <li key={key} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.to}>
                                    {item.label}
                                </Link>
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