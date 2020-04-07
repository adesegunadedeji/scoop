import React, {Component} from 'react'
import './index.css'

class brewIndex extends Component{

    constructor(){
        super();
        this.state = {
            search: " ",
        }
    }

//LIFECYCLE METHOD THAT HAPPENS WHEN PAGE LOADS
    componentDidMount(){
        console.log('Component Did Mount')
        this.getBeer();
      }

    //getBeer Based on User Input
    getBeer = async(search, location)=>{
            const brewedSearch = await fetch (`https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q=${search}&type=beer&key=${process.env.REACT_APP_BREWERYDBKEY}`);
            const parsedResponse = await brewedSearch.json();
            console.log(parsedResponse);
    }
    
    //HANDLECHANGE  FUNCTIONS
    handleChange =(e)=>{
        console.log(e.target.value)
         this.setState({
             search: e.target.value,
         })
console.log("This.state", this.state)
     }
     //HANDLESUBMIT FUNCTIONS
     handleSubmit=(e)=>{
        console.log("SEARCH BUTTON CLICKED")
        e.preventDefault();
       this.getBeer(this.state.search)
    }
    render(){
        return(
        <div className="brew_Index">
            <form onSubmit = {this.handleSubmit}>
            <h1>Find a Local Brewery Near You</h1>
            <div className="form-Box">
            <input  name="searchField" className="search_field liquor" type="text" placeholder="Seattle's Beer, Miller..." onChange={this.handleChange}/>
            <input  name="searchLocation" className="search_field location" type="text" placeholder="Location" onChange={this.handleChange}/>
            <button className = "search_btn">Search</button>
            </div>
            </form>
        </div>)
    }
}

export default brewIndex 

