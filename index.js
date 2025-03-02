const app = require('./app.js');
const contents = require('./utils/contents.js');

const PORT = process.env.PORT || 3000;

app.locals.contents = contents;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
