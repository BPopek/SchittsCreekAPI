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
        return axios.post('/auth/login', credentials)
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

    const addNewQuote = (newQuote) => {
        // handleQuote()
        return quoteAxios.post('/api/quotes', newQuote)
        .then(res => {
            getAllQuotes()
            return res
        })
    }

    const deleteQuote = (quoteId) => {
        return quoteAxios.delete(`/api/quotes/${quoteId}`)
        .then(res => {
            setQuotes(prev => {
                const updatedQuotes = prev.filter(quote => {
                    return quote._id !== quoteId
                })
                return updatedQuotes
            })
            return res
        })
    }

    const [ needStart, setNeedStart ] = useState(true)
    const handleStart = () => {
        setNeedStart(false)
    }

    const [ toggledJohnny, setToggledJohnny ] = useState(true)
    const [ toggledMoira, setToggledMoira] = useState(true)
    const [ toggledDavid, setToggledDavid ] = useState(true)
    const [ toggledAlexis, setToggledAlexis ] = useState(true)
    const [ toggledStevie, setToggledStevie ] = useState(true)
    const [ toggledRoland, setToggledRoland ] = useState(true)
    const [ toggledJocelyn, setToggledJocelyn ] = useState(true)
    const [ toggledPatrick, setToggledPatrick ] = useState(true)
    const [ toggledTed, setToggledTed ] = useState(true)
    const [ toggledTwyla, setToggledTwyla ] = useState(true)

    const toggledNameJohnny = () => {
        setToggledJohnny(prev => {
                return !prev
        })
    }
    const toggledNameMoira = () => {
        setToggledMoira(prev => {
                return !prev
        })
    }
    const toggledNameDavid = () => {
        setToggledDavid(prev => {
                return !prev
        })
    }
    const toggledNameAlexis = () => {
        setToggledAlexis(prev => {
                return !prev
        })
    }
    const toggledNameStevie = () => {
        setToggledStevie(prev => {
                return !prev
        })
    }
    const toggledNameRoland = () => {
        setToggledRoland(prev => {
                return !prev
        })
    }
    const toggledNameJocelyn = () => {
        setToggledJocelyn(prev => {
                return !prev
        })
    }
    const toggledNamePatrick = () => {
        setToggledPatrick(prev => {
                return !prev
        })
    }
    const toggledNameTed = () => {
        setToggledTed(prev => {
                return !prev
        })
    }
    const toggledNameTwyla = () => {
        setToggledTwyla(prev => {
                return !prev
        })
    }

    return (
        <QuoteContext.Provider 
            value={{
                ...useState, 
                quotes,
                needStart,
                getAllQuotes, 
                addNewQuote,
                deleteQuote,
                //getCharacterQuotes,
                handleStart,
                login, 
                logout,
                toggledJohnny,
                setToggledJohnny,
                toggledNameJohnny,
                toggledMoira,
                setToggledMoira,
                toggledNameMoira,
                toggledDavid,
                setToggledDavid,
                toggledNameDavid,
                toggledAlexis,
                setToggledAlexis,
                toggledNameAlexis,
                toggledStevie,
                setToggledStevie,
                toggledNameStevie,
                toggledRoland,
                setToggledRoland,
                toggledNameRoland,
                toggledJocelyn,
                setToggledJocelyn,
                toggledNameJocelyn,
                toggledPatrick,
                setToggledPatrick,
                toggledNamePatrick,
                toggledTed,
                setToggledTed,
                toggledNameTed,
                toggledTwyla,
                setToggledTwyla,
                toggledNameTwyla,
            }}>
            { props.children }
            </QuoteContext.Provider>
    )
}

export { QuoteContext, QuoteProvider }