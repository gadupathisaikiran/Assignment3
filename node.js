var fs=require("fs")

var http=require("http")

var data=`<h1> Hello World</h1>
<p> This is saikiran... </p>`


fs.writeFileSync("index.html",data)

var html=fs.readFileSync("index.html")

http.createServer((req,res)=>{

  res.writeHead(200,{"Content-type":"text/html"})
  res.write(html)
 res.end()
}).listen(2000)
