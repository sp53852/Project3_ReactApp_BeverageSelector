import React from "react";
import './Header.css'

function Header() {
   return (
       <nav className="box">
           <div><h1>Pour Decisions</h1> </div>
         
         <div className = "linkStyle">
         <div>Home</div>
             <form>
         <input type = "text" placeholder = "ingredient"/>
         </form>
         </div>     
       </nav>
   )
}

export default Header