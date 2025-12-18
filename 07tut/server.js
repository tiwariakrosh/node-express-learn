const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3500;
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const { error } = require('console');

// custom middleware logger 
app.use(logger)

// Cross Origin Resource Sharing
const whitelist = ['https://www.google.com', 'http://127.0.0.1:5500', 'http://localhost:3500']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CROS'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// built-in middleware to handle urlencoded data
// in order words, form data 
// Constent-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

// serve static files
app.use(express.static(path.join(__dirname, '/public')))


app.get(/^\/$ |\/index(.html)?$/, (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get(/new-page(.html)?/, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get(/old-page(.html)?/, (req, res) => {
    res.redirect(301, 'new-page.html');  //302 by default
});

app.get(/hello(.html)?/, (req, res, next) => {
    console.log("attempted to load hello.html")
    next()
}, (req, res) => {
    res.send('Hello World !!')
});

const one = (req, res, next) => {
    console.log('one ');
    next()
}

const two = (req, res, next) => {
    console.log('two ');
    next()
}
const three = (req, res, next) => {
    console.log('three ');
    res.send('Finished')
    next()
}

app.get(/chain(.html)?/, [one, two, three])

app.use((req, res) => {
    res.status(404);

    if (req.accepts('html')) {
        return res.sendFile(
            path.join(__dirname, 'views', '404.html')
        );
    }

    if (req.accepts('json')) {
        return res.json({ error: '404 Not Found' });
    }

    return res.type('txt').send('404 Not Found');
});

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))










