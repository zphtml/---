var express = require('express'),
	agent = require('superagent')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const HOST = 'http://quanzi.ihbaby.com';

app.all('*',function(req,res,next){
	if(!req.get('Origin')) return next();
	res.set('Access-Control-Allow-Origin','*');
	res.set('Access-Control-Allow-Methods','GET,POST');
	res.set('Access-Control-Allow-Headers','X-Requested-With, Content-Type');

	if(res.Method === 'OPTIONS') return res.send('200');
	next();
});

app.post('*',function(req,res){
  agent.post(HOST + req.originalUrl)
  .send(req.body)
  .end(function (error, r) {
    res.end(r.text);
  });
});

app.get('*',function(req,res){
  agent.post(HOST + req.originalUrl)
  .end(function (error, r) {
    res.end(r.text);
  });
});

app.listen('8888');