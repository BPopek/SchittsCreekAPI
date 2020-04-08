import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Navbar(props) {

    return (
        <div className='nav'>
            <Link to='/quiz' className='navLinks'>QUIZ</Link>
            <Link to='/characters' className='navLinks'>CHARACTER INFO</Link>
        </div>
    )
}

export default withRouter(Navbar)