const http = require('http')

const server = http.createServer((req, res) => {

   if(req.url === '/'){
    res.end('Welcome to our Home page...')
   }
   else if(req.url === '/about'){
    res.end('To know more about us, read below')
   }
   else{
        res.end(`
            <h1>Oops!</h1>
            <p>We can not find the page you are looking for</p>
            <a href="/"</a>
    `)
   }
})

server.listen(5000)