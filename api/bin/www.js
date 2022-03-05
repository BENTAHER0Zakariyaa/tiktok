const { createServer } = require('http')

const server = createServer(require('./../app'))

server.listen(8080,'localhost',()=>{
    console.log(`SERVER RUNNING ON localhost:8080`)
})