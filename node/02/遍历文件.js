


const fs = require('fs')
const path = require('path')

const inputPath = path.resolve(process.argv[2])

try{
	fs.accessSync(inputPath, fs.constants.F_OK)
	
	let state = fs.statSync(inputPath);
	
	if(state.isFile()){
		console.log("是文件")
	} else if(state.isDirectory()) {
		console.log("不是")
	}
}catch(e){
	//TODO handle the exception
	console.log(e)
}

















































