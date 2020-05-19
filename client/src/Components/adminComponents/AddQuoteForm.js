import React, { useState, useContext, useEffect } from 'react';
import { QuoteContext } from '../QuoteProvider';

function AddQuoteForm(props) {

    const { addNewQuote, editQuote, getAllQuotes, quotes } = useContext(QuoteContext)
    const { type, quote } = props

    const [ quoteInfo, setQuoteInfo ] = useState({
        character: '',
        quoteText: '',
        season: '',
        episodeName: ''
    })

    useEffect(() => {
        getAllQuotes()
        if(type === 'update'){
            setQuoteInfo(quote)
        }
    }, [type, quote])

    // const handleSubmitAddNew = e => {
    //     e.preventDefault();
    //     clearInputsNewQuote();
    //     newQuote()
    // }
    const handleSubmit = e => {
        e.preventDefault();
        if (props.type === 'add'){
            addNewQuote(quoteInfo)
                .then(() => {
                    clearInputsQuote()
                    props.toggle()
                })
            .catch(err => console.error(err.res.data.message))
        } else {
            editQuote(props.quote._id, quoteInfo)
            .then(() => {
                props.toggle()
            })
            .catch(err => console.error(err.res.data.message))
        }
    }

    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setQuoteInfo(prevInfo => ({
            ...prevInfo, 
            [name]: value
        }))
    }
    
    const clearInputsQuote = () => {
        setQuoteInfo({ 
            character: '',
            quoteText: '',
            season: '',
            episodeName: ''
        })
    }

    const newQuote = () => {
        console.log('newQuote is being called')
        addNewQuote(quoteInfo)
            .then(() => {
                clearInputsQuote()
            })
            .catch(err => console.error(err.response.data.message))
    }

    return (
        <div className='addNewForm'>
            <form className={props.type === 'add' ? 'newQuoteForm' : 'quoteEdit'}>
                <h1 className='addNewQuote'>{props.type === 'add' ? 'ADD NEW QUOTE' : 'EDIT QUOTE'}</h1>
                <input type='text'
                    placeholder="Character's First Name"
                    name='character'
                    id='character'
                    className='addQuoteInputCharacter'
                    value={quoteInfo.character}
                    onChange={handleChange}
                />
                <textarea type='text'
                    placeholder='Enter Quote Text Here'
                    name='quoteText'
                    id='quoteText'
                    className='addQuoteInputQuoteText'
                    value={quoteInfo.quoteText}
                    onChange={handleChange}
                />
                <input type='text'
                    placeholder='Season Number'
                    name='season'
                    id='season'
                    className='addQuoteInputSeason'
                    value={quoteInfo.season}
                    onChange={handleChange}
                />
                <input type='text'
                    placeholder='Episode Name'
                    name='episodeName'
                    id='episodeName'
                    className='addQuoteInputEpisode'
                    value={quoteInfo.episodeName}
                    onChange={handleChange}
                />
                <button type='submit' className='addNewButtonSubmit' onClick={handleSubmit}>{props.button}</button>
            </form>
        </div>
    )
}

export default AddQuoteForm;