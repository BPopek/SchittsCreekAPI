import React, { useContext, useEffect, useState } from 'react';
import { QuoteContext } from '../QuoteProvider'
import AddQuoteForm from './AddQuoteForm'

export default function CharacterQuotesAdmin(props) {
    
    useEffect(() => {
        getAllQuotes()
    }, [])
    
    const { quotes, getAllQuotes, editQuote, deleteQuote } = useContext(QuoteContext)
    // const { type, quote } = props

    const [ toggled, setToggled ] = useState(true)
    const toggle = () => {
        setToggled(prev => {
            // console.log(prev)
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

    // const sortedQuotesAdmin = (filteredQuotesAdmin.sort(function(a, b) {
    //     return a.season - b.season
    //     }).map(quote => {
    //     return (
    //         <>
    //             <div className='charQuoteMap' key={quote._id}>                
    //                     <h1 className='charQuotes'>"{quote.quoteText}"</h1>
    //                     <h4 className='charQuotesSeason'>Season: {quote.season}</h4>
    //                     <h4 className='charQuotesEpisode'>Episode: {quote.episodeName}</h4>
    //             </div>
    //             { toggled ? 
    //                 <div>
    //                     <button onClick={() => {
    //                         editQuote(props._id)
    //                         toggle()
    //                         }} 
    //                         className='quoteButton'>Edit</button>
    //                     <button onClick={() => deleteQuote(props._id)} className='quoteButton'>Delete</button>
    //                 </div>
    //                     :
    //                     <AddQuoteForm button='Save Changes' type='update' quote={props} toggle={toggle}/>  
    //             }
    //         </>
    //     )
    // }))
    const sortedQuotesAdmin = (filteredQuotesAdmin.sort(function(a, b) {
        return a.season - b.season
        }))

return (
        <div className='charNew' > 
            {sortedQuotesAdmin.map(quote =>
            <>
                <div className='charQuoteMap' 
                    key={quote._id}>                
                    <h1 className='charQuotesAdmin'>"{quote.quoteText}"</h1>
                    <h4 className='charQuotesSeasonAdmin'>Season: {quote.season}</h4>
                    <h4 className='charQuotesEpisodeAdmin'>Episode: {quote.episodeName}</h4>                    
                    {/* <h4 className='charQuotesEpisode'>Id: {quote._id}</h4> */}

                </div>
                {/* { toggled ? 
                    <>
                        <button onClick={() => {
                            editQuote(quote._id)
                            toggle()
                            }} 
                            className='quoteButton'>Edit</button>
                        <button onClick={() => deleteQuote(quote._id)} className='quoteButton'>Delete</button>
                    </>
                        :
                        <AddQuoteForm button='Save Changes' type='update' quote={props} toggle={toggle}/>  
                } */}
                <>
                    <button onClick={() => deleteQuote(quote._id)} className='quoteButton'>Delete</button>
                </>   
            </>            
            )}
        </div>
    )
}