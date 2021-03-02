import React, { Component } from 'react';
/*import { Switch, Route, Link, Redirect } from 'react-router-dom';*/
import './Recipe.css';
import axios from "axios";


class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drinkDetails: {}
        }
    }

    componentDidMount = () => {
        //console.log("Recipe - componentDidMount called")
        this.getSpecificDrink()
    }


      
    getSpecificDrink = () => {

        //console.log("Recipe - getSpecificDrink called")
        let idDrink = this.props.match.params.idDrink 
 

        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`, {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => {
            //console.log("Recipe - webservice data  called")

            /*
            let drinkDetail = [];
            for (const property in response.data.drinks[0]) {

                drinkDetail.push(<p>{response.data.drinks[0][property]}</p>)
            }*/

            this.setState({
                drinkDetails: response.data.drinks[0]
            })

        })
    }

    
    render() {
    
    let drinkHeader = <h1>{this.state.drinkDetails.strDrink}</h1>
    let imgHolder = <img src={this.state.drinkDetails.strDrinkThumb} ></img>
    let container = this.state.drinkDetails.strGlass

    let strIngredient1 = this.state.drinkDetails.strIngredient1
    let strMeasure1 = this.state.drinkDetails.strMeasure1
    let strIngredient2 = this.state.drinkDetails.strIngredient2
    let strMeasure2 = this.state.drinkDetails.strMeasure2
    let strIngredient3 = this.state.drinkDetails.strIngredient3
    let strMeasure3 = this.state.drinkDetails.strMeasure3
    let strIngredient4 = this.state.drinkDetails.strIngredient4
    let strMeasure4 = this.state.drinkDetails.strMeasure4
    let strIngredient5 = this.state.drinkDetails.strIngredient5
    let strMeasure5 = this.state.drinkDetails.strMeasure5
    let strIngredient6 = this.state.drinkDetails.strIngredient6
    let strMeasure6 = this.state.drinkDetails.strMeasure6
    let strIngredient7 = this.state.drinkDetails.strIngredient7
    let strMeasure7 = this.state.drinkDetails.strMeasure7
    let strIngredient8 = this.state.drinkDetails.strIngredient8
    let strMeasure8 = this.state.drinkDetails.strMeasure8
    let strIngredient9 = this.state.drinkDetails.strIngredient9
    let strMeasure9 = this.state.drinkDetails.strMeasure9
    let strIngredient10 = this.state.drinkDetails.strIngredient10
    let strMeasure10 = this.state.drinkDetails.strMeasure10
    let strIngredient11 = this.state.drinkDetails.strIngredient11
    let strMeasure11 = this.state.drinkDetails.strMeasure11
    let strIngredient12 = this.state.drinkDetails.strIngredient12
    let strMeasure12 = this.state.drinkDetails.strMeasure12
    let strIngredient13 = this.state.drinkDetails.strIngredient13
    let strMeasure13 = this.state.drinkDetails.strMeasure13
    let strIngredient14 = this.state.drinkDetails.strIngredient14
    let strMeasure14 = this.state.drinkDetails.strMeasure14
    let strIngredient15 = this.state.drinkDetails.strIngredient15
    let strMeasure15 = this.state.drinkDetails.strMeasure15

    let prepSteps = this.state.drinkDetails.strInstructions
        
        return (
    
            <div className="mainParent" >                
                <div className="title">{drinkHeader}    </div>
                <div className="mainBox">
                    <div className="childBox2">{imgHolder}</div>
                    <div className="childBox1">
                        <div className="label">Serving Container</div>{container}
                        <br></br><br></br>
                        <div className="label">Ingredients</div>
                        <div>
                            {strIngredient1 ? <div>{strIngredient1} - {strMeasure1 }<br></br></div> : null}
                            {strIngredient2 ? <div>{strIngredient2} - {strMeasure1 }<br></br></div> : null}
                            {strIngredient3 ? <div>{strIngredient3} - {strMeasure3 }<br></br></div> : null}
                            {strIngredient4 ? <div>{strIngredient4} - {strMeasure4 }<br></br></div> : null}
                            {strIngredient5 ? <div>{strIngredient5} - {strMeasure5 }<br></br></div> : null}
                            {strIngredient6 ? <div>{strIngredient6} - {strMeasure6 }<br></br></div> : null}
                            {strIngredient7 ? <div>{strIngredient7} - {strMeasure7 }<br></br></div> : null}
                            {strIngredient8 ? <div>{strIngredient8} - {strMeasure8 }<br></br></div> : null}
                            {strIngredient9 ? <div>{strIngredient9} - {strMeasure9 }<br></br></div> : null}
                            {strIngredient10 ? <div>{strIngredient10} - {strMeasure10 }<br></br></div> : null}
                            {strIngredient11 ? <div>{strIngredient11} - {strMeasure11 }<br></br></div> : null}
                            {strIngredient12 ? <div>{strIngredient12} - {strMeasure12 }<br></br></div> : null}
                            {strIngredient13 ? <div>{strIngredient13} - {strMeasure13 }<br></br></div> : null}
                            {strIngredient14 ? <div>{strIngredient14} - {strMeasure14 }<br></br></div> : null}
                            {strIngredient15 ? <div>{strIngredient15} - {strMeasure15 }<br></br></div> : null}
                        </div>
                        <br></br><br></br>
                        <div className="label">Preparation</div>
                        <div>{prepSteps}</div>
                    </div>
                    {/* <div className="childBox2">{imgHolder}</div> */}
                </div>
            </div>
        )
    }

}

export default Recipe;