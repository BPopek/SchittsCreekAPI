import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// import hero from '../Images/sc-s6-hero.jpg'
// import logo from '../Images/SC-logo.png'
import signQuiz from '../Images/SchittsCreekSign.png'
import charSign from '../Images/CharacterProfiles.png'

function Home(props) {

    return (
        <div className='main'>
            {/* <img src={hero} alt='Schitts Creek Cast' className='homeImage' /> */}
            <div  alt='Schitts Creek Cast' className='homeImage' ></div>

            <div className='homeContainer'>
                    <Link to="/quiz">
                        <img src={signQuiz} alt='Schitts Creek Sign' className='quizSign' />
                    </Link>
                    <Link to="/characters"> 
                        <img src={charSign} alt='Character Profiles Logo' className='charSign' />
                    </Link>
            </div>
        </div>
    )
}

export default withRouter(Home)



// <div className='homeContainer'>
//                 <div className='skew1Container'> {/* relative */}
//                     <Link to="/quiz">
//                         {/* <div className='skew1'>
//                             <div className='unskew1'>Play the <br /> Quote Quiz!</div> 
//                         </div> */}
//                         <img src={signQuiz} alt='Schitts Creek Sign' className='quizSign' />

//                     </Link>
//                     {/* <div className='homeCards'>
//                         <img src={logo} alt='Schitts Creek Logo' className='homeLogo' />
//                         <p className='homeText'>
//                         Quiz </p>
//                     </div> */}
//                 </div>
//                 <div className='skew2Container'>
//                     <Link to="/characters"> 
//                         {/* <div className='skew1'>
//                             <div className='unskew1'>Read About the <br /> Characters!</div> 
//                         </div> */}
//                         <img src={charSign} alt='Character Profiles Logo' className='charSign' />

//                     </Link>
//                     {/* <div className='homeCards'>
//                         <p className='homeText2'>
//                         Character
//                             <br />
//                         Biographies</p>
//                     </div> */}
//                 </div>