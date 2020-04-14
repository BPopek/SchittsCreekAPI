import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Footer(props) {

    return (
        <div className='footer'>
            <p className='footerLinks'><a href="mailto:betsypopek@gmail.com"    
                >Suggest Quote</a></p>    
            <a href="https://www.cbc.ca/schittscreek/" className='footerLinks'>Official Website</a> 
        </div>    
    )
}

export default withRouter(Footer)