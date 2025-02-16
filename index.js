const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

module.exports = app;
