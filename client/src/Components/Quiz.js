import React, { useContext, useState } from 'react';
// import { QuoteContext } from '.QuoteProvider';
import AnswerForm from './AnswerForm'
import Quote from './Quote'

import logo from '../Images/SC-logo.png'


function Quiz(props) {
    
    return (
        <div className='quizContainer'>
            <h1>Welcome to the 
                    <br /> 
                <img src={logo} alt='Schitts Creek Logo' className='homeLogo' />    
                    <br /> 
                Quote Quiz!
            </h1>
            <Quote />
            <AnswerForm />
        </div>
    )     
}

export default Quiz;