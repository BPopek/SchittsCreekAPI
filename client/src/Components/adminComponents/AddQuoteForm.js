import React, { useState, useContext, useEffect } from 'react';
import { QuoteContext } from '../QuoteProvider';

function AddQuoteForm(props) {

    const { addNewQuote, editQuote, getAllQuotes, quotes } = useContext(QuoteContext)

    const [ quoteInfo, setQuoteInfo ] = useState({
        character: '',
        quoteText: '',
        season: '',
        episodeName: ''
    })

    const { type, quote } = props

    useEffect(() => {
        if(type === 'update'){
            setQuoteInfo(quote)
        }
    }, [type, quote])

    // const handleSubmitAddNew = e => {
    //     e.preventDefault();
    //     clearInputsNewQuote();
    //     newQuote()
    // }
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setQuoteInfo(prev => ({
            ...prev, 
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

    const handleSubmit = e => {
        e.preventDefault();

        if (props.type === 'add'){
            addNewQuote(quoteInfo)
                .then(() => {
                    clearInputsQuote();
                    props.toggle();
                })
            .catch(err => console.error(err.response.data.message))
        } else {
            editQuote(props.quote._id, quoteInfo)
            .then(() => {
                props.toggle()
            })
            .catch(err => console.error(err.response.data.message))
        }
    }
    console.log(quoteInfo)
    console.log(quote)
    
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
                <input 
                    name='character'
                    value={quoteInfo.character}
                    onChange={handleChange}
                    type='text'
                    placeholder="Character's First Name"
                    //id='character'
                    className='addQuoteInputCharacter'
                />
                <textarea 
                    name='quoteText'
                    value={quoteInfo.quoteText}
                    onChange={handleChange}
                    type='text'
                    placeholder='Enter Quote Text Here'
                    //id='quoteText'
                    className='addQuoteInputQuoteText'
                />
                <input 
                    name='season'
                    value={quoteInfo.season}
                    onChange={handleChange}
                    placeholder='Season Number'
                    type='number'
                    //id='season'
                    className='addQuoteInputSeason'
                />
                <input 
                    name='episodeName'
                    value={quoteInfo.episodeName}
                    onChange={handleChange}
                    placeholder='Episode Name'
                    type='text'
                    //id='episodeName'
                    className='addQuoteInputEpisode'
                />
                <button className='addNewButtonSubmit' onClick={handleSubmit}>{props.button}</button>
            </form>
        </div>
    )
}

export default AddQuoteForm;