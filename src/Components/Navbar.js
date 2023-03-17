import React , {useState, useEffect}from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Switch from '@mui/material/Switch';
const label = {inputProps:{'area-label': 'switch demo'}};


const BasicExample=(props) =>{
  return (
    <Navbar style={{borderStyle: 'outset', borderWidth: 'thick', width: '100%', backgroundColor: 'revert'}}>
      <img src='logo(NetworkFort).png' width="130px" alt='Net' />
      <Container style={{ fontFamily: "serif", bsnavbarhovercolor: 'blue'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: 'auto'}}>
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="Firewall">Firewall</Nav.Link>
            <Nav.Link href="Excel">Upload</Nav.Link>
            <Nav.Link href="#link1" >Analyze</Nav.Link>
            <Nav.Link href="#link2" >Events/Alert</Nav.Link>
            <Nav.Link href="#link3" >Configure</Nav.Link>
            <Nav.Link href="#link4" >Deploy</Nav.Link>
          <div style={{marginLeft:"25%"}}>
            <ul className='navbar-nav mb-2 mb-lg-0   col-lg-0'>
              <li className='nav-itmes'>
                <a className='nav-link' href='seacrh'>
                  <img src="search.png" alt='search' width={'15'} />
                </a>
              </li>
              <li className='nav-itmes'>
                <a className='nav-link' href='laptop'>
                  <img src="laptop.png" alt='laptop' width={'15'} />
                </a>
              </li>
              <li className='nav-itmes'>
                <a className='nav-link' href='setting'>
                  <img src="setting.png" alt='setting' width={'15'} />
                </a>
              </li>
            </ul>
          </div>        
            <NavDropdown title="Desktop Chrome"  id="basic-nav-dropdown" style={{marginLeft:"1%", width:'5%'}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <Switch  color="default" onClick={()=>change} checked={check} /> */}
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"checked={props.check} onChange={(e)=>props.change(e)}/>
</div>
    </Navbar>
  );
}

export default BasicExample;