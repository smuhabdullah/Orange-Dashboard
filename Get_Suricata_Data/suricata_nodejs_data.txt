const fs = require('fs');
const path = require('path');
const { Client } = require('cassandra-driver');

// Set up Cassandra client
const client = new Client({
  contactPoints: ['127.0.0.1'], // Replace with your Cassandra contact points
  localDataCenter: 'datacenter1', // Replace with your Cassandra data center
});

// Connect to Cassandra
client.connect()
  .then(() => {
    console.log('Connected to Cassandra');

    // Read JSON file and insert data into Cassandra
    const filePath = '/var/log/suricata/eve.json'; // Replace with your Suricata log file path
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
    let data = '';
    readStream.on('data', (chunk) => {
      data += chunk;
      const lines = data.split('\n');
      data = lines.pop();
      const queries = lines.map((line) => {
        const event = JSON.parse(line);
        console.log(event); // Log the event variable to check if it's valid
        // const flow = event.flow ? JSON.stringify(event.flow) : null;
        // const query = `INSERT INTO mykeyspace.suricata_data  (timestamp, flow_id, in_iface, event_type, src_ip, src_port, dest_ip, dest_port, proto, app_proto, flow, stats) VALUES ('${event.timestamp}', ${event.flow_id}, '${event.in_iface}', '${event.event_type}', '${event.src_ip}', ${event.src_port}, '${event.dest_ip}', ${event.dest_port}, '${event.proto}', '${event.app_proto}', ${flow}, '${JSON.stringify(event.stats)}')`;
        // const query = `INSERT INTO mykeyspace.suricata_data (timestamp, flow_id, in_iface, event_type, src_ip, src_port, dest_ip, dest_port, proto, app_proto, flow, stats) VALUES ('${event.timestamp}', ${event.flow_id}, '${event.in_iface}', '${event.event_type}', '${event.src_ip}', ${event.src_port}, '${event.dest_ip}', ${event.dest_port}, '${event.proto}', '${event.app_proto}', {}, '${JSON.stringify(event.stats || {})}')`;
        const query = `INSERT INTO mykeyspace.suricata_data (timestamp, flow_id, in_iface, event_type, src_ip, src_port, dest_ip, dest_port, proto, app_proto, flow, stats)
        VALUES ('${event.timestamp}', ${event.flow_id}, '${event.in_iface}', '${event.event_type}', '${event.src_ip}', ${event.src_port}, '${event.dest_ip}', ${event.dest_port}, '${event.proto}', '${event.app_proto}', ${JSON.stringify(event.flow || {})}, '${JSON.stringify(event.stats || {})}')
        `
        return client.execute(query)
          .then(result => {
            console.log(`Successfully inserted event ${event.timestamp}`);
          })
          .catch(error => {
            console.error(`Failed to insert event ${event.timestamp}: ${error.message}`);
          });
      });
      return Promise.all(queries);
    });
    readStream.on('end', () => {
      console.log('Finished reading JSON file');
    });

  })
  .catch((error) => {
    console.error(`Failed to connect to Cassandra: ${error.message}`);
  });
