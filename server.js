const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('choice' in params){
        let serverChoice = rps()
        res.writeHead(200, {'Content-Type': 'application/json'});
        let objToJson = {
          enemyMove:serverChoice,
          winStatus:'indeterminate'
        }
        if(serverChoice === 'rock' && params['choice'] == 'rock'){
          objToJson.winStatus = 'tie'
        }
        else if(serverChoice === 'rock' && params['choice'] == 'paper'){
          objToJson.winStatus = 'win'
        }
        else if(serverChoice === 'rock' && params['choice'] == 'scissors'){
          objToJson.winStatus = 'loss'
        }
        else if(serverChoice === 'scissors' && params['choice'] == 'scissors'){
          objToJson.winStatus = 'tie'
        }
        else if(serverChoice === 'scissors' && params['choice'] == 'rock'){
          objToJson.winStatus = 'win'
        }
        else if(serverChoice === 'scissors' && params['choice'] == 'paper'){
          objToJson.winStatus = 'loss'
        }
        else if(serverChoice === 'paper' && params['choice'] == 'paper'){
          objToJson.winStatus = 'tie'
        }
        else if(serverChoice === 'paper' && params['choice'] == 'scissors'){
          objToJson.winStatus = 'win'
        }
        else if(serverChoice === 'paper' && params['choice'] == 'rock'){
          objToJson.winStatus = 'loss'
        }
       
        res.end(JSON.stringify(objToJson));     
    }//student if
  }//else if
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/javascript.js'){
    fs.readFile('javascript.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});
function rps(){
  let ran = Math.ceil(Math.random()*3)
  if(ran == 1){
    return 'rock'
  }
  else if(ran == 2){
    return 'paper'
  }
  else if(ran === 3){
    return 'scissors'
  }
}
server.listen(8000);
