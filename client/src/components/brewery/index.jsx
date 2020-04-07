import React, {Component} from 'react'
import './index.css'

class brewIndex extends Component{

    constructor(){
        super();
        this.state = {
            search: " ",
            beerList: {}
        }
    }

//LIFECYCLE METHOD THAT HAPPENS WHEN PAGE LOADS
    componentDidMount(){
        console.log('Component Did Mount')
        this.getBeer();
      }

    //getBeer Based on User Input
    getBeer = async(search)=>{
        try {
            const brewedSearch = await fetch (`https://api.brewerydb.com/v2/search?q=${search}&type=beer&key=`);
            const parsedResponse = await brewedSearch.json()// Convert to JSON
            console.log( "PARSED RESPONSE !!!!!!!!!", parsedResponse);
        } catch (error) {
            console.log(error)  
        }
    }

    //HANDLECHANGE  FUNCTIONS
    handleChange =(e)=>{
        console.log(e.target.value)
         this.setState({
             parsedResponse: e.target.value
         })
     }
     
     handleSubmit=(e)=>{
        console.log("SEARCH BUTTON CLICKED")
        e.preventDefault();
       this.getBeer(this.state)
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

