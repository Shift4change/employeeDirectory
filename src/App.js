import React from 'react';
import axios from "axios";
import Header from "./components/Header/Header"
import SearchForm from "./components/SearchForm/SearchForm"
import EmployeeTable from "./components/EmployeeTable/EmployeeTable"
// import SearchResults from "./components/SearchResults/SearchResults"

// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

function App(){
return(
  <>

  <Header />
  <SearchForm
   />
  <br></br>
  <br></br>
  <EmployeeTable />

  </>
);


}

export default App;
