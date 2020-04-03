import React from "react";
import "./style.css";
import Axios from "axios";



export default class EmployeeTable extends React.Component {
    state = {
        people: []
    }
    componentDidMount() {
        Axios.get("https://randomuser.me/api/?results=10")
            .then(res => {
                this.setState({
                    people: res.data.results
                })
            })

    }
   

    


    handleInputChange = (event) => {
        
        var people= people.results
    
        if (event.target.name.first === "search") {
            const searchTerm = event.target.value.toLowerCase();
            
            let newList = people.filter((people) => {
               return people.name.first.toLowerCase().includes(searchTerm);
        });
        this.setState({
            people:newList
        });
    }
}
   
   

    sortByName = () => {
        let sortedPeople = this.state.people.sort
            ((a, b) => {
                if (b.name.first > a.name.first) {
                    return -1;
                }
                if (a.name.first > b.name.first){
                    return 1;
                }
                return 0;
            });
            if(this.state.sortOrder ==="DESC"){
                sortedPeople.reverse();
                this.setState({ sortOrder:"ASC" });

            }else{
                this.setState({sortOrder: "DESC"})
            }
        this.setState({ people: sortedPeople });
    }

     // sort by Email
  sortByEmail = () => {
    let sortedPeople = this.state.people.sort((a, b) => {
      if (b.email > a.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
        sortedPeople.reverse();
        this.setState({ sortOrder: "ASC" });
      } else {
        this.setState({ sortOrder: "DESC" });
      }
      console.log("sort by gender");
      this.setState({ results: sortedPeople });
    };
  

    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name<button onClick={this.sortByName}>Sort</button></th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody >
                {this.state.people.map((person) => {
                    return(
                
                    <tr key={person.id.value}>
                        <td><img src={person.picture.thumbnail} alt="thumb" /></td>
                        <td>{person.name.first}</td>
                        {/* <td>{person.name.last}</td> */}
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td>{person.dob.date}</td>
                    </tr>
               
                    )


                })}
                 </tbody>



            </table>
        )
    }

}
