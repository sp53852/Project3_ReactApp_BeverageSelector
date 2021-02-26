import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import './Gallery.css';
class Gallery extends Component {
    render () {
        console.log(this.props)
        // const parksList = this.props.parks.map((value, index) =>
        //     <div key={index}>
        //         <div class="overlay-image">
        //             {<p>{value.name}</p>}
        //        </div>
        //         <Link to={`/park/${value.id}`}>
        //         <img src={value.images[0].url}></img>
        //         </Link>
        //     </div>
        //     )
        return (
            <div>
                {/* <h1>Parks List</h1> */}
                {/* {parksList} */}
            </div>
        )
    }
}
export default Gallery