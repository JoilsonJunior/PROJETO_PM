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

routes.get('/createDisc', function(req,res){
    return res.render('createDisc')    
})
routes.get('/disciplina', function(req,res){
    return res.render('disciplina')    
})

routes.get('/createCursos', function(req,res){
    return res.render('createCursos')    
})
routes.get('/cursoseacoes', function(req,res){
    return res.render('cursoseacoes')    
})





module.exports =  routes