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
            <p className='legal1'>THIS IS NOT AN OFFICIAL SCHITT'S CREEK WEBSITE. THIS WAS CREATED TO PROVIDE A FUN TRIVIA GAME TO HELP REMINISCE ABOUT THE MAGIC THAT IS SCHITT'S CREEK.</p>
        </div>    
    )
}

export default withRouter(Footer)