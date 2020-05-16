import React, { useState, useContext, useEffect } from 'react'
import { QuoteContext } from './QuoteProvider'
import CharacterProfiles from './CharacterProfiles'
import CharacterQuotes from './CharacterQuotes'


export default function SCadmin(props) {

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
            .catch(err => console.error(err.res.data.message))
    }

    const handleSubmitAddNew = e => {
        e.preventDefault();
        clearInputsNewQuote();
        newQuote()
    }

    const handleChangeAddNew = e => {
        let value = e.target.type === e.target.value
        const { name } = e.target
        setNewQuoteInfo(prevInfo => ({
            ...prevInfo, 
            [name]: value
        }))
    }

    return(
        <>
            <button className='logoutButton' onClick={() => logout()}>LOG OUT</button>
            <div className='existingQuotes'>
                { toggledJohnny ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Johnny'}
                            onClick={toggledNameJohnny}>
                            SHOW JOHNNY'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Johnny'
                                onClick={toggledNameJohnny}>
                                HIDE JOHNNY'S QUOTES</button>
                        <CharacterQuotes character={'Johnny'} />
                    </>
                }
                { toggledMoira ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Moira'}
                            onClick={toggledNameMoira}>
                            SHOW MOIRA'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Moira'
                                onClick={toggledNameMoira}>
                                HIDE MOIRA'S QUOTES</button>
                        <CharacterQuotes character={'Moira'} />
                    </>
                }
                { toggledDavid ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'David'}
                            onClick={(e) => toggledNameDavid('value')}>
                            SHOW DAVID'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='David'
                                onClick={toggledNameDavid}>
                                HIDE DAVID'S QUOTES</button>
                        <CharacterQuotes character={'David'} />
                    </>
                }
                { toggledAlexis ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Alexis'}
                            onClick={(e) => toggledNameAlexis('value')}>
                            SHOW ALEXIS'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Alexis'
                                onClick={toggledNameAlexis}>
                                HIDE ALEXIS'S QUOTES</button>
                        <CharacterQuotes character={'Alexis'} />
                    </>
                }
                { toggledStevie ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Stevie'}
                            onClick={(e) => toggledNameStevie('value')}>
                            SHOW STEVIE'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Stevie'
                                onClick={toggledNameStevie}>
                                HIDE STEVIE'S QUOTES</button>
                        <CharacterQuotes character={'Stevie'} />
                    </>
                }
                { toggledRoland ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Roland'}
                            onClick={(e) => toggledNameRoland('value')}>
                            SHOW ROLAND'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Roland'
                                onClick={toggledNameRoland}>
                                HIDE ROLAND'S QUOTES</button>
                        <CharacterQuotes character={'Roland'} />
                    </>
                }
                { toggledJocelyn ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Jocelyn'}
                            onClick={(e) => toggledNameJocelyn('value')}>
                            SHOW JOCELYN'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Jocelyn'
                                onClick={toggledNameJocelyn}>
                                HIDE JOCELYN'S QUOTES</button>
                        <CharacterQuotes character={'Jocelyn'} />
                    </>
                }
                { toggledTed ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Ted'}
                            onClick={(e) => toggledNameTed('value')}>
                            SHOW TED'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Ted'
                                onClick={toggledNameTed}>
                                HIDE TED'S QUOTES</button>
                        <CharacterQuotes character={'Ted'} />
                    </>
                }
                { toggledPatrick ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Patrick'}
                            onClick={(e) => toggledNamePatrick('value')}>
                            SHOW PATRICK'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Patrick'
                                onClick={toggledNamePatrick}>
                                HIDE PATRICK'S QUOTES</button>
                        <CharacterQuotes character={'Patrick'} />
                    </>
                }
                { toggledTwyla ?
                    <button className='charQuoteButtonToggle' 
                            type='button'
                            value={'Twyla'}
                            onClick={(e) => toggledNameTwyla('value')}>
                            SHOW TWYLA'S QUOTES</button>
                    :
                    <>
                        <button className='charQuoteButtonToggle' 
                                type='button'
                                value='Twyla'
                                onClick={toggledNameTwyla}>
                                HIDE TWYLA'S QUOTES</button>
                        <CharacterQuotes character={'Twyla'} />
                    </>
                }
                <div>

                </div>
            </div>
            <div className='addNewForm'>
                <h1>ADD NEW QUOTE</h1>
                <form className='newQuoteForm'  onSubmit={handleSubmitAddNew}>
                    <input type='text'
                        placeholder='character'
                        name='character'
                        id='character'
                        className='addQuoteInput'
                        value={newQuoteInfo.character}
                        onChange={handleChangeAddNew}
                    />
                    <input type='text'
                        placeholder='Enter Quote Text Here'
                        name='quoteText'
                        id='quoteText'
                        className='addQuoteInput'
                        value={newQuoteInfo.quoteText}
                        onChange={handleChangeAddNew}
                    />
                    <input type='text'
                        placeholder='Season Number'
                        name='season'
                        id='season'
                        className='addQuoteInput'
                        value={newQuoteInfo.season}
                        onChange={handleChangeAddNew}
                    />
                    <input type='text'
                        placeholder='Episode Name'
                        name='episodeName'
                        id='episodeName'
                        className='addQuoteInput'
                        value={newQuoteInfo.episodeName}
                        onChange={handleChangeAddNew}
                    />
                    <button type='submit' className='addNewButtonSubmit'>SUBMIT NEW QUOTE</button>
                </form>
            </div>
        </>
    )
}