process.title = 'MyWebServer'
var args = process.argv,
    port = args[2] || 7070,
    webServer = require('./server.ts')