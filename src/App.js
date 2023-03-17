import React, { useState } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PieChart from './Components/PieChart';
import BarChart from './Components/BarChart';
import Navbar from './Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './Components/Dashboard';
import MultiLineChart from './Components/MultiLineChart';
import Firewall from './Components/Firewall';
import Excel from './Components/Excel';
import * as XLSX from 'xlsx';
import Landing from './Components/Landing';
import Chart from './Components/Chart';
import Hostreport from './Components/Hostreport';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
const data = [
  { year: 1980, efficiency: 24.3, sales: 8949000 },
  { year: 1985, efficiency: 27.6, sales: 10979000 },
  { year: 1990, efficiency: 28, sales: 9303000 },
  { year: 1991, efficiency: 28.4, sales: 8185000 },
  { year: 1992, efficiency: 27.9, sales: 8213000 },
  { year: 1993, efficiency: 28.4, sales: 8518000 },
  { year: 1994, efficiency: 28.3, sales: 8991000 },
  { year: 1995, efficiency: 28.6, sales: 8620000 },
  { year: 1996, efficiency: 28.5, sales: 8479000 },
  { year: 1997, efficiency: 28.7, sales: 8217000 },
  { year: 1998, efficiency: 28.8, sales: 8085000 },
  { year: 1999, efficiency: 28.3, sales: 8638000 },
  { year: 2000, efficiency: 28.5, sales: 8778000 },
  { year: 2001, efficiency: 28.8, sales: 8352000 },
  { year: 2002, efficiency: 29, sales: 8042000 },
  { year: 2003, efficiency: 29.5, sales: 7556000 },
  { year: 2004, efficiency: 29.5, sales: 7483000 },
  { year: 2005, efficiency: 30.3, sales: 7660000 },
  { year: 2006, efficiency: 30.1, sales: 7762000 },
  { year: 2007, efficiency: 31.2, sales: 7562000 },
  { year: 2008, efficiency: 31.5, sales: 6769000 },
  { year: 2009, efficiency: 32.9, sales: 5402000 },
  { year: 2010, efficiency: 33.9, sales: 5636000 },
  { year: 2011, efficiency: 33.1, sales: 6093000 },
  { year: 2012, efficiency: 35.3, sales: 7245000 },
  { year: 2013, efficiency: 36.4, sales: 7586000 },
  { year: 2014, efficiency: 36.5, sales: 7708000 },
  { year: 2015, efficiency: 37.2, sales: 7517000 },
  { year: 2016, efficiency: 37.7, sales: 6873000 },
  { year: 2017, efficiency: 39.4, sales: 6081000 },
]

  const data1 = [
    { label: 'id.orig_h',  value: 12 },
    { label: 'id.orig_p', value: 19 },
    { label: 'local_orig', value: 3 },
    { label: 'missed_bytes', value: 4 },
    { label: 'orig_ip_bytes', value: 12 },
    { label: 'resp_ip_bytes', value: 10 },
  ];

  const suricata_data = [
     
{ label: 'stats', value: 120 },
{ label: 'flow', value: 190 },
{ label: 'tls', value: 120 },
{ label: 'dhcp', value: 140 },
{ label: 'dns', value: 120 },
{ label: 'alert', value: 20 },
{ label: 'http', value: 100 },
  ]


const pieData = [
  ['Task', 'Hours per Day'],
  ['Work', 1],
  ['Eat', 3],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
]
function App() {

  const [darkMode, setDarkMode] = useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
 
  function stateChnages(e){
    setDarkMode(!darkMode)
  }

  return (<ThemeProvider theme={darkTheme}>
    <>
      <Navbar check={darkMode} change={(e)=>stateChnages(e)} />
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/Firewall"
            element={<Firewall />}
          ></Route>
          <Route
            path="/"
            element={<Landing />}
          ></Route>
           <Route
            path="/Excel"
            element={<Excel />}
          ></Route>
          <Route
            path="/Dashboard"
            element={<Dashboard />}
          ></Route>
          <Route
            path="/Zeek"
            element={<Chart data={data1} />}
          ></Route>
          <Route
            path="/Hostreport"
            element={<Hostreport />}
          ></Route>
          <Route
            path="/Suricata"
            element={<Chart data={suricata_data} />}
          ></Route>

        </Routes>
      </Router>
    </>
  </ThemeProvider>);
}

export default App;
