import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Footer(props) {

    return (
        <div className='footer'>
            <p className='footerLink'>Suggest Quote<a href="mailto:betsypopek@gmail.com" className='quoteEmail'>betsypopek@gmail.com</a></p>    
            <a href="https://www.cbc.ca/schittscreek/" className='footerLink'>Visit Schitt's Creek Website</a> 
        </div>    
    )
}

export default withRouter(Footer)