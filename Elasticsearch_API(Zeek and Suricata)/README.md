# Fetching Data Of Zeek and Suricata through Elasticsearch


The first thing we will need to do is to install elastic search in our OS, in the following link we will see how. <br>
Reference → https://medium.com/yom-ai/rest-api-with-node-js-and-elasticsearch-1368cf9df02a <br>
We will also use Kibana, which is “a data visualization and management tool for Elasticsearch that provides real-time histograms, pie charts, and maps”.<br> 
Now we will need to create a directory for our project, and there open a console where we will execute the following commands:<br>
<i>npm init -y</i><br>
  <i>npm install express elasticsearch</i><br>
<i>npm install nodemon —save-dev</i><br>
With the previous commands we install express, which is a library that allows the creation of HTTP servers quickly, and the Elasticsearch client for javascript. In addition, we add the Nodemon development dependency, which restarts the server when it detects changes in the code.<br>

## Kibana Dev Tool (Getting all indexes)
<image src="https://user-images.githubusercontent.com/58034394/225710644-f2294bd4-49cd-454e-af0c-a34f6c3f79de.png"/>

Kibana is an open-source data visualization and exploration tool used to visualize and analyze data stored in Elasticsearch. Here are some basic queries in Kibana:<br>
        Match Query: This query is used to search for exact matches of a particular term in a specific field of the index.<br>
        Range Query: This query is used to search for documents where the value of a specific field falls within a certain range.<br>
        Term Query: This query is used to search for documents where the value of a specific field matches a specific term.<br>
        Wildcard Query: This query is used to search for documents where the value of a specific field matches a specific pattern.<br>
        Aggregation Query: This query is used to group data into buckets and then perform calculations on those buckets.<br>
        Filter Query: This query is used to filter documents based on specific criteria.<br>
        Boolean Query: This query is used to combine multiple queries using boolean operators (AND, OR, NOT) to build more complex queries.<br>

Here are some basic queries you can use in kibana dev tools

**Search for all flights that had a delay:**<br>
```
GET kibana_sample_data_flights/_search
{
  "query": {
    "term": {
      "FlightDelay": true
    }
  }
}
```
Search for all flights that originated from the city "Paris":<br>
```
GET kibana_sample_data_flights/_search
{
  "query": {
    "match": {
      "OriginCityName": "Paris"
    }
  }
}
```
Search for all flights that had a delay and originated from the country "US":<br>
```
GET kibana_sample_data_flights/_search
{
  "query": {
    "bool": {
      "must": [
        { "term": { "FlightDelay": true } },
        { "term": { "OriginCountry": "US" } }
      ]
    }
  }
}
```
Search for all flights that had a delay and had an average ticket price above 1000:<br>
```
GET kibana_sample_data_flights/_search
{
  "query": {
    "bool": {
      "must": [
        { "term": { "FlightDelay": true } },
        { "range": { "AvgTicketPrice": { "gte": 1000 } } }
      ]
    }
  }
}
```

Search for all flights that traveled more than 8000 kilometers:<br>
```
GET kibana_sample_data_flights/_search
{
  "query": {
    "range": {
      "DistanceKilometers": {
        "gte": 8000
      }
    }
  }
}
```

we can also get data from this<br>
http://localhost:9200/kibana_sample_data_flights/_search?q=OriginCityName:Paris<br>

This is a Node.js Express server that connects to Elasticsearch and exposes two endpoints /suricata and /zeek. The /suricata endpoint retrieves data from the logstash-2023.02.22-000005 index in Elasticsearch and allows querying based on event_type parameter. The /zeek endpoint retrieves data from the filebeat-7.17.6-2022.12.24-000003 index in Elasticsearch and returns all documents.<br>

Here's a breakdown of the code:<br>
```
const express = require('express');
const elasticsearch = require('elasticsearch');

const app = express();

const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'info'
});
```
The code imports the express and elasticsearch modules and creates an instance of the Express app. It also creates an instance of the Elasticsearch client, which is used to connect to Elasticsearch at localhost:9200.<br>
<br/>
```
app.get('/suricata', (req, res) => {

    const queryParams = req.query;
    let esQuery = {
        query: {
            match_all: {}
        }
    };
    
    if (queryParams.event_type) {
        esQuery = {
            query: {
                match: {
                    event_type: queryParams.event_type
                }
            }
        }
    }
    
    client.search({
        index: 'logstash-2023.02.22-000005',
        body: esQuery
    })
        .then(response => {
            const hits = response.hits.hits.map(hit => hit._source);
            const count = response.hits.total.value;
            res.json({ hits, count });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error searching Elasticsearch');
        });
});
```
The /suricata endpoint handles GET requests and retrieves data from the logstash-2023.02.22-000005 index in Elasticsearch. If the event_type query parameter is provided, the Elasticsearch query is modified to include a match clause that matches the event_type field. The results are returned as a JSON object that contains the hits and the count.<br>
```
app.get('/zeek', (req, res) => {
    const queryParams = req.query;
    const esQuery = {
        query: {
            match_all: {}
        }
    };
    client.search({
        index: 'filebeat-7.17.6-2022.12.24-000003',
        body: esQuery
    })
        .then(response => {
            const hits = response.hits.hits.map(hit => hit._source);
            const count = response.hits.total.value;
            res.json({ hits, count });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error searching Elasticsearch');
        });
});
```

The /zeek endpoint handles GET requests and retrieves data from the filebeat-7.17.6-2022.12.24-000003 index in Elasticsearch. The Elasticsearch query is a match_all query that returns all documents. The results are returned as a JSON object that contains the hits and the count.<br>
```
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
```
The server listens on port 3000 and logs a message to the console when it starts.

<img src="https://user-images.githubusercontent.com/58034394/225714603-bb872b5c-c808-4d51-8814-88b7067fb33b.png" />

<img src="https://user-images.githubusercontent.com/58034394/225715334-9569dd46-9320-4b88-85e7-3c2ec1b96d87.png"/>

<img src="https://user-images.githubusercontent.com/58034394/225715897-a632b611-ba34-4adc-9693-1d66eb6e4631.png"/>
