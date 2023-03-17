import React, { useEffect } from 'react';
import PieChart from './PieChart';
import BarChart from "./BarChart";
import * as d3 from 'd3';


export default function Dashboard() {
    const data = [
        {year: 1980, efficiency: 24.3, sales: 8949000},
        {year: 1985, efficiency: 27.6, sales: 10979000},
        {year: 1990, efficiency: 28, sales: 9303000},
        {year: 1991, efficiency: 28.4, sales: 8185000},
        {year: 1992, efficiency: 27.9, sales: 8213000},
        {year: 1993, efficiency: 28.4, sales: 8518000},
        {year: 1994, efficiency: 28.3, sales: 8991000},
        {year: 1995, efficiency: 28.6, sales: 8620000},
        {year: 1996, efficiency: 28.5, sales: 8479000},
        {year: 1997, efficiency: 28.7, sales: 8217000},
        {year: 1998, efficiency: 28.8, sales: 8085000},
        {year: 1999, efficiency: 28.3, sales: 8638000},
        {year: 2000, efficiency: 28.5, sales: 8778000},
        {year: 2001, efficiency: 28.8, sales: 8352000},
        {year: 2002, efficiency: 29, sales: 8042000},
        {year: 2003, efficiency: 29.5, sales: 7556000},
        {year: 2004, efficiency: 29.5, sales: 7483000},
        {year: 2005, efficiency: 30.3, sales: 7660000},
        {year: 2006, efficiency: 30.1, sales: 7762000},
        {year: 2007, efficiency: 31.2, sales: 7562000},
        {year: 2008, efficiency: 31.5, sales: 6769000},
        {year: 2009, efficiency: 32.9, sales: 5402000},
        {year: 2010, efficiency: 33.9, sales: 5636000},
        {year: 2011, efficiency: 33.1, sales: 6093000},
        {year: 2012, efficiency: 35.3, sales: 7245000},
        {year: 2013, efficiency: 36.4, sales: 7586000},
        {year: 2014, efficiency: 36.5, sales: 7708000},
        {year: 2015, efficiency: 37.2, sales: 7517000},
        {year: 2016, efficiency: 37.7, sales: 6873000},
        {year: 2017, efficiency: 39.4, sales: 6081000},
      ]

      const pieData = [
        ['Task', 'Hours per Day'],
        ['Work', 1],
        ['Eat', 3],
        ['Commute', 19],
        ['Watch TV', 24],
        ['Sleep', 1],
      ];
    return (
        <div className="continer" style={{ position: "relative", backgroundColor:"whitesmoke"}}>
            <h3 className="py-3 px-5">
                Security Insight Dashboard |{" "}
                <span style={{ color: "GreyText" }}> Inside Hosts</span>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className="bg-white p-4" style={{ display: "flex", flexDirection: "row", textAlign: "center", width: '86%'}}>
                    <h4 style={{ fontsize: '100%', left: '8.5%', position: 'absolute', top: '+9%', fontsize: '140%' }} >
                        Alarm hosts
                    </h4>
                    <BarChart data={data}/>
                </div>
                < div className="py-4 w-100 row justify-content-md-center " style={{ display: "flex", flexDirection: "row" }}>
                    <div className="col bg-white p-3 m-2">
                        <h4 className="text-center">Top Alarming Hosts</h4>
                        <a href="Hostreport">
                        <img
                            src="/Host-Category.png"
                            className=" d-inline-block  img-fluid"
                            alt="Host Category" width={'250'}
                        />
                        </a>
                    </div>
                    <div className="col bg-white p-3 m-2">
                        <h4 className="text-center">Alarms By Type</h4>
                        <img
                            src="/eventcount.png"
                            className="d-inline-block img-fluid"
                            alt="EventCount" width={'250'}
                        />
                    </div>
                    <div className="col bg-white p-3 m-2">
                    <h4 className="text-center" >Today's Alarm</h4>
                    <PieChart /> 
                        
                    </div>
                </div>
            </div>
        </div>
    );
}