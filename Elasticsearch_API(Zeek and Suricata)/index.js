const express = require('express');
const elasticsearch = require('elasticsearch');

const app = express();

const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'info'
});

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

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// const express = require('express');
// const elasticsearch = require('elasticsearch')

// const app = express()

// const client = new elasticsearch.Client({
//     host:'localhost:9200',
//     log:'info'
// }) 
// app.get('/search',(req, res)=> {
//     const queryParams = req.query;
//     let esQuery = {
//         match_all: {}
//     };
//     client.search({
//         index: '/logstash-2023.02.22-000005/', 
//         body: {
//             query: esQuery
//         },

//     })
//     .then(response => {
//         const hits = reponse.hits.hits.map(hit => hit._source);
//         // const count = reponse.hits.total.value;
//         res.json(hits);
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).send('Error searching elasticsearch');

//     });
// });
// app.listen(3000,()=> {
//     console.log('server started on port 3000');
// });