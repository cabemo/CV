const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res) => {
    res.render('index');
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening on port ${port}`);