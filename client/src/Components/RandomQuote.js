import React, { useContext, useState, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'
import shortid from 'shortid'

export default function RandomQuote(props) {

    const { quotes,  getAllQuotes,  needStart, handleStart } = useContext(QuoteContext)

    const [ currentRandomQuote, setCurrentRandomQuote ] = useState({
        character: '',
        quoteText: '',
        season: '',
        episodeName: '',
    })

    const [ totalNumberQuestions, setTotalNumberQuestions] = useState(0)
    const [ score, setScore ] = useState(0)
    const [ points, setPoints ] = useState(10)
    const [ answerCount, setAnswerCount ] = useState(0)
    const [ totalPoints, setTotalPoints ] = useState(0)
    const [ correctFirstGuess, setCorrectFirstGuess ] = useState(0) 

    // const [ nextRandomQuote, setNextRandomQuote ] = useState({
    //     character: '',
    //     quoteText: '',
    //     season: '',
    //     episodeName: '',
    // })

    useEffect(() => {
        getAllQuotes()
    }, [])

    const [ toggled, setToggled ] = useState(false)
    const toggledAnswer = (e) => {
        setToggled(prev => {
            return !prev
        })
    }
    const [ toggledWrongAnswer, setToggledWrongAnswer ] = useState(true)
    const toggledWrong = (e) => {
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
        setCurrentRandomQuote(quotes[randomIndex] || quotes[69])
    }
    const handleChangeCurrentQuote = (e, idName) => {
        currentQuote()    
        toggledPlay();
    }
    const handleChangeNext = e => {
        e.preventDefault()
        currentQuote()    
        toggledAnswer()
        setToggledWrongAnswer(true)
        setAnswerCount(0)
    }
    const handleChangeAnswer = e => {
        e.preventDefault()
        const { name, value } = e.target;
        if(value === currentRandomQuote.character) {
            setToggled(prev => {
                return !prev
            }) 
            setTotalNumberQuestions(totalNumberQuestions + 1)
            && handleChangeNext() 
            if (answerCount === 0) {
                setScore(score + points) 
                setCorrectFirstGuess(correctFirstGuess + 1)
            } else if (answerCount === 1) {
                setScore(score + (points / 2)) 
            } else {
                setScore(score)
            }            
        } else {
            setToggledWrongAnswer(false)
            setAnswerCount(answerCount + 1)
        }      
    }
    const [ scoreToggle, setScoreToggle ]  = useState(true)
    const toggleScore = () => {
        setScoreToggle(prev => {
            return !prev
            })
    }
    const getId = () => {
        const id = shortid.generate()
        console.log(id)
        return id
    }
    
    return (
        <>
        {  needStart
            ?
            <div className='readyPlay'>
                <h1>Ready to Play?</h1>
                <h2>Match the Character to each quote</h2>
                <button id='hide1' className='playButton' type='button' value='play' onClick={handleChangeCurrentQuote} >Start the Game</button>
            </div>
            :
            <>  
                <div className='quoteContainer' toggleplay='false'>
                    { toggled ?
                        <div>
                            <h1 className='answer'>Correct, it was {currentRandomQuote.character}!</h1>
                            <img src={require (`../Images/${(currentRandomQuote.character)}2.png`)} alt='Character' className='quizCharPhoto'/>
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
                                    <h4 className='tryAgain' key={getId}>Wrong answer, try again</h4>
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
                    <button className='answerButton' type='button' value='Stevie' onClick={handleChangeAnswer}>Stevie</button>
                    <button className='answerButton' type='button' value='Ted' onClick={handleChangeAnswer}>Ted</button>
                    <button className='answerButton' type='button' value='Roland' onClick={handleChangeAnswer}>Roland</button>
                    <button className='answerButton' type='button' value='Jocelyn' onClick={handleChangeAnswer}>Jocelyn</button>
                    <button className='answerButton' type='button' value='Patrick' onClick={handleChangeAnswer}>Patrick</button>
                    <button className='answerButton' type='button' value='Twyla' onClick={handleChangeAnswer}>Twyla</button>
                    {/* <button className='answerButton' type='button' value='Ronnie' onClick={handleChangeAnswer}>Ronnie</button> */}
                </div>
                <div className='scoreboard'>
                    { scoreToggle ? 
                        <div>
                            <h1>SCOREBOARD</h1>
                            <h5 onClick={toggleScore}> ⊶ </h5>
                        </div>
                        :
                        <div>
                            <h1>SCOREBOARD</h1>
                            <h5 onClick={toggleScore}> ⊷ </h5>
                            <h2>SCORE:  <p>{score} POINTS</p></h2>
                            <h3>CORRECT ON FIRST TRY: <p>{correctFirstGuess}</p></h3>
                            <h3>TOTAL QUESTIONS: <p>{totalNumberQuestions}</p></h3>
                        </div>
                    }
                </div>
            </>
        }  
        </>
    ) 
} 
