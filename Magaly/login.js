//Modules-imports
var http = require('http');
var urlParser = require('url');
var mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
//Variables
var users = [];
//Código 
http.createServer(function (req, res) {
    var str = '';
    var url = req.url;
    var params = urlParser.parse(req.url, true);
    var properties = Object.keys(params.query);
    properties.forEach(property => {
        console.log(property);
    });

    if (url.includes('/login') && req.method == 'POST')
    {
        console.log('User trying to login: ' + req.headers.userId);
    
    if (users[req.headers.userId] == true)
    {
        res.writeHead(200, {});
        res.end("reason: user has logged in");
    }
        else if(userExist(req.headers.userId,req.headers.userPass))
        {
            users[req.headers.userId]=true;
            setTimeout(() =>{
                users[req.headers.userId] = false; 
            }, 60000); 
            res.writeHead(201, {});
            resizeTo.end("result: logged");
        }
        else
        {
            res.writeHead(403, {});
            res.end("error: Invalid username or password");
        }

    }

    req.on('data', chunk => {
        str += chunk;
    });
    req.on('end', function () {
        //console.log(str);
    });
}).listen(8080);
//localhost:8080
function userExist( user, pass)
{
    
    return false;
}