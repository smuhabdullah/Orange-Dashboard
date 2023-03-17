import React, { useEffect } from 'react';
import { HiDesktopComputer } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";
import { CgArrowsExpandRight } from "react-icons/cg";
import styled from 'styled-components';


export default function Hostreport() {
    /*const container = styled.div`
    width: 1400px;
    height: 500px;
    @media (min-width: 0px) and (max-width: 1400px){
        width: 1400x;
    } @media (min-height: 0px) and (max-height: 500px){
        height: 500px;
    }`;*/

    return (
        <div className="container" style={{ height: '570px', position: "absolute", backgroundColor: "lightgray", fontFamily: "serif", width:"100%" }}>
            <h5 className="py-3">
                Host Report | 10.201.3.149 {" "}
                <span style={{ color: "GreyText" }}></span>
            </h5>
            
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            
                <div className="bg-white p-4" style={{ display: "flex", flexDirection: "row", textAlign: "center", height:'100px', width: '1280px' }}>

                    <h4 style={{ fontSize: '80%', left: '2%', position: 'absolute', top: '+13.7%' }} >
                        Alarm Categories
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '6%', position: 'absolute', top: '+23.7%' }} >
                        1
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '15%', position: 'absolute', top: '+23.7%' }} >
                        0
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '23%', position: 'absolute', top: '+23.7%' }} >
                        1
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '29.5%', position: 'absolute', top: '+23.7%' }} >
                        0
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '37.3%', position: 'absolute', top: '+23.7%' }} >
                        0
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '46.3%', position: 'absolute', top: '+23.7%' }} >
                        0
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '56%', position: 'absolute', top: '+23.7%' }} >
                        0
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '67%', position: 'absolute', top: '+23.7%' }} >
                        1
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '77%', position: 'absolute', top: '+23.7%' }} >
                        1
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '86.5%', position: 'absolute', top: '+23.7%' }} >
                        0
                    </h4>
                    <h4 style={{ fontSize: '140%', color:'#33B0FF', left: '95.3%', position: 'absolute', top: '+23.7%' }} >
                        0
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '3%', position: 'absolute', top: '+19.7%' }} >
                        Concern Index
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '13%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        Target Index
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '22%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        Recon
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '29%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        C&C
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '35%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        Exploitation
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '44%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        DDoS Source
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '54%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        DDos Target
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '64%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        Data Haoarding
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '75%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        Exfiltration
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '84%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        Policy Violation
                    </h4>
                    <h4 style={{ fontSize: '70%', left: '94%', position: 'absolute', top: '+19.7%', fontsize: '140%' }} >
                        Anomaly
                    </h4>
                          

                </div>
                < div className="py-4 row justify-content-md-center " style={{ display: "flex", flexDirection: "row", height: '430px', width: '1290px' }}>
                    <div className="col bg-white p-3 m-2">
                        <h6 className="text-left">Host Summary</h6>
                        <div style={{position: 'absolute'}}>
                        <CgScreen size='3rem' style={{position: 'absolute', heigth: '30px', top: 20, color:'grey'}}
                           classNames="CgScreen"/>
                        </div>
                     
                    </div>
                    <div className="col bg-white p-3 m-2">
                        <h6 className="text-left">Traffic by Peer Host Group(last 12 hours)</h6>
                        <h5 style={{ fontSize: '75%', left: '39%', position: 'relative', top: '+22%' }} >
                        10.201.3.149
                    </h5>
                        <div style={{position: 'absolute'}}>
                          <HiDesktopComputer size='4rem' style={{position: 'absolute', heigth: '20px', top: -10, right: -220, color:'grey'}}
                           classNames="HiDesktopComputer"/>
                        </div> 
                        <div style={{position: 'relative'}}>
                          <CgArrowsExpandRight color='#33B0FF'  style={{position: 'relative', heigth: '2px', top: -60, right: -375 }}
                           classNames="CgArrowsExpandRight"/>
                        </div>
                        <ul>
                         <li>Compliance</li>
                        </ul> 
                        <ul>
                         <li>Domain Con...</li>
                         <li>Multicast</li>
                         <li>Datacenter</li>
                        </ul>  
                    </div>
                    <div className="col bg-white p-3 m-2">
                    <h6 className="text-left">Alarms By Type(last 7 days)</h6>
                    <div style={{position: 'absolute'}}>
                          <CgArrowsExpandRight color='#33B0FF'  style={{position: 'absolute', heigth: '30px', top: -33, right: -390 }}
                           classNames="CgArrowsExpandRight"/>
                        </div>
                    <h4 style={{ fontSize: '90%', left: '46%', position: 'relative', top: '+6%' }} >
                        Alarms by Type
                    </h4>
                        
                    </div>
                </div>
               </div>
            </div>
    );
}
