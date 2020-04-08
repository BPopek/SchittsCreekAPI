import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import johnny from '../Images/johnny.jpg';
import moira from '../Images/moira.jpg';
import alexis from '../Images/alexis.jpg';
import david from '../Images/david.jpg';
import jocelyn from '../Images/jocelyn.jpg';
import roland from '../Images/roland.jpg';
import patrick from '../Images/patrick.jpg';
import stevie from '../Images/stevie.jpg';
import twyla from '../Images/twyla.jpg';
import ted from '../Images/ted.jpg';

function CharacterProfiles() {

    return (
        <div className='characterContainer'>
            <div className='frame'>
                <img className='charPhoto' src={johnny} alt='Johnny Rose'></img>
            </div>
            <h3>Johnny Rose</h3>
            <p>As the former CEO of the nation’s second-largest chain of video rental stores, Johnny feels right at home at the helm of the Rosebud Motel with his business partner, Stevie. And as the motel receives increasing recognition and acclaim, Johnny is starting to feel like his old self: filled with purpose and pride. Johnny continues to cherish and support his loved ones in every way, even if it means taking out a line of credit to enable Moira’s spending habits. Of course, Johnny still has his sights set on leaving Schitt’s Creek, but he’s in no rush; as a man of principles, he’s willing to put in the time to build back his business and name.</p>

            <div className='frame'>
                <img className='charPhoto' src={moira} alt='Moira Rose'></img>
            </div>
            <h3>Moira Rose</h3>
                <p>A former daytime soap opera star, now awaiting her return to the silver screen in a franchise film, Moira believes she has much to bestow upon the community in terms of art and culture. Fittingly, she quickly finds herself directing a local production of Cabaret, a musical that hits close to home. With the exception of a much-needed romantic getaway with Johnny, and some (limited) quality time with the children, Moira throws all of her energy into the musical. It serves as a great distraction from waiting to hear about the Crows premiere date, and she can hardly contain her energy; for the first time since arriving in Schitt’s Creek, she has a clear escape.</p>
                <div className='frame'>
                <img className='charPhoto' src={david} alt='David Rose'></img>
            </div>
            <h3>David Rose</h3>
                <p>The self-described black sheep of the family, David continues to cope with his small town life with trademark bitterness. But it’s hard for David to keep up the sour attitude now that Patrick—his business and romantic partner—is at his side. Things are going so smoothly for David that he’s not sure how to cope, and he begins to project his own neuroses and fears onto the relationship, almost completely sabotaging a perfectly good thing. But David starts to realize that his stable relationship and career are the best things that have ever happened to him, and that Schitt’s Creek might actually be the home he’s always needed.</p>
                <div className='frame'>
                <img className='charPhoto' src={alexis} alt='Alexis Rose'></img>
            </div>
            <h3>Alexis Rose</h3>
                <p>A former socialite whose jet-setting life has ground to a halt, Alexis now finds herself embracing small town life. After reuniting with her on-again-off-again boyfriend, Ted, and starting a successful PR firm, Alexis is truly thriving in Schitt’s Creek. She’s even begun to appreciate all of the time she spends with the family, and instead of looking for the first ticket out, she’s starts to feel that she might actually miss the other Roses if she left. Alexis surprises everyone when she agrees to make a big change in her life for Ted—a sacrifice that shows she has come a long way from the old Alexis.</p>
                <div className='frame'>
                <img className='charPhoto' src={stevie} alt='Stevie Budd'></img>
            </div>
            <h3>Stevie Budd</h3>
                <p>Stevie, dry and sarcastic as always, would prefer to spend her days goofing off with David instead of doing any real work. But with the success of the motel, and David finding happiness, Stevie starts questioning her own future for the first time. She reluctantly decides to push her personal boundaries, but quickly sees why leaving your comfort zone is difficult. When Moira surprises Stevie by presenting the opportunity to work together on a project, Stevie does the most un-Stevie thing, and says yes.</p>
                <div className='frame'>
                <img className='charPhoto' src={roland} alt='Roland Schitt'></img>
            </div>
            <h3>Roland Schitt</h3>
                <p>As the mayor of Schitt’s Creek, Roland is highly attuned to the nuances of local politics, although he’ll rarely lift a finger to institute any actual change. And now that Roland is busy with his second job at the motel, he’s way less likely to make any mayoral impact. Roland has gradually learned to put family first, and with a new baby, he wants to be more hands-on this time around. In fact, it appears to be the first job he has really taken seriously. Roland has become an essential part of the Roses’ life in Schitt’s Creek, whether they like that or not.</p>
                <div className='frame'>
                <img className='charPhoto' src={jocelyn} alt='Jocelyn Schitt'></img>
            </div>
            <h3>Jocelyn Schitt</h3>
                <p>As the wife of the Mayor, Jocelyn wants to please everyone, often at the expense of her own sanity. But Jocelyn’s second baby has given her a new outlook, and she’s not putting up with any nonsense anymore. She starts to peel back her cheerful exterior and show the real Jocelyn: an over-worked mom with a bit of a temper, who’s running on no sleep. Moira, impressed by this newly unleashed Jocelyn, encourages her let it all out and let loose with her girlfriends—something Jocelyn desperately needs.</p>
                <div className='frame'>
                <img className='charPhoto' src={ted} alt='Ted Mullens'></img>
            </div>
            <h3>Ted Mullens</h3>
                <p>Ted, the town vet, had only just managed to get over his feelings for Alexis, and now they've reunited...</p>
                <div className='frame'>
                <img className='charPhoto' src={patrick} alt='Patrick Brewer'></img>
            </div>
            <h3>Patrick Brewer</h3>
                <p>Thoughtful, practical and business-savvy, Patrick perfectly complements David’s creative energy. As David’s boyfriend and business partner, Patrick juggles their need for structure and routine with David’s desire for adventure. Patrick’s self-assured confidence overshadows the fact that he’s still coming to terms with his new lifestyle, but Patrick isn’t one to run from his problems— he decides to face them head-on. And with David by his side, he feels like anything is possible. </p>
                <div className='frame'>
                <img className='charPhoto' src={twyla} alt='Twyla Sands'></img>
            </div>
            <h3>Twyla Sands</h3>
                <p>You'll most likely find Twyla behind the counter (or at your table) in Schitt's Creek's Café Tropical. Just don't ask about her family.</p>
        </div>
    )
}
export default withRouter(CharacterProfiles)