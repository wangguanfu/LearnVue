const http=require('http');
const fs= require('fs');

let server = http.createServer((req,res)=>{
	if (req.url === '/'){
		fs.readFile('./index.html', (err, data)=>{
			res.writeHead(200, {'content-type':'text/html;charset=utf-8'})
			res.write('qweq');
			res.end(data);
			})
		}else if (req.url === '/test'){
			res.end('ok')
	}
}).listen(8888);










