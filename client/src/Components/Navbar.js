import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import logo from '../Images/SC-logo-wide.png';

// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Navbar(props) {

    return (
        <div className='nav'>
            <Link exact='true' to='/'><img src={logo} alt='Schitts Creek Logo' className='navbarLogo' /></Link>
    
            <Link to='/quiz' className='navLinks'>Quiz</Link>
            <Link to='/characters' className='navLinks'>Characters</Link>
        </div>
    )
}

export default withRouter(Navbar)