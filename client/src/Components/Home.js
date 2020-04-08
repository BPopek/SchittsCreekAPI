import React from 'react';
import { withRouter } from 'react-router-dom';

import Quiz from './Quiz'

function Home(props) {

    return (
        <div>
            <Quiz />
        </div>
    )
}

export default withRouter(Home)