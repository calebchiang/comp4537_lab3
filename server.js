const http = require('http');
const url = require('url');
const { getDate } = require('./modules/utils');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname === "/getDate") {
        const name = parsedUrl.query.name || "Guest";
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(getDate(name));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at https`);
});
