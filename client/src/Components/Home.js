import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

// import hero from '../Images/sc-s6-hero.jpg'
import signQuiz from '../Images/SchittsCreekSign3.png'
import playThe from '../Images/PlayThe.png'
import charSign from '../Images/CharacterProfiles.png'

// import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Home(props) {
    const [ showQuizSign, setShowQuizSign ] = useState(false)
    const [ showCharacterSign, setShowCharacterSign ] = useState(false)

    function handleClickGame(){
        setTimeout(() => props.history.push('/quiz'), 4900)
        setShowQuizSign(true)
    }
    function handleClickCharacters(){
        setTimeout(() => props.history.push('/characters'), 3000)
        setShowCharacterSign(true)
    }
    return (
        <div>
            <div  alt='Schitts Creek Cast' className='homeImage' ></div>
            <div className='main'>
                <div className='homeContainer'>
                    <div className='quizHomeContainer'>
                        <img src={playThe} alt='Play The Game' className='playThe' />
                        <div className={`static-class ${showQuizSign && 'quizAnimation'}`} 
                            onClick={() => handleClickGame()}>
                            <img src={signQuiz} alt='Schitts Creek Sign' className='quizSign' />
                        </div>
                    </div>
                    <div className='profileContainer'>
                        <span className='readThe'>READ THE</span>
                        <div className={`static-class ${showCharacterSign && 'charAnimation'}`} 
                            onClick={() => handleClickCharacters()}>
                            <img src={charSign} alt='Character Profiles Logo' className='charSign' />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default withRouter(Home)
