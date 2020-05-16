import React, { useState, useContext } from 'react';
import { QuoteContext } from '../Components/QuoteProvider';

import logo from '../Images/SC-logo-wide-shadow.png';

export default function Login() {

    const { login } = useContext(QuoteContext)

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleChangeLogin = e => {
        const { name, value } = e.target

        if( name === 'username' ) {
            setUsername(value)
        } else {
            setPassword(value)
        }
    }

    const clearInputs = e => {
        setUsername('')
        setPassword('')
        setErrorMessage('')
    }

    const handleSubmitLogin = e => {
        e.preventDefault();
        console.log('should be logging in')
        login({ username, password })
            .then(() => {

            })
            .catch(err => {
                console.dir(err)
                setErrorMessage(err.response.data.message)
            })
            clearInputs()
    }

    return (
        <div className='loginForm'>
            <form onSubmit={handleSubmitLogin} className='form'>
                <img src={logo} className='formlogo' alt='Schitts Creek Logo' />
                <h1 className='loginHeader'>ENTER LOG IN INFO:</h1>
                <div>
                    <input
                        onChange={handleChangeLogin}
                        value={username}
                        name='username'
                        type='text'
                        placeholder='Username'
                        className='loginInput' 
                        />
                    <input
                        onChange={handleChangeLogin}
                        value={password}
                        name='password'
                        type='password'
                        placeholder='Password'
                        className='loginInput' 
                        />
                        <button type='submit' className='loginButton'>LOG IN</button>
                </div>
            </form>
            {
                (errorMessage) &&
                <p className='errorMessage'>{errorMessage}</p>
            }
        </div>
    )
}