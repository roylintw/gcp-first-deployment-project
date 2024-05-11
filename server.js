const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello 謝得榕, 林沛彤，這是我第一個 Google Cloud 專案')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
