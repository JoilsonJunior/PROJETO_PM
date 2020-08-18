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

routes.get('/createFamilia', function(req,res){
    return res.render('createFamilia')    
})

routes.get('/familiacarente', function(req,res){
    return res.render('familiacarente')    
})
routes.get('/createPaciente', function(req,res){
    return res.render('createPaciente')    
})

routes.get('/paciente', function(req,res){
    return res.render('paciente')    
})
routes.get('/createParti', function(req,res){
    return res.render('createParti')    
})

routes.get('/participantes', function(req,res){
    return res.render('participantes')    
})




module.exports =  routes