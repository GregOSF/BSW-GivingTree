var express = require('express');
var app = express();

app.use('/images', express.static(__dirname + '/images'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Homepage route
app.get('/',function(req,res){
    res.sendFile('index.html',{'root':__dirname + '/public/views'});
})

// Water route
app.get('/water',function(req,res){
    res.sendFile('water.html',{'root':__dirname + '/public/views'});
})

// Education route
app.get('/education',function(req,res){
    res.sendFile('education.html',{'root':__dirname + '/public/views'});
})

// Operations route
app.get('/operations',function(req,res){
    res.sendFile('teachers.html',{'root':__dirname + '/public/views'});
})





// Listen on port 3000
app.listen('3000',function(){
    console.log('Server is working!')
})