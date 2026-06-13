
import { LOGO_URL } from "../utils/constant";
import { useState} from "react"; 
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log ("header render")

 useEffect  (() => {
    console.log ("useEffect called");
});
    
    return (
        <div className="header">
        <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                <li>
                      <Link to = "/">Home</Link>  
                 </li>
                    <li>
                      <Link to = "/About">About us</Link>  
                    </li>
                    <li>
                        Cart
                    </li>
                    <li>
                    <Link to = "/Contact">Contact us</Link> 
                    </li>
                   
                    <button className="login-btn" onClick={() => {
                      btnNameReact === "Login"
                      ?setBtnNameReact("Logout")
                      :setBtnNameReact("Login"); 
                     }}>
                     {btnNameReact}</button>
                </ul>
            </div>

        </div>
    );
};

export default Header; 