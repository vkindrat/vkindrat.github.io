let express = require('express');
let app = express();
let bcrypt = require('bcrypt');
let expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const handlebars = require('handlebars');


require('./config/passport')(passport)


const db = require('./config/keys').MongoURI;


mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then (() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));




app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.set("views",'./View');
app.set("view engine", "ejs");


app.use(express.urlencoded({extended:false}));

app.use(session({

	secret:'secret',
	resave:true,
	saveUninitialized:true,
	
	}))


app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req,res,next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
})



app.use('/', require('./rotas/index'));
app.use('/user', require('./rotas/user'));



app.listen(3000, function(){

	console.log('Servidor iniciado na porta 3000.')
});