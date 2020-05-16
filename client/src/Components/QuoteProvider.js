import React, { useState } from 'react';
import axios from 'axios';

const quoteAxios = axios.create()

quoteAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const QuoteContext = React.createContext();

function QuoteProvider(props) {
    const [ userState, setUserState ] = useState({
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || ''
    })

    const login = credentials => {
        return axios.post('/auth.login', credentials)
            .then(res => {
                const { token, user } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prev => ({
                    ...prev, user, token
                }))
                return res
            }).catch(err => err)
    }
    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUserState({
            user: {},
            token: ''
        })
    }

    const [ quotes, setQuotes ] = useState([])
    // const [ quotes, setQuotes, characterQuotes, setCharacterQuotes ] = useState([])
    
    const getAllQuotes = () => {
        return quoteAxios.get('/api/quotes')
        .then(res => {
            setQuotes(res.data);
            return res;
        })
        .catch(err => console.log(err))
    }
    // const { char } = props
    // const getCharacterQuotes = (char) => {
    //     return quoteAxios.get(`/api/quotes/character/${char}`)
    //     .then(res => {
    //         setCharacterQuotes(res.data);
    //         return res;
    //     })
    //     .catch(err => console.log(err))
    // }

    const [ needStart, setNeedStart ] = useState(true)
    const handleStart = () => {
        setNeedStart(false)
    }

    return (
        <QuoteContext.Provider 
            value={{
                ...useState, 
                quotes,
                needStart,
                getAllQuotes, 
                //getCharacterQuotes,
                handleStart,
                login, 
                logout
            }}>
            { props.children }
            </QuoteContext.Provider>
    )
}

export { QuoteContext, QuoteProvider }