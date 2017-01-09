var express = require('express');
var path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'App'), {
  dotfiles: 'ignore',
  index: false
}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'data.json'))
})


/**
* Start Server
*/
const port = 3000;
app.listen(port);
console.log('Serving: localhost:' + port);
