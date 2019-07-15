const express =  require('express')

const Accounts = require('../data/seeds/accounts-model')
const router = express.Router()





router.get('/', (req,res) => {
    Accounts.find()
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({err:error})
    })
})


module.exports = router;