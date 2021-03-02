import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './Gallery.css';

class Gallery extends Component {

    render() {
        console.log("This is the Gallery")
        console.log(this.props)
        console.log(this.props.match)

        let drinks = []
        if (this.props.match.params.drinkType === "Alcoholic") {
            drinks = this.props.drinksA
        }
        else if (this.props.match.params.drinkType === "Non_Alcoholic") {
            drinks = this.props.drinksNA
        }
        else if (this.props.match.params.drinkType === "Search") {
            drinks = this.props.drinkIngredient
        }
        console.log(drinks)
        let drinksList = drinks.map((value, index) =>
            <Link to={"/Recipe/" + value.idDrink} >
                <div key={index}>
                    <div className="container">
                        <div className="centered">{value.strDrink}</div>
                        <img src={value.strDrinkThumb}></img>
                    </div>
                </div>
            </Link>
        )
        return (
            <div >

                <h1>Drinks List</h1>
                <div className="dispImage">
                    {drinksList}
                </div>
            </div>
        )
    }
}
export default Gallery