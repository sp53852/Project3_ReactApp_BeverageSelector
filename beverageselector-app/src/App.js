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
      drinksA: this.props
    }
  }

  
  componentDidMount = () => {
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

   
  

  render() {
    
    
    
    return (
      <div className="App">
        <header>
          <Header />

        </header>

        < Route path='/' render={(routerProps) =>
          <Homepage {...this.props} {...routerProps} />
        }

        ></Route>
        < Route path='/' render={(routerProps) =>
          <Gallery {...this.state} {...routerProps} />
        }
        ></Route>
       

      </div>
    );
  }
}

export default App;
