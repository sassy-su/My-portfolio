import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/img/portfolio.gif';
import contactImg from '../../assets/img/support.png';
import {Link} from 'react-scroll';
import Menu from '../../assets/img/menu.gif';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='desktopMenu'>
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Home</Link>
                <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenulistItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenulistItem'>Portfolio</Link>
                <Link activeClass='active' to='Clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenulistItem'>Clients</Link>
                {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenulistItem'>Contact</Link> */}
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt='Contact' className='desktopMenuImg'/>Contact me
            </button>
            <img src={Menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='Clients' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
        
            
        
    )
}

export default NavBar;
