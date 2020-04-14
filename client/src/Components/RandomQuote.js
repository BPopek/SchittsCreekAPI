import React, { useContext, useState, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'

export default function RandomQuote(props) {

    const { quotes, setQuotes, getAllQuotes, characterQuotes, setCharacterQuotes  } = useContext(QuoteContext)
    const [ randomQuote, setRandomQuote ] = useState({
        character: '',
        quoteText: '',
        season: '',
        episodeName: '',
    })
    
    useEffect(() => {
        getAllQuotes()
        // chooseRandomQuote()

    }, [])
    //I think the top one makes more sense though you will still want a function created that maybe fires innuser click that updates the randomQuote state so a re render occurs.  But only if you need that kind of functionality
    
    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target;
        if(value === currentRandomQuote.character) {
            return alert('correct')
            
            .then(() => {
                nextQuote()
            })
        } else {
            alert('wrong guess')
        }       
    }
    const nextQuote = () => {
        // e.preventDefault()
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const nextRandomQuote = quotes[randomIndex] || {}
        return nextRandomQuote
    }
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const currentRandomQuote = quotes[randomIndex] || {}
    
    console.log(currentRandomQuote)
    return (
        <>
            <div className='quoteContainer'>
                <h1 className='quizWho'>WHO SAID:</h1>
                <h3 className='randomQuote'>{currentRandomQuote.quoteText}</h3>
            </div>
            <div className='answerContainer'>            
                <button className='answerButton' type='button' value='Johnny' onClick={handleChange}>Johnny</button>
                <button className='answerButton' type='button' value='Moira' onClick={handleChange}>Moira</button>
                <button className='answerButton' type='button' value='David' onClick={handleChange}>David</button>
                <button className='answerButton' type='button' value='Alexis' onClick={handleChange}>Alexis</button>
                <button className='answerButton' type='button' value='Stevie' onClick={handleChange}>Stevie</button>
                <button className='answerButton' type='button' value='Roland' onClick={handleChange}>Roland</button>
                <button className='answerButton' type='button' value='Jocelyn' onClick={handleChange}>Jocelyn</button>
                <button className='answerButton' type='button' value='Ted' onClick={handleChange}>Ted</button>
                <button className='answerButton' type='button' value='Patrick' onClick={handleChange}>Patrick</button>
                <button className='answerButton' type='button' value='Twyla' onClick={handleChange}>Twyla</button>
            </div>
        </>
    ) 
} 

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

///////////////////////////////////////////////

    // const randomQuote2 = quotes[Math.floor(Math.random() * quotes.length)] 
    // const mappedRandom = randomQuote2.map(quote => {
    //     return <div className='randomQuote' 
    //                 key={quote._id}>
    //         <p>{quote.quoteText}</p>
    //     </div>
    // })