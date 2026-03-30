const https = require('https');

https.get('https://images.search.yahoo.com/search/images?p=KEK+Palu+Kawasan+Ekonomi+Khusus+aerial', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/imgurl=(https?:\/\/[^&]+)/g);
    if (matches) {
      matches.slice(0, 5).forEach(m => console.log(decodeURIComponent(m.replace('imgurl=', ''))));
    } else {
      console.log('No matches found');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
