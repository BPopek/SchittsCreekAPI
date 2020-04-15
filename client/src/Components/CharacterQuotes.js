import React, { useContext, useEffect } from 'react';
import { QuoteContext } from './QuoteProvider'

export default function CharacterQuote(props) {

    const { quotes, getAllQuotes, setCharacterQuotes } = useContext(QuoteContext)

//     useEffect(() => {
//         getCharacterQuotes(); 
//     }, [])

//     const { char } = props

//     const specificCharObj = quotes.filter(quote => {
//         let characterQuotes = []
//         // console.log({characterQuotes})
             
//         if(char === quote.character) {
//             characterQuotes.push(quotes)}
//             return (
//                 <div className='charQuote'
//                 //key={quote._id}
//                 >
//                     {characterQuotes.quoteText}
//                     </div>
//             )}, {})
            
//             return (
//                 <div>
//                     {specificCharObj}
//                 </div>
//             )
// }


        useEffect(() => {
            getAllQuotes()
        }, [])

        const specificCharQuotes = (character) => {
            // e.preventDefault()
            // const { name, value } = e.target;
            if(character === quotes.character) {
                setCharacterQuotes(prev => {
                    return !prev
                }) 
        }
        return (
            <div>
                {specificCharQuotes}
            </div>
        )
    }
}