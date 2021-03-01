import React, { Component } from 'react';
import './Homepage.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

function Homepage(props) {
    console.log('THis is the Homepage', props)
    return (
        <div className="box2">
            <div className='intro'>


                <p>Welcome to Pour Decisions! We have an extensive list of drink recipes for you to peruse, both with and without alcohol.

           </p>
            </div>
            <div className="pict">
                <div>
                    <Link to={'/Gallery/Alcoholic'}>Alcoholic Links</Link>
                </div>
                <div>
                    <Link to={'/Gallery/Non_Alcoholic'}>Non-Alcoholic Links</Link>
                </div>
            </div>
        </div>
    )
}

 export default Homepage;