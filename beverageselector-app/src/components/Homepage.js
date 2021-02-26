import React, { Component } from 'react';
import './Homepage.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

function Homepage(props) {
    console.log('THis is the Homepage', props)
    return (
        <div className="box2">
           <div><h5>Hompage</h5></div>

           <Link  to={'/Gallery'}>
           Alcoholic Links</Link>
           <br/> <br/>
           <Link to={'/Gallery'}>
           Non-Alcoholic Links</Link>
                    
        </div>
    )
 }
 
 export default Homepage;