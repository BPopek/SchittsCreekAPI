import React, { useContext, useEffect, useState } from 'react';
import { QuoteContext } from '../QuoteProvider'
import AddQuoteForm from './AddQuoteForm'

export default function CharacterQuotesAdmin(props) {
    
    useEffect(() => {
        getAllQuotes()
    }, [])
    
    const { quotes, getAllQuotes, editQuote, deleteQuote } = useContext(QuoteContext)

    const [ toggled, setToggled ] = useState(true)
    const toggle = () => {
        setToggled(prev => {
            console.log(prev)
            return !prev
        })
    }

    const filteredQuotesAdmin = quotes.filter(function(quote) {
        if (quote.character === props.character) {
            return (
                <>
                    <h1>{quote.quoteText}</h1>
                    <h4>Season: {quote.season}, Episode: {quote.episodeName}</h4>
                </>
            )
        }
    })

    const sortedQuotesAdmin = (filteredQuotesAdmin.sort(function(a, b) {
        return a.season - b.season
        }).map(quote => {
        return (
            <>
                <div className='charQuoteMap' key={quote._id}>                
                        <h1 className='charQuotes'>"{quote.quoteText}"</h1>
                        <h4 className='charQuotesSeason'>Season: {quote.season}</h4>
                        <h4 className='charQuotesEpisode'>Episode: {quote.episodeName}</h4>
                </div>
                { toggled ? 
                    <div>
                        <button onClick={() => {
                            editQuote(props._id)
                            toggle()
                            }} 
                            className='quoteButton'>Edit</button>
                        <button onClick={() => deleteQuote(props._id)} className='quoteButton'>Delete</button>
                    </div>
                        :
                        <AddQuoteForm button='Save Changes' type='update' job={props} toggle={toggle}/>  
                }
            </>
        )
    }))
    
    return (
        <div className='charNew'>
            {/* {sortedQuotes.map(quote => 
            <>
                <div className='charQuoteMap'
                    key={quote._id}>                
                    <h1 className='charQuotes'>"{quote.quoteText}"</h1>
                    <h4 className='charQuotesSeason'>Season: {quote.season}</h4>
                    <h4 className='charQuotesEpisode'>Episode: {quote.episodeName}</h4>
                </div> */}
                {sortedQuotesAdmin}
                
            {/* </> */}
            {/* )} */}
        </div>
    )
}