const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', (req, res) => {
  res.json({ message: 'Hey boy' })
})

router.post('/', upload.single('upfile'), (req, res) => {
  res.json(req.file)
})

module.exports = router