import React, { useContext, useState } from 'react';
import { QuoteContext } from '../Components/QuoteProvider';
import QuoteForm from '../Components/QuoteForm'

import logo from '../Images/SC-logo.png'


function Quiz(props) {

    const { quotes, setQuotes } = useContext(QuoteContext)

    // const characterQuotes = quotes.filter((quotes.character)) 

    let characterQuotes = []
    const specificChar = quotes.filter((char) => {
        if(char === quotes.props.character) {
            characterQuotes.push(quotes)}
            return (
                <div>{characterQuotes}</div>
            )
        })
        
    // const getRandomQuote = ((quotes[randomNumber]) => {
    //     return getRandomQuote
    // })
    const randomNumber = Math.floor(Math.random() * Math.floor(quotes.length))

    const getRandomQuote = quotes.map(quotes => {
        return (
            <div>{quotes[randomNumber].props.quoteText}</div>
        )
    })
    
    console.log(quotes)
    return (
        <div className='quizContainer'>
            <h1>Welcome to the <img src={logo} alt='Schitts Creek Logo' className='homeLogo' /> Quote Quiz!</h1>
            {/* <div>{quotes}</div>
            <div>{characterQuotes}</div>
            <div>{specificChar}</div> */}
            <div>{getRandomQuote}</div>
            <QuoteForm />
        </div>
    )     
}

export default Quiz;