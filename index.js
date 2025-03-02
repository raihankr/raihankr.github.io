const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const app = express();

const content = {
  'skills': fs.readFileSync('./contents/skills.json'),
};

// Use pug as the template engine for directory `views`
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the `public` directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', content.skills);
});

// Start the server
// const server = app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Watch the contents directory for changes
const directoryPath = path.join(__dirname, 'contents');
fs.watch(directoryPath, (eventType, filename) => {
  if (filename) {
    console.log(`${filename} file changed`);
    var basename = path.basename(filename, '.json');
    content[basename] = fs.readFileSync(`./contents/${filename}`);
    console.log(content);
  }
});

module.exports = app;
