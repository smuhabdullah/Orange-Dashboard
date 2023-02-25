
// This is a Node.js script that creates an HTTP server and handles requests to different URL endpoints. The server reads log files and returns the data in JSON format to the client.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    
    // The server handles the following endpoints:
    // conn: returns the contents of the conn.log file
    if (req.url === '/conn') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/conn.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    } 
    // dns: returns the contents of the dns.log file
    else if (req.url === '/dns') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/dns.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    } 
    
    // dhcp: returns the contents of the dhcp.log file
    else if (req.url === '/dhcp') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/dhcp.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    } 
    
    //capture_loss: returns the contents of the capture_loss.log file
    else if (req.url === '/capture_loss') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/capture_loss.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    } 
    
     //http: returns the contents of the http.log file
    else if (req.url === '/http') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/http.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
    //notice: returns the contents of the notice.log file
    else if (req.url === '/notice') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/notice.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
    //ntp: returns the contents of the ntp.log file
    else if (req.url === '/ntp') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/ntp.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
     //ssl: returns the contents of the ssl.log file
    else if (req.url === '/ssl') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/ssl.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
//     stats: returns the contents of the stats.log file
    else if (req.url === '/stats') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/stats.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
    //stderr: returns the contents of the stderr.log file

    else if (req.url === '/stderr') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/stderr.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
    //stdout: returns the contents of the stdout.log file
    else if (req.url === '/stdout') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/stdout.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
    //weird: returns the contents of the weird.log file
    else if (req.url === '/weird') {
        const readStream = fs.createReadStream('/opt/zeek/logs/current/weird.log');
        let logData = '';

        readStream.on('data', (chunk) => {
            logData += chunk;
        });

        readStream.on('end', () => {
            const dataArray = logData.split('\n').filter(line => line.trim() !== '');
            const count = dataArray.length;
            const jsonData = JSON.stringify({ count: count, data: dataArray });
            // const jsonData = JSON.stringify({ data: logData });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });

        readStream.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error reading file: ${error}`);
        });
    }
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
}).listen(4000, () => {
    console.log('Server running on port 4000');
});

// For each endpoint, the server reads the corresponding log file using fs.createReadStream, accumulates the data in a string variable using the 
// 'data' event, processes the data (in this case, splitting it into an array of lines and removing empty lines), and then sends the result back 
// to the client in JSON format using res.end. If there is an error reading the file, the server returns a 500 error with the error message.
//-----------------------------------------------------------------------------------------------------------------------------------------------


//To Get the conn.log data uncomment below code
// const http = require('http');
// const fs = require('fs');

// const port = 8080;
// const filePath = '/opt/zeek/logs/current/conn.log';

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'application/json'});
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


//To Find the Count with the data uncomment below code
// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         const readStream = fs.createReadStream('/opt/zeek/logs/current/conn.log');

//         readStream.on('data', (chunk) => {
//             // const chunkLength = readStream.length;
//             // const chunkData = chunk.toString();
//             // const responseChunk = `${chunkLength},${chunkData}`;
//             // res.write(responseChunk);
//               res.write(chunk);
//         });

//         readStream.on('end', () => {
//             res.end();
//         });

//         readStream.on('error', (error) => {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end(`Error reading file: ${error}`);
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Page not found');
//     }
// })
//     .listen(4000, () => {
//         console.log('Server running on port 4000');
//     });

