import React from 'react';
// import React, { useContext, useState } from 'react';

// import { QuoteContext } from '.QuoteProvider';
// import AnswerForm from './AnswerForm'
import RandomQuote from './RandomQuote'

// import logoStacked from '../Images/SC-logo.png'
import logo from '../Images/SC-logo-wide-shadow.png';



function Quiz(props) {
    
    return (
        <div className='quizContainer'>
            <h1 className='quizWelcome'>
                {/* Welcome to the 
                    <br />  */}
                <img src={logo} alt='Schitts Creek Logo' className='quizLogo' />    
                    <br /> 
                Quote Quiz
            </h1>
            <RandomQuote />
            {/* <AnswerForm /> */}
        </div>
    )     
}

export default Quiz;