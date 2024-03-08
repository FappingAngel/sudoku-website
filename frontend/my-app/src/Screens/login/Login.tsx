import React, {useEffect} from "react";
import { ReactComponent as AppLogo } from '../../resources/unicorn.svg';
import './Login.css';
import { METHODS } from "http";


export default function LoginScreen() {

    useEffect(() => {
        const form = document.getElementById("LoginForm");
        if(form)
         form.addEventListener("submit", (e) => {
         e.preventDefault();
     
         let username = (document.getElementById("UserNameField") as HTMLInputElement).value;
         let password = (document.getElementById("PasswordField") as HTMLInputElement).value;
     
         const formData = new FormData();
         formData.append("username", username);
         formData.append("password", password);
     
     fetch('http://localhost:2999/users/', {method: "POST", body: formData})
     .then((res) => {
         console.log(res.json());
     })
    })},[]);

    /*const handleSubmit = (e:any) => {e.preventDefault;
    e.data
    }*/

    return (
        <div className="screenRoot">
            <div className="container">
                <div className="headerBar">
                    <div className="appName">                    
                        <AppLogo style={{ marginLeft: "10px", height: "5vh", width: "5vh" }} />
                        <p className="appNameLabel">Sudoku</p>
                    </div>
                    <div className= "divisor"/>
                    <h1 className="logInHeader">Log-In</h1>
                </div>
                <form id="LoginForm" /*onSubmit={handleSubmit}*/>
                    <label className="textfieldHeadline" htmlFor="UserNameField">Benutzername</label><br/>
                    <input type="text" className="textField" id="UserNameField" name="UserName" required></input><br/>
                    <label className="textfieldHeadline" htmlFor="PasswordField">Passwort</label><br/>
                    <input type="password" className="textField" id="PasswordField" name="Password" ></input>
                    <div><a style={{paddingLeft: "15px"}} href="./home">Passwort vergessen?</a></div><br/>
                    <div className="logInButtons">
                    <input type="reset" className="button" value="Registrieren"/>
                    <input type="submit" className="button" value="Anmelden"/>
                    </div>
                </form>
            </div>
        </div>
    );
}  
