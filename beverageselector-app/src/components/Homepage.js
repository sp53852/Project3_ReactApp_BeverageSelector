import React, { Component } from 'react';
import './Homepage.css';
import adrink from './img/alcohol_img.jpg';
import nadrink from './img/non-alcohol.jpg';





import { Switch, Route, Link, Redirect } from 'react-router-dom';


function Homepage(props) {
    console.log('THis is the Homepage', props)
    // console.log(this.props.drinksA[1])
    return (
        <div className="box2">
            <div className='intro'>


                <p>Welcome to Pour Decisions! We have an extensive list of drink recipes for you to peruse, both with and without alcohol.

           </p>
            </div>
            <div className="pict">
                <div>
                    <Link to={'/Gallery/Alcoholic'}>Alcoholic Links</Link> <br/>
                    <img src={adrink}></img>
                    {/* <img src ="{}" alt= "Alcoholic Drink Image"/> */}
                    
                </div>
                <div>
                    <Link to={'/Gallery/Non_Alcoholic'}>Non-Alcoholic Links</Link><br/>
                    <img src={nadrink}></img>
                    {/* <img src ="{}" alt= "Non-Alcoholic Drink Image"/> */}
                </div>
            </div>
        </div>
    )
}

 export default Homepage;