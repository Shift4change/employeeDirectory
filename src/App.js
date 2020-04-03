import React from 'react';
import axios from "axios";
import Header from "./components/Header/"
import Search from "./components/Search/"
import EmployeeTable from "./components/EmployeeTable/"




function App(){
return(
  <>

  <Header />
  <Search />
  <EmployeeTable />

  </>
);


}

export default App;
