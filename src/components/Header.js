import React from "react";
import './Header.css'
import { Switch, Route, Link, Redirect } from 'react-router-dom';

function Header(props) {
  console.log(props)
   return (
    <nav className="box">
        <div><h1>Pour Decisions</h1> </div>

        <div className = "linkStyle">
            <div>
                <Link to={'/'}> Home</Link>
            </div>

            <form onSubmit={(event)=>{
                    event.preventDefault();
                    props.getDrinksByIngredient(event.target.drinkIngredient.value)
                    props.history.push('/Gallery/Search') /// allows for redirection to the Gallery page upon the Search condition being met in the Gallery if/else statement
                }}>
                    <input type="text" id="" name="drinkIngredient" placeholder="Ingredient to search"/> &nbsp;
                    <input type="submit" value="Submit" />
                    
            </form>
        </div>    
    </nav>
   )
}

export default Header