const express = require('express')
const routes = express.Router()
const voluntarios = require('./voluntarios')

routes.get('/', function(req,res){
    return res.render("TelaLogin")
})
routes.get('/NovaSenha', function(req,res){
    return res.render("NovaSenha")
})

routes.get('/create', function(req,res){
    return res.render('create')
    
})

routes.get('/principal', function(req,res){
    return res.render('principal')
    
})



module.exports =  routes