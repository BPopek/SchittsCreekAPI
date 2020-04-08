import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Quiz from './Quiz'

import hero from '../Images/sc-s6-hero.jpg'
import logo from '../Images/SC-logo.png'

function Home(props) {

    return (
        <div>
            <img src={hero} alt='Schitts Creek Cast' className='homeImage' />
            <div className='homeContainer'>
                <div className='skew1Container'> {/* relative */}
                    <Link to="/quiz">
                        <div className='skew1'>{/* absolute */}
                            <div className='unskew1'>Play the <br /> Quote Quiz!</div> 
                        </div>
                    </Link>
                    <div className='homeCards'>
                        <img src={logo} alt='Schitts Creek Logo'       className='homeLogo' />
                        <p className='homeText'>
                        Quiz </p>
                    </div>
                </div>
                <div className='skew2Container'>
                    <Link to="/characters"> 
                        <div className='skew1'>
                            <div className='unskew1'>Read About the <br /> Characters!</div> 
                        </div>
                    </Link>
                    <div className='homeCards'>
                        <p className='homeText2'>
                        Character
                            <br />
                        Biographies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home)