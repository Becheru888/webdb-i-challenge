const db = require('../../data/dbConfig')

module.exports = {
    find,
    createAccount,
    getAccountById,
    updateAccountById,
    deleteAccountById,

}




function find(){
    return db('accounts');
}

function createAccount({name, budget}){
    return db("accounts").insert({name, budget})
}

function getAccountById(id) {
    return db('accounts').where({ id });
  }

  function updateAccountById(id, { name, budget }) {
    return db("accounts")
      .where({ id })
      .update({ name, budget });
  }
 
  function deleteAccountById(id) {
    return db("accounts")
      .where({ id })
      .del();
  }



