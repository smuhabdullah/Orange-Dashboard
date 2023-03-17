import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import MultiLineChart from "./MultiLineChart";

export default function Firewall() {
    return (
        <div className="container" style={{ position: 'relative' }}>
            <h3 className="py-3">
                Security Insight Dashboard &nbsp;|{" "}
                <span style={{ color: "GreyText" }}> Firewall</span>
            </h3>

            <div className="border rounded" style={{ backgroundColor: 'whitesmoke' }}>
                <div className="container p-4">
                    <h4>Firewall events</h4>
                    <button className="btn btn-outline-warning">+ Add Filter</button>
                    <button className="btn btn-outline-warning">Last 24 Hours</button>
                    <p className="text-dark pt-3">Events By Action</p>
                    <div className="row me-auto justify-content-center" style={{ marginLeft: '10px' }}>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary text-center">Total</p>
                            <p className="text-secondary pt-2 text-center">13.29k</p>
                        </div>
                        <div className="col-2 square border-end border-dark">
                            <p className="text-secondary text-center ">Log/Simulate</p>
                            <p className="text-secondary pt-2 text-center">12.29k</p>
                        </div>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary text-center ">JS Challenge</p>
                            <p className="text-secondary pt-2 text-center">1.29k</p>
                        </div>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary text-center ">Challenge</p>
                            <p className="text-secondary pt-2 text-center">27k</p>
                        </div>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary text-center ">Allow</p>
                            <p className="text-secondary pt-2 text-center">12k</p>
                        </div>
                        <div className="col-2 ">
                            <p className="text-secondary text-center ">Block</p>
                            <p className="text-secondary pt-2 text-center">8k</p>

                        </div>
                        <MultiLineChart />
                        <div>
                            <p className="text-dark pt-3">Firewall By Service</p>
                            <div className="row me-auto justify-content-center" style={{ marginLeft: '10px' }}>
                                <div className="col-2 square border-end border-dark ">
                                    <p className="text-secondary text-center ">Firewall Rules</p>
                                    <p className="text-secondary pt-2 text-center">13.88k</p>
                                </div>
                                <div className="col-2 square border-end border-dark ">
                                    <p className="text-secondary text-center ">WAF</p>
                                    <p className="text-secondary pt-2 text-center">25</p>
                                </div>
                                <div className="col-2 square border-end border-dark ">
                                    <p className="text-secondary text-center ">Access Rule:Country</p>
                                    <p className="text-secondary pt-2 text-center">8</p>
                                </div>
                                <div className="col-2 ">
                                    <p className="text-secondary text-center ">Security Level</p>
                                    <p className="text-secondary pt-2 text-center">1</p>
                                </div>
                            </div>
                            <button style={{ backgroundColor: 'darkblue', width: '100%' }} className="btn btn-outline-warning">Firewall rules</button>

                        </div>
                    </div>
                </div>

            </div>
            <div className="" style={{ backgroundColor:'whitesmoke'}}>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                        <h5 className="py-3">
                            <span style={{ color: "GreyText" }}> Top Events By Source</span>
                        </h5>
                        <p>IP Addresses</p>
                        <p>192.168.10.1</p>
                        <p>192.168.10.1</p>
                        <p>192.168.10.1</p>
                        <p>192.168.10.1</p>
                        <p>192.168.10.1</p>
                    </div>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                    <NavDropdown title="5 Items"  id="basic-nav-dropdown" style={{marginLeft:"85%", width:'11%', borderStyle: 'ridge',borderRadius:'28%' }}></NavDropdown>
                        <p>User Agents</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                    </div>
                </div>


                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                        <p>Paths</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                    </div>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                        <p>Countries</p>
                        <p>United States</p>
                        <p>United Kingdom</p>
                        <p>Pakistan</p>
                        <p>Australia</p>
                        <p>india</p>
                    </div>
                </div>

                
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                    <p>Firewall Rule</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                        <p>C:\Users\aman\Desktop\fresh in\1x</p>
                    </div>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                        <p>ASNs</p>
                        <p>192.0.2.0/24.</p>
                        <p>192.0.2.0/24.12</p>
                        <p>192.0.2.0/24.</p>
                        <p>192.0.2.0/24.</p>
                        <p>192.0.2.0/24.</p>
                    </div>
                </div>

                
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                        <p>Hosts</p>
                        <p>https://www.networkfort.com/ai-drix</p>
                        <p>https://www.networkfort.com/ai-drix</p>
                        <p>https://www.networkfort.com/ai-drix</p>
                        <p>https://www.networkfort.com/ai-drix</p>
                        <p>https://www.networkfort.com/ai-drix</p>
                    </div>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                        <p>HTTPs Method</p>
                        <p>GET</p>
                        <p>POST</p>
                        <p>HEAD</p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                    
                        <p>Rate Limit Rules</p>
                        <p>No Data</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div style={{ width: '53%', display: "flex", flexDirection: "column" }} className="text-dark pt-3 square border">
                        <p>Managed Rules</p>
                        <p>Anomaly part,non standar part,detection</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                        <p>Mozilla/5.0(Linux;Andriod 11)</p>
                    </div>
                </div>

            </div>

            <div className="container square border" style={{ position: 'relative', backgroundColor: 'whitesmoke' }}>
                <h3 className="py-3">
                    <span style={{ color: "GreyText" }}>Activity Log</span>
                </h3>
                <button style={{ backgroundColor: 'blue', width: '100%' }} className="btn btn-outline-warning">Date Action taken Country IP address Services</button>
            </div>

        </div>

    )
}