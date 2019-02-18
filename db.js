var mysql = require('mysql');
var db_config = {
  host     : '127.0.0.1',
  user     : 'root',
  password : 'password',
  database : 'webapp'
}

var connection;

function handDisconnect() {

  connection = mysql.createConnection(db_config);
  connection.connect(function(err) {
    if(err){
      console.log('Error When Connecting',err);
      setTimeout(handleDisconnect,2000);
    }

  });
  connection.on('error',function(err){
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handDisconnect();
    }
    else {
      throw err;
    }
  });

}

handDisconnect()

module.exports = connection;
