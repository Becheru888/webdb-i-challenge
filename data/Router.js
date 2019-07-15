const express =  require('express')
const Accounts = require('./seeds/accounts-model')
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

router.get("/:id", async (req, res) => {
    try {
      const account = await Accounts.getAccountById(req.params.id);
      res.status(200).json(account);
    } catch (error) {
      res.status(500).json({ message: `Could not retrieve account with ID ${req.params.id}` });
    }
  });

router.post('/', async (req, res) =>{
    try{
        const newAccount = await Accounts.createAccount(req.body)
        res.status(201).json(newAccount)
    }catch(error){
        res.status(500).json('Account faild to create')
    }

})

router.put("/:id", async (req, res) => {
    try {
      const { name, budget } = req.body;
      if (!req.body.name || !req.body.budget) {
        res.status(500).json({ message: "Name and budget requierd" });
      } else {
        await Accounts.getAccountById(req.params.id);
        const target = await Accounts.updateAccountById(req.params.id, {name,budget});
        
        res.status(200).json(target);
      }
    } catch (error) {
      res.status(500).json({
        message: `Could not update account with ID ${req.params.id}.`
      });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
       await Accounts.deleteAccountById(req.params.id);
      res.status(200).json({ message: `Account ${req.params.id} has been deleted` });
    } catch (error) {
      res.status(500).json({
        message: `Could not delete account ${req.params.id}.`
      });
    }
  });

module.exports = router;