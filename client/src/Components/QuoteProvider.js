import React, { useState } from 'react';
import axios from 'axios';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const quoteAxios = axios.create()

const QuoteContext = React.createContext();

function QuoteProvider(props) {
    const [ quotes, setQuotes, characterQuotes, setCharacterQuotes, randomQuote, getRandomQuote ] = useState()

    const getAllQuotes = () => {
        return quoteAxios.get('/api/quotes')
        .then(res => {
            setQuotes(res.data);
            return res;
        })
    }
    const getCharacterQuotes = () => {
        return quoteAxios.get('/api/quotes/character')
        .then(res => {
            setCharacterQuotes(res.data);
            return res;
        })
    }
    // const getRandomQuote = () => {
    //     return quoteAxios.get('/api/quotes')
    //     .then(res => {
    //         setRandomqQuotes(res.data);
    //         return res;
    //     })   
    // }


    return (
        <QuoteContext.Provider 
            value={{
                quotes, ...unstable_renderSubtreeIntoContainer,
                getAllQuotes, getCharacterQuotes, getRandomQuote
            }}>

            { props.children }
            </QuoteContext.Provider>
    )
}

export { QuoteContext, QuoteProvider }