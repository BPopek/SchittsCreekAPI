import React from 'react';

function Quote() {
    
    return (
        <div className='quoteContainer'>
            <Quote />
            <form className='form'>
                <h1>{props.character}</h1>
                <p>{props.quoteText}</p>
            </form>
        </div>
    ) 
} 
export default Quote;