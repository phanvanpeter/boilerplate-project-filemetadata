const express = require('express')
const router = express.Router()
const multer = require('multer')

router.get('/', (req, res) => {
  res.json({ message: 'Hey boy' })
})

module.exports = router