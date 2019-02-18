var db = require('../db.js');

save_user_information = (data) => new Promise((resolve,reject) => {
  db.query('INSERT INTO LOTTERY_INFORMATION SET ?',data, function(err,results,fields) {
    if (err) {
      reject('Could not insert into lottery');
    }
      resolve('Successful');
  });
})

module.exports = {
  save_user_information
}
