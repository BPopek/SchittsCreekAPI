import React, { useState, useContext, useEffect } from 'react'
import { QuoteContext } from './QuoteProvider'
import CharacterProfiles from './CharacterProfiles'
import CharacterQuotes from './CharacterQuotes'


function SCadmin(props) {

    useEffect(() => {
        getAllQuotes()
    }, [])
    
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

    const [ newQuoteInfo, setNewQuoteInfo ] = useState({
        character: '',
        quoteText: '',
        season: '',
        episodeName: ''
    })
    const clearInputsNewQuote = () => {
        setNewQuoteInfo({ 
            character: '',
            quoteText: '',
            season: '',
            episodeName: ''
        })
    }
    const newQuote = () => {
        console.log('newQuote is being called')
        addNewQuote(newQuoteInfo)
            .then(() => {
                clearInputsNewQuote()
            })
            .catch(err => console.error(err.response.data.message))
    }

    const handleSubmitAddNew = e => {
        e.preventDefault();
        clearInputsNewQuote();
        newQuote()
    }

    const handleChangeAddNew = e => {
        // let value = e.target.type === e.target.value
        // let value = e.target.value

        let { name, value } = e.target
        setNewQuoteInfo(prevInfo => ({
            ...prevInfo, 
            [name]: value
        }))
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
                            <CharacterQuotes character={'Johnny'} />
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
                            <CharacterQuotes character={'Moira'} />
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
                            <CharacterQuotes character={'David'} />
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
                            <CharacterQuotes character={'Alexis'} />
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
                            <CharacterQuotes character={'Stevie'} />
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
                            <CharacterQuotes character={'Roland'} />
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
                            <CharacterQuotes character={'Jocelyn'} />
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
                            <CharacterQuotes character={'Ted'} />
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
                            <CharacterQuotes character={'Patrick'} />
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
                            <CharacterQuotes character={'Twyla'} />
                        </div>
                    }
                </div>
            </div>
            <hr className='adminBreak'/>
            <div className='addNewForm'>
                <h1>ADD NEW QUOTE</h1>
                <form className='newQuoteForm'  onSubmit={handleSubmitAddNew}>
                    <input type='text'
                        placeholder='character'
                        name='character'
                        id='character'
                        className='addQuoteInputCharacter'
                        value={newQuoteInfo.character}
                        onChange={handleChangeAddNew}
                    />
                    <textarea type='text'
                        placeholder='Enter Quote Text Here'
                        name='quoteText'
                        id='quoteText'
                        className='addQuoteInputQuoteText'
                        value={newQuoteInfo.quoteText}
                        onChange={handleChangeAddNew}
                    />
                    <input type='text'
                        placeholder='Season Number'
                        name='season'
                        id='season'
                        className='addQuoteInputSeason'
                        value={newQuoteInfo.season}
                        onChange={handleChangeAddNew}
                    />
                    <input type='text'
                        placeholder='Episode Name'
                        name='episodeName'
                        id='episodeName'
                        className='addQuoteInputEpisode'
                        value={newQuoteInfo.episodeName}
                        onChange={handleChangeAddNew}
                    />
                    <button type='submit' className='addNewButtonSubmit'>SUBMIT NEW QUOTE</button>
                </form>
            </div>
        </div>
    )
}

export default SCadmin