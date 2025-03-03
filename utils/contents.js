const fs = require('fs');
const path = require('path');

const contents = {
  skills_overview: '',
};

const directoryPath = path.join(__dirname, '../contents');
fs.watch(directoryPath, reloadContent);

for (let filename in contents) {
  reloadContent(null, `${filename}.json`);
}

function reloadContent(eventType, filename) {
  if (filename) {
    console.log(`LOAD ${filename}`);
    var basename = path.basename(filename, '.json');
    contents[basename] = JSON.parse(fs.readFileSync(path.join(directoryPath, filename)));
  }
}

module.exports = contents;
