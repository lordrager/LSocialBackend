const express = require('express')
const router = express.Router()

const users = [{ name: 'Kayle'}, { name: 'Sally'}]

router.get('/', (req, res)=>{
    res.send('User list')
})

router.get('/new', (req, res) =>{
    res.send("User new form")
})

router.post('/', (req, res)=>{
    res.send('Create user')
})

router.get('/:id', (req, res)=>{
    console.log(req.user)
    res.send('User get ${req.params.id}')
})

router.put('/:id', (req, res)=>{
    res.send('Update get ${req.params.id}')
})

router.delete('/:id', (req, res)=>{
    res.send('delete get ${req.params.id}')
})

router.param("id", (req, res, next, id) =>{
    req.user = users[id]
    next()
})

module.exports = router
