const express = require("express");
let router = express.Router();
const { ensureAuthenticated } = require('../config/off');
const Product = require('../models/product');
const mongoose = require('mongoose');
const multer = require("multer");
const path = require('path');


const storage = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,'./public/img/')
	},
	filename: function(req,file,cb){
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({storage:storage})


	/*
	router.get('/admin', ensureAuthenticated, function(req,res){

		res.render('welcome', {

			req:req.user
		});
	})
	*/

	router.get('/', async(req, res) => {
		try{
			const product = await Product.find({})
			res.render('welcome', {products:product})
			console.log(req.file.path);

		}
		catch(err){
			res.redirect('/')
			console.log(err)
		}


	});

	router.get("/dashboard", ensureAuthenticated, (req,res) => {
		res.render('dashboard', {

			name:req.user.name
		})
	});
 

	router.post('/', upload.single('img'), function(req,res){
		console.log(req.file);
		const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
		img:req.file.path
	});
	product.save()
	.then(result => {
		console.log(result)
		res.redirect('/')
	})
	.catch(err => console.log(err));

});

	
module.exports = router;





