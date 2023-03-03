import React, {Component} from "react";
import './Header.css'
class Header extends Component{
    render(){
        return(
            <div className="Header">
            <h1>Semana 5</h1>
            <h8>Soy un componente tipo función que despliega una constante que dice "Semana 5"</h8>

            </div>
        );
    }
}

export default Header;