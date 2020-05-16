import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { QuoteContext } from '../Components/QuoteProvider';

export default function ProtectedRoute(props) {

    const { token } = useContext(QuoteContext)
    const { component: Component, ...rest } = props

    return (
        token ? 
            <Route {...rest} component={Component} />
            :
            <Redirect to='login' />
    )
}