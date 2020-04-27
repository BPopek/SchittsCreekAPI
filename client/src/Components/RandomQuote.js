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
        // quotesbySeason()
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
    /////////////////////  SEASON TOGGLE   /////////////////////  
    const [ season1, setSeason1 ] = useState(false)
    const [ backgroundButtonColor1, setBackgroundButtonColor1 ] = useState(false)
    const handleChangeSeason1 = (e) => {
        setSeason1(prev => {
            return !prev
        }) 
        setBackgroundButtonColor1(prev => {
            return !prev
        }) 
    } 
    const [ season2, setSeason2 ] = useState(false)
    const [ backgroundButtonColor2, setBackgroundButtonColor2 ] = useState(false)
    const handleChangeSeason2 = (e) => {
        setSeason2(prev => {
            return !prev
        })
        setBackgroundButtonColor2(prev => {
            return !prev
        }) 
    }
    const [ season3, setSeason3 ] = useState(false)
    const [ backgroundButtonColor3, setBackgroundButtonColor3 ] = useState(false)
    const handleChangeSeason3 = (e) => {
        setSeason3(prev => {
            return !prev
        })
        setBackgroundButtonColor3(prev => {
            return !prev
        }) 
    }
    const [ season4, setSeason4 ] = useState(false)
    const [ backgroundButtonColor4, setBackgroundButtonColor4 ] = useState(false)
    const handleChangeSeason4 = (e) => {
        setSeason4(prev => {
            return !prev
        })
        setBackgroundButtonColor4(prev => {
            return !prev
        }) 
    }
    const [ season5, setSeason5 ] = useState(false)
    const [ backgroundButtonColor5, setBackgroundButtonColor5 ] = useState(false)
    const handleChangeSeason5 = (e) => {
        setSeason5(prev => {
            return !prev
        })
        setBackgroundButtonColor5(prev => {
            return !prev
        }) 
    }
    const [ season6, setSeason6 ] = useState(false)
    const [ backgroundButtonColor6, setBackgroundButtonColor6 ] = useState(false)

    const handleChangeSeason6 = (e) => {
        setSeason6(prev => {
            return !prev
        })
        setBackgroundButtonColor6(prev => {
            return !prev
        }) 
    }
    const [ seasonAll, setSeasonAll ] = useState(false)
    const [ backgroundButtonColorAll, setBackgroundButtonColorAll ] = useState(false)

    const handleChangeSeasonAll = (e) => {
        setSeasonAll(prev => {
            return !prev
        })
        setBackgroundButtonColorAll(prev => {
            return !prev
        }) 
        setBackgroundButtonColor1(false ? true : prev => {
            return !prev
        }) 
        setBackgroundButtonColor2(false ? true : prev => {
            return !prev
        }) 
        setBackgroundButtonColor3(false ? true : prev => {
            return !prev
        }) 
        setBackgroundButtonColor4(false ? true : prev => {
            return !prev
        }) 
        setBackgroundButtonColor5(false ? true : prev => {
            return !prev
        }) 
        // setBackgroundButtonColor6(false ? true : prev => {
        //     return !prev
        // }) 
    }
    const [ backgroundButtonColorAllClear, setBackgroundButtonColorAllClear ] = useState(false)

    const handleChangeSeasonAllClear = (e) => {
        setBackgroundButtonColor1(false) 
        setBackgroundButtonColor2(false) 
        setBackgroundButtonColor3(false) 
        setBackgroundButtonColor4(false) 
        setBackgroundButtonColor5(false) 
        setBackgroundButtonColor6(false) 
        setBackgroundButtonColorAll(false) 
    }

    const currentQuote = (e) => {
        let quotesFilteredBySeason = []
        // let seasons = [1, 2, 3, 4, 5, 6]
        if (season1 === true) {
            quotes.filter(function(quote) {
                if (quote.season === 1)
                quotesFilteredBySeason.push(quote)
            })
        } 
        if (season2 === true) {
            quotes.filter(function(quote) {
                if (quote.season === 2)
                quotesFilteredBySeason.push(quote)
            })
        }
        if (season3 === true) {
            quotes.filter(function(quote) {
                if (quote.season === 3)
                quotesFilteredBySeason.push(quote)
            })
        }
        if (season4 === true) {
            quotes.filter(function(quote) {
                if (quote.season === 4)
                quotesFilteredBySeason.push(quote)
            })
        }
        if (season5 === true) {
            quotes.filter(function(quote) {
                if (quote.season === 5)
                quotesFilteredBySeason.push(quote)
            })
        }
        if (season6 === true) {
            quotes.filter(function(quote) {
                if (quote.season === 6)
                quotesFilteredBySeason.push(quote)
            })
        }
        if (seasonAll === true) {
            quotes.filter(function(quote) {
                quotesFilteredBySeason.push(quote)
            })
        }
        let prevRandom = '';
        const randomIndex = Math.floor(Math.random() * quotesFilteredBySeason.length)
        // setCurrentRandomQuote(quotesFilteredBySeason[randomIndex])
            // prevRandom.push(randomIndex)
            if (randomIndex === prevRandom) {
                randomIndex++
                setCurrentRandomQuote(quotesFilteredBySeason[randomIndex] || quotesFilteredBySeason[17])
            } else {
                setCurrentRandomQuote(quotesFilteredBySeason[randomIndex] || quotesFilteredBySeason[17])
            }
            console.log(randomIndex)
            console.log(prevRandom)
            console.log(quotesFilteredBySeason)

    }
        
    //////////  RANDOM QUOTE FOR ALL OF QUOTES ARRAY (NOT BY SEASON) ///////////////  
    // const randomIndex = Math.floor(Math.random() * quotes.length)
    // const currentQuote = (e) => {
    //     setCurrentRandomQuote(quotes[randomIndex] || quotes[69])
    // }

    //////////////////////////////////////////////////
    const handleChangeUpdateSeasons = e => {
        e.preventDefault()
        currentQuote()    
        toggleSeason()
    }
    const handleChangeCurrentQuote = (e, idName) => {
        currentQuote()    
        toggledPlay()
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
    const [ seasonToggle, setseasonToggle ]  = useState(true)
    const toggleSeason = () => {
        setseasonToggle(prev => {
            return !prev
            })
    }
    
    return (
        <>
        {  needStart
            ?
            <div className='readyPlay'>
                <h1>Ready to Play?</h1>
                <h2 className='chooseSeasons'>Choose your seasons below:</h2>
                <div className='seasonButtonDivIntro'>
                    <button 
                        className={(backgroundButtonColor1 === false) ? 'seasonNotSelected' : 'seasonSelected'}  
                        type='button' 
                        value='Season1' 
                        onClick={handleChangeSeason1}>
                        Season 1
                    </button>
                    <button 
                        className={(backgroundButtonColor2 === false) ? 'seasonNotSelected' : 'seasonSelected'}  
                        type='button' 
                        value='Season2' 
                        onClick={handleChangeSeason2}>
                        Season 2
                    </button>
                    <button 
                        className={(backgroundButtonColor3 === false) ? 'seasonNotSelected' : 'seasonSelected'}  
                        type='button' 
                        value='Season3' 
                        onClick={handleChangeSeason3}>
                        Season 3
                    </button>
                    <button 
                        className={(backgroundButtonColor4 === false) ? 'seasonNotSelected' : 'seasonSelected'}  
                        type='button' 
                        value='Season4'    
                        onClick={handleChangeSeason4}>
                        Season 4
                    </button>
                    <button 
                        className={(backgroundButtonColor5 === false) ? 'seasonNotSelected' : 'seasonSelected'}  
                        type='button' 
                        value='Season5'    
                        onClick={handleChangeSeason5}>
                        Season 5
                    </button>
                    <button                      
                        className={(backgroundButtonColor6 === false) ? 'disabled' : 'disabled'}  
                        type='button' 
                        value='Season6' 
                        disabled={true}
                        //{/* onClick={handleChangeSeason6} */}
                        >
                        Season 6
                    </button>
                    <div>
                        <button                      
                            className={(backgroundButtonColorAll === false) ? 'seasonNotSelectedAll' : 'seasonSelectedAll'}  
                            type='button' 
                            value='SeasonAll' 
                            onClick={handleChangeSeasonAll}
                            >
                            SELECT ALL
                        </button>
                        <button                      
                            className={(backgroundButtonColorAllClear === false) ? 'seasonNotSelectedAll' : 'seasonSelectedAll'}  
                            type='button' 
                            value='SeasonAllClear' 
                            onClick={handleChangeSeasonAllClear}
                            >
                            CLEAR
                        </button>
                    </div>
                </div>
                <button id='hide1' className='playButton' type='button' value='play' onClick={handleChangeCurrentQuote} >Start the Game</button>
            </div>
            :
            <>  
                <div className='quoteContainer' toggleplay='false'>
                    { seasonToggle ? 
                        <>
                            <div className='seasonButtonDivGame'>
                                <h2 className='changeSeasons' onClick={toggleSeason}>Change Seasons<span> ▼</span></h2>
                                
                            </div>
                        </>
                        :
                        <>
                            <div className='seasonButtonDivGameActive'>
                                <h2 className='changeSeasons2' onClick={toggleSeason}>Change Seasons
                                </h2>
                                <div className='gameAllClearDiv'>
                                    <button 
                                        className={(backgroundButtonColor1 === false) ? 'seasonNotSelectedGame' : 'seasonSelectedGame'}  
                                        type='button' 
                                        value='Season1' 
                                        onClick={handleChangeSeason1}>
                                        1
                                    </button>
                                    <button 
                                        className={(backgroundButtonColor2 === false) ? 'seasonNotSelectedGame' : 'seasonSelectedGame'}  
                                        type='button' 
                                        value='Season2' 
                                        onClick={handleChangeSeason2}>
                                        2
                                    </button>
                                    <button 
                                        className={(backgroundButtonColor3 === false) ? 'seasonNotSelectedGame' : 'seasonSelectedGame'}  
                                        type='button' 
                                        value='Season3' 
                                        onClick={handleChangeSeason3}>
                                        3
                                    </button>
                                    <button 
                                        className={(backgroundButtonColor4 === false) ? 'seasonNotSelectedGame' : 'seasonSelectedGame'}  
                                        type='button' 
                                        value='Season4'    
                                        onClick={handleChangeSeason4}>
                                        4
                                    </button>
                                    <button 
                                        className={(backgroundButtonColor5 === false) ? 'seasonNotSelectedGame' : 'seasonSelectedGame'}  
                                        type='button' 
                                        value='Season5'    
                                        onClick={handleChangeSeason5}>
                                        5
                                    </button>
                                    <button                      
                                        className={(backgroundButtonColor6 === false) ? 'disabledGame' : 'disabledGame'}  
                                        type='button' 
                                        value='Season6' 
                                        disabled={true}
                                        //onClick={handleChangeSeason6}
                                        >
                                        6
                                    </button>
                                </div>
                                <div className='gameAllClearDiv'>
                                    <button                      
                                        className={(backgroundButtonColorAll === false) ? 'seasonNotSelectedAllGame' : 'seasonSelectedllGame'}  
                                        type='button' 
                                        value='SeasonAll' 
                                        onClick={handleChangeSeasonAll}
                                        >
                                        ALL
                                    </button>
                                    <button                      
                                        className={(backgroundButtonColorAllClear === false) ? 'seasonNotSelectedAllGame' : 'seasonSelectedAllGame'}  
                                        type='button' 
                                        value='SeasonAllClear' 
                                        onClick={handleChangeSeasonAllClear}
                                        >
                                        CLEAR
                                    </button>
                                </div>
                                <button className='updateSeasons' type='button' onClick={handleChangeUpdateSeasons} >UPDATE SEASONS
                                </button>
                                
                            </div>
                        </>
                    } 
                    { toggled ?
                        <>  
                            <div className='answerDiv'>
                                <h1 className='answer'>Yes, it was {currentRandomQuote.character}!</h1>
                                <img src={require (`../Images/${(currentRandomQuote.character)}2.png`)} alt='Character' className='quizCharPhoto'/>
                                <button className='nextButton' 
                                        type='button' 
                                        onClick={handleChangeNext} >
                                        NEXT QUESTION ►
                                </button>
                            </div>
                        </>
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
