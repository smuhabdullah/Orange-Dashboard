# Get Suricata Logs

## First, Connect to the database (I use appache Cassandra)

### Then Download Cassandra and install it 

### Making Keyspace 
<i>
  
  CREATE KEYSPACE suricata_data_logs WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3} 
</i>
  <br/>
  ### Creating Table
  <i>
  CREATE TABLE mykeyspace.suricata_data_logs (<br>
    &emsp;timestamp text,<br>
    &emsp;flow_id bigint,<br>
    &emsp;in_iface text,<br>
    &emsp;event_type text,<br>
    &emsp;src_ip text,<br>
    &emsp;src_port int,<br>
    &emsp;dest_ip text,<br>
    &emsp;dest_port int,<br>
    &emsp;proto text,<br>
    &emsp;app_proto text,<br>
    &emsp;flow frozen<map<text, text>>,<br>
    &emsp;stats text,<br>
    &emsp;PRIMARY KEY (timestamp, flow_id)<br>
) WITH CLUSTERING ORDER BY (flow_id ASC);<br>
  </i><br>
  
  ### CQL Help Topics
  <img src="https://user-images.githubusercontent.com/58034394/222946019-f52327dc-75d2-4daa-97f8-9ff3d0bc6315.png" />
  
  
  ### DESCRIBE & How to Use
>>DESCRIBE KEYSPACE KEYSPACE_NAME  or DESCRIBE KEYSPACE_NAME<br>
>>USE KEYSPACE_NAME<br>
>>DESCRIBE TABLES;<br>
>>ALTER KEYSPACE practice WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 2} <br>
>>DROP KEYSPACE practice <br>
