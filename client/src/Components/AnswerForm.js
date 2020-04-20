// import React from 'react';

// function AnswerForm(props) {
    
//     const handleChange = e => {
//         e.preventDefault()
//         const { name, value } = e.target;
//         if(value === currentRandomQuote.character) {
//             return 'correct' 
//         }
//     }
//     console.log(props)

//     return (
//         <div className='answerContainer'>            
//             <button className='answerButton' type='button' value='Johnny' onClick={handleChange}>Johnny</button>
//             <button className='answerButton' type='button' value='Moira' onClick={handleChange}>Moira</button>
//             <button className='answerButton' type='button' value='David' onClick={handleChange}>David</button>
//             <button className='answerButton' type='button' value='Alexis' onClick={handleChange}>Alexis</button>
//             <button className='answerButton' type='button' value='Stevie' onClick={handleChange}>Stevie</button>
//             <button className='answerButton' type='button' value='Roland' onClick={handleChange}>Roland</button>
//             <button className='answerButton' type='button' value='Jocelyn' onClick={handleChange}>Jocelyn</button>
//             <button className='answerButton' type='button' value='Ted' onClick={handleChange}>Ted</button>
//             <button className='answerButton' type='button' value='Patrick' onClick={handleChange}>Patrick</button>
//             <button className='answerButton' type='button' value='Twyla' onClick={handleChange}>Twyla</button>
//         </div>
//     ) 
// } 
// export default AnswerForm;





        {/* <div className='main'>
            <div  alt='Schitts Creek Cast' className='homeImage' ></div>

            <div className='homeContainer'>
                    <Link to="/quiz" className='signContainer'>
                        <img src={signQuiz} alt='Schitts Creek Sign' className='quizSign' />
                    </Link>
                    <Link to="/characters"> 
                        <img src={charSign} alt='Character Profiles Logo' className='charSign' />
                    </Link>
            </div>
        </div> */}


 {/* <Route render={(location) => {
                    return (
                    <TransitionGroup className='homeContainer1'>
                        <Link to="/quiz" className='signContainer'>
                            <CSSTransition
                                key={location.key}
                                timeout={{enter: 0, exit: 5000}}
                                classNames='quizAnimation'
                                >
                                <img src={signQuiz} alt='Schitts Creek Sign' className='quizSign'/>
                                {/* <div className='nail1'></div> */}
                            {/* </CSSTransition>
                        </Link>
                   
                    <CSSTransition
                        key={location.key}
                        timeout={50000}
                        classNames='charAnimation'
                        >
                        <Link to="/characters"> 
                            <img src={charSign} alt='Character Profiles Logo' className='charSign' />
                        </Link>
                    </CSSTransition>
                </TransitionGroup>
                    )}} /> */}