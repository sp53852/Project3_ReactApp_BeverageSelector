import React from "react";
import './Header.css'
import { Switch, Route, Link, Redirect } from 'react-router-dom';

function Header() {
   return (
       <nav className="box">
           <div><h1>Pour Decisions</h1> </div>
         
         <div className = "linkStyle">
         <div>
             <Link to={'/'}> Home</Link></div>
        <form>
         <input type = "text" placeholder = "ingredient"/>
         </form>
         </div>     
       </nav>
   )
}

export default Header