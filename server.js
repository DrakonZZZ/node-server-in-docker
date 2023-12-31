const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}`));
