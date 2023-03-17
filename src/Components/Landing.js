import React from "react";
import Card from 'react-bootstrap/Card';
import pic5 from './../Images/image11.jpg'
import pic2 from './../Images/image2.jpg'
import pic3 from './../Images/image3.jpg'
import pic4 from './../Images/image4.jpg'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Landing(){
    return(
        <>
        <div style={{ margin: '20px', hight: "100px" }} >
        <h1 style={{marginLeft: "110px"}}><b>NetworkFort</b></h1>
        </div>
    <Container className="m-auto" style={{display: "flex", width: '100%' }}>
      <Card className="card text-center" style={{ width: '22%', margin: '10px', cursor: "pointer" }}>
      <Card.Img variant="top" src={pic2} height= "55%" color="primary"/>
      <Card.Body>
      <Card.Link href="Dashboard" className="text-dark text-decoration-none"><Card.Title><h2><b>Dashboard</b></h2></Card.Title></Card.Link>
        <Card.Subtitle className="mb-2 text-muted">We work for Securing Cloud Infrastructure in Real time.</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card className="card text-center" style={{ width: '22%', margin: '10px', cursor: "pointer" }}>
    <Card.Img variant="top" src={pic3} height= "60%" color="primary"/>
      <Card.Body>
      <Card.Link href="Suricata" className="text-dark text-decoration-none"><Card.Title><h2><b>Suricata</b></h2></Card.Title></Card.Link>
        <Card.Subtitle className="mb-2 text-muted">Suricata is a high value network analysis and threat detection software.</Card.Subtitle>
      </Card.Body>
    </Card>
    
    <Card className="card text-center" style={{ width: '22%', margin: '10px', cursor: "pointer" }}>
    <Card.Img variant="top" src={pic4} height= "60%" color="primary"/>
    <Card.Body>
    <Card.Link href="Zeek" className="text-dark text-decoration-none"><Card.Title><h2><b>Zeek</b></h2></Card.Title></Card.Link>
      <Card.Subtitle className="mb-2 text-muted">Zeek (formerly Bro) is the world’s leading platform for network security monitoring.</Card.Subtitle>
    </Card.Body>
  </Card>
  <Card 
  className="card text-center" style={{ width: '22%', margin: '10px', cursor: "pointer" }}>
  <Card.Img variant="top" src={pic5} height= "60%" color="primary"/>
    <Card.Body>
    <Card.Link href="http://localhost:5601/" className="text-dark text-decoration-none"><Card.Title><h2><b>Kibana</b></h2></Card.Title></Card.Link>
      <Card.Subtitle className="mb-2 text-muted">Kibana is a source-available data visualization dashboard software for Elasticsearch.</Card.Subtitle>
    </Card.Body>
  </Card>
  </Container>
      <div>
  <Card className="card text-center" style={{ width: '77%', marginLeft: '128px', height:"300px", marginBottom: "20px" }}>
      <Card.Body>
      <Card.Title><h1><b>Get started by adding integrations</b></h1></Card.Title>
      <Card.Subtitle className="mb-2 text-muted"><p style={{ fontSize: '20px', marginTop: "20px" }}>To start working with your data, use one of our many ingest options.<br/> Collect data from an app or service, or upload a file,<br/> if you're not ready to use your own data, add a sample data set.</p></Card.Subtitle>
      </Card.Body>
      <div style={{display:"flex", marginLeft:"50px"}}>
      <Button  style={{margin:"20px", cursor: "pointer"}}>Add integrations</Button>{' '}
      <Button variant="outline-secondary" style={{margin:"20px", cursor: "pointer"}}>Try sample data</Button>{' '}
      <Button variant="outline-secondary" style={{margin:"20px", cursor: "pointer"}}>Upload a file</Button>{' '}
      </div>
    </Card>
    </div>
 
        </>
    );
}

export default Landing;

