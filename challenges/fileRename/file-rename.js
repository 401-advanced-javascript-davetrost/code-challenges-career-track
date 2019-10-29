const fs = require('fs').promises;
const moment = require('moment');

const directory = '../../temp';

fs.readdir(directory, 'utf-8')
  .then(files => files.map(filename => {
    const filenameChunks = filename.split('.');
    const extension = (filenameChunks.length > 1) ? filenameChunks.pop() : '';
    const shortName = filenameChunks.join('.');
    const longName = directory + '/' + filename;
    fs.readFile(longName, 'utf-8')
      .then(content => {
        content = content.trim().replace(' ', '_');
        fs.stat(longName)
          .then(info => {
            const dateString = moment.utc(info.ctime).format('YYYY-MM-DDThh:mm:ss');
            fs.rename(longName, shortName + '-' + content + '-' + dateString + '.' + extension)
              .then(() => {
                console.log(shortName, content, info.ctime, extension);
              }).catch(err => console.log(err));
          });
      });

  }));