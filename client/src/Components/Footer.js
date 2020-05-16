import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function Footer() {

    return (
        <>
        <div className='footer'>
            <a href="https://www.betsypopek.com/" className='footerLinks2'>Designer</a> 
            <p className='footerLinks'><a href="mailto:schittscreekquotes@gmail.com"    
                >Suggest Quote</a></p>    
            <a href="https://www.cbc.ca/schittscreek/" className='footerLinks'>Official Website</a> 
            
            </div>
            <div className='legalCont'>
                <Link to='/legal-disclaimer' className='footerLegal'>LEGAL: NOT AN OFFICIAL SCHITT'S CREEK WEBSITE, THIS IS SIMPLY A FUN TRIVIA GAME TO HELP REMINISCE ABOUT THE MAGIC THAT IS SCHITT'S CREEK.</Link>
            </div>
            <Link to='/login' className='login'>✪</Link>
        </>
    )
}

export default withRouter(Footer)