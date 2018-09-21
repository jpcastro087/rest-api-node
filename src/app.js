const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rest-api-example',{
  useNewUrlParser: true
})
.then(db=>console.log('db is connected'))
.catch(err => console.log(err))

//settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(morgan('dev'));

//Routes
app.use('/users',require('./routes/users'));
app.use('/products',require('./routes/products'));

//Static Files

//Start server
app.listen(app.get('port'), ()=>{
  console.log('server on port ', app.get('port'));
})
