const { createServer } = require('http')

const server = createServer(require('./../app'))

server.listen(8080,()=>{
    console.log(`SERVER STARED`)
})