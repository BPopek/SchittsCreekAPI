import React from 'react';
import { withRouter } from 'react-router-dom';

import Quiz from './Quiz'

function Home(props) {

    return (
        <div>
            <h1>TEST</h1>
            {/* <Quiz /> */}
        </div>
    )
}

export default withRouter(Home)