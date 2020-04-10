const express = require('express');
const quoteRouter = express.Router();
const Quote = require("../models/scModel.js");
// const { v4: uuidv4 } = require('uuid');
// uuidv4();

//POST NEW QUOTE
const quotes = []
quoteRouter.post('/', (req, res) => {
    const newEntry = new Quote(req.body);    
    newEntry.save((err, newEntry) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
    });
    return res.status(201).send(newEntry);
})

//GET ALL QUOTES
quoteRouter.get('/', (req, res) => {
    Quote.find((err, quotes) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        return res.status(200).send(quotes);
    })
})
//GET ONE QUOTE BY ID ********
quoteRouter.get('/:_id', (req, res) => {
    const quoteID = req.params._id 
    Quote.findById(quoteID, (err, quote) => {
        if(err){
            res.status(500);
            return res.send(err)
        } else if(!quote){
            res.status(404)
            return next(new Error('Quote not found with this ID'))
        } 
        return res.send(quote)
    })
})

////////******** ALL QUOTES FOR CHARACTER
quoteRouter.get('/character/:character', (req, res, next) => {
    Quote.find( { character: req.params.character }, (err, charQuotes) => {
        if(err){
            res.status(500);
            return next(err);
        } else if(!charQuotes) {
            res.status(404)
            return next(new Error('Character not found'))
        }
        return res.send(charQuotes)
    })
})
    ///////////////////////////

    // quoteRouter.get('/', (req, res, next) => {
    //     Quote.find(req.params.character, (err, charQuotes) => {
    //         if(err){
    //             res.status(500);
    //             return next(err);
    //         } else if(!charQuotes) {
    //             res.status(404)
    //             return next(new Error('Character not found'))
    //         }
    //         return res.send(charQuotes)
    //     })
    // })

///////////////////////////

    // const specificCharacter = quotes.find(quote => quote.character === req.params.character)
    //     if (err) {
    //         res.status(500);
    //         return next(err);
    //     }
    //     // console.log(character)
    //     return res.send(specificCharacter);
    // })
// })



//////////////////////////////////////////////
//get random quote 
// quoteRouter.get('/quotes/:_id', (req, res) => {
//     const randomQuote = xxx
// })

//EDIT QUOTE
quoteRouter.put('/:_id', (req, res) => {
    const quoteID = req.params._id 
    const quoteToUpdate = quotes.find(quote => quote._id === quoteID)
    const quoteIndexToUpdate = quotes.findIndex(quote => quote._id === quoteID)
    const updatedQuote = Object.assign(quoteToUpdate, req.body)
    quotes.splice(quoteIndexToUpdate, 1, updatedQuote)
    res.send(updatedQuote)
})

//DELETE QUOTE
quoteRouter.delete('/:_id', (req, res) => {
    const quoteID = req.params._id
    const quoteIndexToDelete = quotes.findIndex(quote => quote._id === quoteID)
    const quoteText = quotes[quoteIndexToDelete].text
    quotes.splice(quoteIndexToDelete, 1)
    res.send(`Successfully deleted Quote ${quoteText}`)
})

module.exports = quoteRouter;

// GET https://www.ourapi.com/api/quotes/character – This will get the quotes for character
// POST https://www.ourapi.com/api/quotes – This will create the stats a character
// PUT https://www.ourapi.com/api/quotes/character – This will update the quotes for character
// DELETE https://www.ourapi.com/api/v1/stats/101 – This will delete the quotes for character