import React, { useContext, useState, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'

export default function CharacterQuote(props) {

    const { quotes, setQuotes, getAllQuotes, characterQuotes, setCharacterQuotes  } = useContext(QuoteContext)

    const specificCharObj = quotes.filter((quote, char) => {
        let characterQuotes = []
        console.log({characterQuotes})
        if(char === quote.character) {
            characterQuotes.push(quotes)}
            return (
                <div className='charQuote'
                key={quote._id}>
                    {characterQuotes.quoteText}
                    </div>
            )}, {})
            
            return (
                <div>
                    {specificCharObj}
                </div>
            )
}