const express = require('express')

let server  = express()

server.listen(8888)

server.use((req,res)=>{
	res.end('ok')
})












