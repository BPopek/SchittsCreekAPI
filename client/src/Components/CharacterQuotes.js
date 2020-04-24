import React, { useContext, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'

export default function CharacterQuote(props) {
    
    useEffect(() => {
        getAllQuotes()
    }, [])
    
    const { quotes, getAllQuotes } = useContext(QuoteContext)
    // const [ singleCharacterQuote, setSingleCharacterQuote ] = useState({
    //     character: '',
    //     quoteText: '',
    //     season: '',
    //     episodeName: '',
    // })

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
                <div className='charQuoteMap'
                    key={quote._id}>                
                    <h1 className='charQuotes'>"{quote.quoteText}"</h1>
                    <h4 className='charQuotesSeason'>Season: {quote.season}</h4>
                    <h4 className='charQuotesEpisode'>Episode: {quote.episodeName}</h4>
                </div>
                )}
        </div>
    )
}