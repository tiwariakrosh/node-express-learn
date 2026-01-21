const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3500;
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');

// custom middleware logger 
app.use(logger)

// Cross Origin Resource Sharing
app.use(cors(corsOptions))

// build-n middleware handle urencoded foRm data
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

// serve static files
app.use('/', express.static(path.join(__dirname, '/public')))

// routes
app.use('/', require('./routes/root'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use(['/employees'], require('./routes/api/employees'))


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










