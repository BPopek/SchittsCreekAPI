const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 7250;
// const NODE_ENV = process.env.NODE_ENV || 'development';

// app.set('port', PORT);
// app.set('env', NODE_ENV);

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api/quotes", require("./routes/quoteRouter.js"));
app.use("api/quotes/character", require("./routes/quoteRouter.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/quotesDB",
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindandModify: false 
    },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "./client/public/index.html"), 
    function(err) {
        if (err) {
            res.status(500).send(err)
        }
    });
});

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"), function(err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     });
// });


app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`)
});

