const router = require('express').Router()

// const express = require('express')
// const router = express.Router()

router.get('/', (req, res) => {
  res.send('yes its working')
})

module.exports = router
