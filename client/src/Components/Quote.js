import React, { useContext, useState, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'

export default function Quote(props) {

    const { quotes, setQuotes, getAllQuotes, characterQuotes, setCharacterQuotes, randomQuote, setRandomQuote } = useContext(QuoteContext)

    useEffect(() => {
        getAllQuotes()
    }, [])



    const specificCharObj = quotes.filter((quote, char) => {
        let characterQuotes = []
        // console.log({characterQuotes})
        if(char === quote.character) {
            characterQuotes.push(quotes)}
            return (
                <div className='charQuote'
                key={quote._id}>
                    {characterQuotes.quoteText}
                    {/* {characterQuotes} */}
                    </div>
            )
        }, {})

       
    // const randomNumber = Math.floor(Math.random() * Math.floor(quotes.length))
    // const getRandomQuote = quotes.find((quote, i) => {
    //     // console.log(randomNumber)
    //     if (quote[i] === randomNumber) {
    //         // console.log(quotes)
    //         return (
    //             <>
    //             <div className='randomDiv'
    //                 key={quote._id}>
    //                 {quotes.quoteText}
    //                 </div>
    //             {/* <h3>{quotes}</h3> */}
    //             </>
    //         )        
    //     } else {
    //         console.log('no')
    //     }
    // })
    let currentRandomQuote = []
    const randomQuote2 = (quotes[Math.floor(Math.random() * quotes.length)]).push(currentRandomQuote)
    const mappedRandom = currentRandomQuote.map(quote => {
        return <div className='randomQuote' 
                    key={quote._id}>
            <p>{quote.quoteText}</p>
        </div>
    })

    console.log(randomQuote2)
    console.log(mappedRandom)

    return (
        <div className='quoteContainer'>
            {mappedRandom}
        </div>
    ) 
} 

