import React, { useContext, useState, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'

function Quote() {

    const { quotes, setQuotes, characterQuotes, setCharacterQuotes, randomQuote, setRandomQuote } = useContext(QuoteContext)

    const specificCharObj = quotes.filter((char) => {
        if(char === quotes.character) {
            characterQuotes.push(quotes)}
            console.log({characterQuotes})
            return (
                <div>{characterQuotes}</div>
            )
        }, {})

       
    const randomNumber = Math.floor(Math.random() * Math.floor(quotes.length))
    const getRandomQuote = quotes.map(quotes => {
        console.log(quotes[0].props.children)
        return (
            <div>{quotes[randomNumber].quoteText}</div>
        )
    })
    
    return (
        <div className='quoteContainer'>
            
            <div>{getRandomQuote}</div>
            <div>{specificCharObj} {quotes.quoteText}</div>
        </div>
    ) 
} 

export default Quote;