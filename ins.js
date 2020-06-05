var mysql = require('mysql');


var uname = document.getElementById("name").value;
var umob = document.getElementById("phone-number").value;


var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ProGoogler'
});
con.connect(function(err)
	{
		if(err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO ProGoogler (name, mobile) VALUES (uname,umob)";

	});
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

//var ProGoogler = {
//	name : uname,
//	mobile : umob
//};

/*var query=connection.query('insert into ProGoogle values ('+uname+','+umob+');',ProGoogler,function(error,result){
	if(error){
		console.error(error);
		return;
	}
	console.error(result);
});*/