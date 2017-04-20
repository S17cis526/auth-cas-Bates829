/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3433;

// Requires
var fs = require('fs');
var https = require('https');
var express = require('express');
var config = require("./config.json");


// The webserver
var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}
var server = https.createServer(options, app);


// The Express app
var app = express();

// Serve files from public folder
app.use(express.static('public'));

var AuthCAS = require('auth-cas');
var auth = new AuthCAS(config.host, config.casHost);;


// Start the server
server.listen(PORT, function(){
  console.log(PORT);
});
