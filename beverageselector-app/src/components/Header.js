import React from "react";
import './Header.css'

function Header() {
   return (
       <nav className="linkStyle">
           <div>Pour Decisions </div>
         <div>Home</div>
         <div>
             <form>
         <input type = "text" placeholder = "ingredient"/>
         </form>
         </div>     
       </nav>
   )
}

export default Header