import React, { useContext, useState } from 'react';
// import { QuoteContext } from '.QuoteProvider';
// import AnswerForm from './AnswerForm'
import RandomQuote from './RandomQuote'

import logo from '../Images/SC-logo.png'


function Quiz(props) {
    
    return (
        <div className='quizContainer'>
            <h1 className='quizWelcome'>Welcome to the 
                    <br /> 
                <img src={logo} alt='Schitts Creek Logo' className='homeLogo' />    
                    <br /> 
                Quote Quiz!
            </h1>
            <RandomQuote />
            {/* <AnswerForm /> */}
        </div>
    )     
}

export default Quiz;