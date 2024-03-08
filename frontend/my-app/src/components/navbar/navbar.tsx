import React from "react";
import './navbar.css'
import {ProgressBar} from '../progressBar/progressbar'
import {ReactComponent as AccountLogo} from '../../resources/account.svg'
import {ReactComponent as AppLogo } from '../../resources/Logo.svg';
import { PROGRESS } from "../progress";



export function NavBar(){
return(
<div className="navBar">
    <AppLogo style={{marginLeft: "10px", height: "auto", width: "auto"}} />
    <p className="appNameLabel">Taskquest ToDo-App</p>

    <ProgressBar progress={PROGRESS}/>
    <AccountLogo style={{marginRight: "10px", height: "100%", width: "auto"}} />

</div>
);
}
export default NavBar;