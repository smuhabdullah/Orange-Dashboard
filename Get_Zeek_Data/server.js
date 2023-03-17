const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const readStream = fs.createReadStream('conn.log');
        // const readStream = fs.createReadStream('/opt/zeek/logs/current/conn.log');

        readStream.on('data', (chunk) => {
            // const chunkLength = readStream.length;
            // const chunkData = chunk.toString();
            // const responseChunk = `${chunkLength},${chunkData}`;
            // res.write(responseChunk);
              res.write(chunk);
        });

        readStream.on('end', () => {
            res.end();
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
})
    .listen(4000, () => {
        console.log('Server running on port 4000');
    });



//To Find the Count with the data uncomment below code
// const http = require('http');
// const fs = require('fs');

// const port = 8080;
// const filePath = '/opt/zeek/logs/current/conn.log';

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.end(`Error: ${err}`);
//       return;
//     }
//     const dataArray = data.toString().split('\n').filter(line => line.trim() !== '');
//     const count = dataArray.length;
//     const result = `Count: ${count}\n${dataArray.join('\n')}`;
//     res.end(result);
//   });
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });



