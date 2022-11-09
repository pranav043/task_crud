const router = require('express').Router()
const controller = require('../controllers/controller')

router.get('/', controller.find)

router.post('/add', controller.add)

router.post('/delete', controller.delete)

router.post('/update', controller.update)

router.post('/findByName', controller.findByName)

module.exports = router
