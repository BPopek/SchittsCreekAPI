import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { Link, withRouter } from 'react-router-dom'


// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Footer() {

    return (
        <div className='footer'>
            <p className='footerLinks'><a href="mailto:schittscreekquotes@gmail.com"    
                >Suggest Quote</a></p>    
            <a href="https://www.cbc.ca/schittscreek/" className='footerLinks'>Official Website</a> 
            <Link to='/legal-disclaimer' className='footerLegal'>Legal</Link>
        </div>    
    )
}

export default withRouter(Footer)