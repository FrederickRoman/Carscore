require('./process').monitor();
const http = require('http');
const app = require('./app');

const Server = {
    start() {
        const port = process.env.PORT || 8080 //300 8080; 
        const server = http.createServer(app);
        server.listen(port, () =>
            console.log(`server is now listening to port: ${port}`)
        );
    }
}

Server.start();


