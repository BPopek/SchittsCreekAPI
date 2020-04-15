import React, { useState } from 'react';
import axios from 'axios';

const quoteAxios = axios.create()
const QuoteContext = React.createContext();

function QuoteProvider(props) {
    const [ quotes, setQuotes, characterQuotes, setCharacterQuotes ] = useState([])

    
    const getAllQuotes = () => {
        // console.log('getting jobs')
        return quoteAxios.get('/api/quotes')
        .then(res => {
            setQuotes(res.data);
            return res;
        })
        .catch(err => console.log(err))
    }
    const { char } = props
    const getCharacterQuotes = (char) => {
        return quoteAxios.get(`/api/quotes/character/${char}`)
        .then(res => {
            setCharacterQuotes(res.data);
            return res;
        })
        .catch(err => console.log(err))
    }

    const [ needStart, setNeedStart ] = useState(true)
    const handleStart = () => {
        setNeedStart(false)
    }

    return (
        <QuoteContext.Provider 
            value={{
                ...useState, 
                quotes,
                needStart,
                getAllQuotes, 
                getCharacterQuotes,
                handleStart,
            }}>
            { props.children }
            </QuoteContext.Provider>
    )
}

export { QuoteContext, QuoteProvider }