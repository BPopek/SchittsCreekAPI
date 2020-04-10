import React from 'react';

function AnswerForm(props) {
    
    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target;
        if(value === props.character) {
            return 'correct' 

        }
    }

    return (
        <div className='AnswerFormContainer'>            
            <form className='form'>
                <button className='answerButton' type='button' value='Johnny' onClick={handleChange}>Johnny</button>
                <button className='answerButton' type='button' value='Moira' onClick={handleChange}>Moira</button>
                <button className='answerButton' type='button' value='David' onClick={handleChange}>David</button>
                <button className='answerButton' type='button' value='Alexis' onClick={handleChange}>Alexis</button>
                <button className='answerButton' type='button' value='Stevie' onClick={handleChange}>Stevie</button>
                <button className='answerButton' type='button' value='Roland' onClick={handleChange}>Roland</button>
                <button className='answerButton' type='button' value='Jocelyn' onClick={handleChange}>Jocelyn</button>
                <button className='answerButton' type='button' value='Ted' onClick={handleChange}>Ted</button>
                <button className='answerButton' type='button' value='Patrick' onClick={handleChange}>Patrick</button>
                <button className='answerButton' type='button' value='Twyla' onClick={handleChange}>Twyla</button>
            </form>
        </div>
    ) 
} 
export default AnswerForm;