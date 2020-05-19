import React, { useState, useContext, useEffect } from 'react'
import { QuoteContext } from '../QuoteProvider'
import CharacterProfiles from '../CharacterProfiles'
import CharacterQuotesAdmin from './CharacterQuotesAdmin'
import AddQuoteForm from './AddQuoteForm'

function SCadmin(props) {

    useEffect(() => {
        getAllQuotes()
    }, [])

    // const { type, quote } = props
    
    const { quotes, getAllQuotes, addNewQuote, deleteQuote, login, logout,
        toggledJohnny,
        setToggledJohnny,
        toggledNameJohnny,
        toggledMoira,
        setToggledMoira,
        toggledNameMoira,
        toggledDavid,
        setToggledDavid,
        toggledNameDavid,
        toggledAlexis,
        setToggledAlexis,
        toggledNameAlexis,
        toggledStevie,
        setToggledStevie,
        toggledNameStevie,
        toggledRoland,
        setToggledRoland,
        toggledNameRoland,
        toggledJocelyn,
        setToggledJocelyn,
        toggledNameJocelyn,
        toggledPatrick,
        setToggledPatrick,
        toggledNamePatrick,
        toggledTed,
        setToggledTed,
        toggledNameTed,
        toggledTwyla,
        setToggledTwyla,
        toggledNameTwyla, } = useContext(QuoteContext)

        const [ toggled, setToggled ] = useState(true)
        const toggle = e => {
            setToggled(prev => {
                return !prev
            })
        }
        const [ toggledForm, setToggledForm ] = useState(true)
        const toggleForm = e => {
            setToggledForm(prev => {
                return !prev
            })
        }

    return(
        <div className='admin'>
            <button className='logoutButton' onClick={() => logout()}>LOG OUT</button>
            <div className='existingQuotes'>
                <div className='specificChar'>
                    { toggledJohnny ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Johnny'}
                                onClick={toggledNameJohnny}>
                                SHOW JOHNNY'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Johnny'
                                    onClick={toggledNameJohnny}>
                                    HIDE JOHNNY'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Johnny'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledMoira ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Moira'}
                                onClick={toggledNameMoira}>
                                SHOW MOIRA'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Moira'
                                    onClick={toggledNameMoira}>
                                    HIDE MOIRA'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Moira'} 
                            />
                        </div>
                    }
                </div>
                <div className='specificChar'> 
                    { toggledDavid ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'David'}
                                onClick={(e) => toggledNameDavid('value')}>
                                SHOW DAVID'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='David'
                                    onClick={toggledNameDavid}>
                                    HIDE DAVID'S QUOTES</button>
                            <CharacterQuotesAdmin character={'David'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledAlexis ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Alexis'}
                                onClick={(e) => toggledNameAlexis('value')}>
                                SHOW ALEXIS'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Alexis'
                                    onClick={toggledNameAlexis}>
                                    HIDE ALEXIS'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Alexis'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledStevie ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Stevie'}
                                onClick={(e) => toggledNameStevie('value')}>
                                SHOW STEVIE'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Stevie'
                                    onClick={toggledNameStevie}>
                                    HIDE STEVIE'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Stevie'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledRoland ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Roland'}
                                onClick={(e) => toggledNameRoland('value')}>
                                SHOW ROLAND'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Roland'
                                    onClick={toggledNameRoland}>
                                    HIDE ROLAND'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Roland'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledJocelyn ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Jocelyn'}
                                onClick={(e) => toggledNameJocelyn('value')}>
                                SHOW JOCELYN'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Jocelyn'
                                    onClick={toggledNameJocelyn}>
                                    HIDE JOCELYN'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Jocelyn'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledTed ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Ted'}
                                onClick={(e) => toggledNameTed('value')}>
                                SHOW TED'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Ted'
                                    onClick={toggledNameTed}>
                                    HIDE TED'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Ted'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledPatrick ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Patrick'}
                                onClick={(e) => toggledNamePatrick('value')}>
                                SHOW PATRICK'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Patrick'
                                    onClick={toggledNamePatrick}>
                                    HIDE PATRICK'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Patrick'} />
                        </div>
                    }
                </div>
                <div className='specificChar'>
                    { toggledTwyla ?
                        <button className='charQuoteButtonToggleAdmin' 
                                type='button'
                                value={'Twyla'}
                                onClick={(e) => toggledNameTwyla('value')}>
                                SHOW TWYLA'S QUOTES</button>
                        :
                        <div className='quotesShownAdmin'>
                            <button className='charQuoteButtonToggleAdmin' 
                                    type='button'
                                    value='Twyla'
                                    onClick={toggledNameTwyla}>
                                    HIDE TWYLA'S QUOTES</button>
                            <CharacterQuotesAdmin character={'Twyla'} type='adminQuote'/>
                        </div>
                    }
                </div>
            </div>
            {   toggledForm ?
                <button className='addNewQuote' onClick={toggleForm}>ADD NEW QUOTE</button>
                :
                <AddQuoteForm addQuote={addNewQuote} button='Submit' type='add' toggle={toggleForm}/>
            }
        </div>
    )
}

export default SCadmin