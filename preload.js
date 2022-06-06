const https = require('https');

const url = 'https://it.dashuf.com/announcement/getEfficientList';

const getRes = () => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let resData = '';
      res.on('data', chunk => {
        console.log(chunk);
      })
    })
  });
}

getRes();