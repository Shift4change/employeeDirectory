import React, {Component} from "react";

   



export default function SearchForm(props){
   
    return(
        <>
        
        <input
        onChange={props.handler}
        value={props.val}
        name="search"
        type="text"
        className="searchInput"
        id="searchBox"
        placeholder="Search" 
        />



        </>
    );

}




