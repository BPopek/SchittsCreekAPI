import React, { useContext, useState, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'

export default function RandomQuote(props) {

    const { quotes,  getAllQuotes,  needStart, handleStart } = useContext(QuoteContext)

    const [ currentRandomQuote, setCurrentRandomQuote ] = useState({
        character: '',
        quoteText: '',
        season: '',
        episodeName: '',
    })

    // const [ nextRandomQuote, setNextRandomQuote ] = useState({
    //     character: '',
    //     quoteText: '',
    //     season: '',
    //     episodeName: '',
    // })

    useEffect(() => {
        getAllQuotes()
    }, [])
    //you will still want a function created that maybe fires in nuser click that updates the randomQuote state so a rerender occurs.  But only if you need that kind of functionality

     const [ toggled, setToggled ] = useState(false)
    const toggledAnswer = (e) => {
        // e.preventDefault()
        setToggled(prev => {
            return !prev
        })
    }
    const [ toggledWrongAnswer, setToggledWrongAnswer ] = useState(true)
    const toggledWrong = (e) => {
        // e.preventDefault()
        setToggledWrongAnswer(prev => {
            return !prev
        })
    }
    
    const [ togglePlay, setTogglePlay ] = useState('start')
    const toggledPlay = (e) => {
        setTogglePlay('play')
        handleStart()
    }
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const currentQuote = (e) => {
        setCurrentRandomQuote(quotes[randomIndex] || {})
    }
    const handleChangeCurrentQuote = (e, idName) => {
        // e.preventDefault()
        currentQuote()    
        toggledPlay();
        // let foundDiv = document.getElementById('hide1')
        // foundDiv.classList.add('hidden')
    }
    const handleChangeNext = e => {
        e.preventDefault()
        currentQuote()    
        toggledAnswer()
        setToggledWrongAnswer(true)
    }
    const handleChangeAnswer = e => {
        e.preventDefault()
        const { name, value } = e.target;
        if(value === currentRandomQuote.character) {
            setToggled(prev => {
                return !prev
            }) && handleChangeNext() 
        } else {
            setToggledWrongAnswer(false)
        }      
    }

    
    return (
        <>
        {  needStart
            ?
            <div>
                {/* <div>Ready to Play?</div> */}
                <button id='hide1' className='playButton' type='button' value='play' onClick={handleChangeCurrentQuote} >Start the Game</button>
            </div>
            :
            <>  
                <div className='quoteContainer' togglePlay={false}>
                    { toggled ?
                        <div>
                            <h1 className='answer'>correct, it was {currentRandomQuote.character}!</h1>
                            <button className='nextButton' type='button' onClick={handleChangeNext} >NEXT QUESTION</button>
                        </div>
                        :
                        <>
                            <h1 className='quizWho'>WHICH CHARACTER SAID:</h1>
                            <div className='quoteBrackets'> 
                                <h3 className='randomQuote'>"{currentRandomQuote.quoteText}"</h3>
                                { toggledWrongAnswer ?
                                    <> </>
                                    :
                                    <h4 className='tryAgain'>Wrong answer, try again</h4>
                                }
                            </div>
                        </>
                    }
                </div>
                <div className='answerContainer'>            
                    <button className='answerButton' type='button' value='Johnny' onClick={handleChangeAnswer}>Johnny</button>
                    <button className='answerButton' type='button' value='Moira' onClick={handleChangeAnswer}>Moira</button>
                    <button className='answerButton' type='button' value='David' onClick={handleChangeAnswer}>David</button>
                    <button className='answerButton' type='button' value='Alexis' onClick={handleChangeAnswer}>Alexis</button>
                    <button className='answerButton' type='button' value='Ted' onClick={handleChangeAnswer}>Ted</button>
                    <button className='answerButton' type='button' value='Stevie' onClick={handleChangeAnswer}>Stevie</button>
                    <button className='answerButton' type='button' value='Roland' onClick={handleChangeAnswer}>Roland</button>
                    <button className='answerButton' type='button' value='Jocelyn' onClick={handleChangeAnswer}>Jocelyn</button>
                    <button className='answerButton' type='button' value='Patrick' onClick={handleChangeAnswer}>Patrick</button>
                    <button className='answerButton' type='button' value='Twyla' onClick={handleChangeAnswer}>Twyla</button>
                    {/* <button className='answerButton' type='button' value='Ronnie' onClick={handleChangeAnswer}>Ronnie</button> */}
                </div>
            </>
        }  
        </>
    ) 
} 
