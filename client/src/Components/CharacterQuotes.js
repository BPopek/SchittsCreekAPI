import React, { useContext, useEffect, useState } from 'react';
import { QuoteContext } from './QuoteProvider'

export default function CharacterQuote(props) {
    
    useEffect(() => {
        getAllQuotes()
    }, [])
    
    const { quotes, getAllQuotes, editQuote, deleteQuote } = useContext(QuoteContext)

    // const [ toggled, setToggled ] = useState(true)

    // const [ singleCharacterQuote, setSingleCharacterQuote ] = useState({
    //     character: '',
    //     quoteText: '',
    //     season: '',
    //     episodeName: '',
    // })

    // const toggle = () => {
    //     setToggled(prev => {
    //         console.log(prev)
    //         return !prev
    //     })
    // }

    const filteredQuotes = quotes.filter(function(quote) {
        if (quote.character === props.character) {
            return (
                <>
                    <h1>{quote.quoteText}</h1>
                    <h4>Season: {quote.season}, Episode: {quote.episodeName}</h4>
                </>
            )
        }
    })

    const sortedQuotes = filteredQuotes.sort(function(a, b) {
        return a.season - b.season
    })
    
    return (
        <div className='charNew'>
            {sortedQuotes.map(quote => 
            <>
                <div className='charQuoteMap'
                    key={quote._id}>                
                    <h1 className='charQuotes'>"{quote.quoteText}"</h1>
                    <h4 className='charQuotesSeason'>Season: {quote.season}</h4>
                    <h4 className='charQuotesEpisode'>Episode: {quote.episodeName}</h4>
                </div>
                {/* <div className={props.type === 'adminQuote' ? 'showAdminButtons' : 'hideAdminButtons'}>
                    <button onClick={() => {
                        editQuote(props._id)
                        toggle()
                        }} 
                        className='quoteButton'>Edit</button>
                    <button onClick={() => deleteQuote(props._id)} className='quoteButton'>Delete</button>
                </div> */}
            </>
            )}
        </div>
    )
}