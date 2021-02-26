import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import axios from "axios";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage';
import Gallery from './components/Gallery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drinksA: [],
      drinksNA:[]
    }
  }
componentDidMount=()=>{
  this.getDrinks()
  this.getDrinksNA()
}
  
  getDrinks = () => {
    console.log("Get drink called")
    
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        console.log(response.data.drinks)
        this.setState({
          drinksA: response.data.drinks
        })

      })
  }
     
    getDrinksNA = () => {
      console.log("Get drink called")
      
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic', {
        headers: {
          Accept: 'application/json'
        }
      })
        .then(response => {
          console.log(response.data.drinks)
          this.setState({
            drinksNA: response.data.drinks
          })
  
        })
    }
      




    


  render() {
    
    return (
      <div className="App">
        <header>
          <Header />

        </header>
        <Switch>
        < Route  exact path='/' render={(routerProps) =>
          <Homepage getDrinks = {this.getDrinks} {...this.state} {...routerProps} />
        }></Route>
        < Route path ='/Gallery' render={(routerProps) =>
          <Gallery {...this.state}  {...routerProps}  />
        }
        ></Route>
       
       </Switch>
      </div>
    );
  }
}

export default App;
