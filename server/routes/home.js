const express = require('express')

const router = express.Router()

// GET /api/v1/home/
router.get('/', (req, res) => {
  try {
    res.json({ statement: 'Home for Thumb down for Trump' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})


module.exports = router