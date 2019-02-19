var db = require('../db.js');

save_user_information = (data) => new Promise((resolve,reject) => {
  db.query('INSERT INTO LOTTERY_INFORMATION SET ?',data, function(err,results,fields) {
    if (err) {
      reject('Could not insert into lottery');
    }
      resolve('Successful');
  });
})

get_total_amount = (data) => new Promise((resolve,reject) => {
  db.query('SELECT SUM(amount) as total_amount from LOTTERY_INFORMATION',null, function(err,results,fields) {
    if (err) {
      reject('Could not get total amount');
    }
      resolve(results);
  });
})

module.exports = {
  save_user_information
}
