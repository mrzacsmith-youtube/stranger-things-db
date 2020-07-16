const router = require('express').Router()
const Characters = require('./characterModel.js')

// const express = require('express')
// const router = express.Router()

router.get('/', (req, res) => {
  Characters.find()
    .then((character) => {
      res.json(character)
    })
    .catch((err) => res.send(err))
})

router.get('/test', (req, res) => {
  res.send('yes its working')
})

module.exports = router
