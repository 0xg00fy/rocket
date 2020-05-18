var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "rocket",
  password: "rocketPW"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
