const fs = require('fs')


fs.readFile('../01/path.js',(err, data)=>{
	if (err) throw err;
	
	console.log(data.toString('utf8'))
	
	
});


fs.writeFile('./a.txt','追加',{flag:'a'},(err)=>{
	if (err) throw err;
	
	console.log('xie')
	
	
});
