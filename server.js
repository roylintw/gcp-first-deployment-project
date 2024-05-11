const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Eden, Peggy and Roy, This is my first Google Cloud project')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
