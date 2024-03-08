import React from "react";
import './navbar.css'
import {ProgressBar} from '../progressBar/progressbar'
import {ReactComponent as AccountLogo} from '../../resources/account.svg'
import {ReactComponent as AppLogo } from '../../resources/unicorn.svg';
import { PROGRESS } from "../../models/progress";



export function NavBar(){
return(
<div className="navBar">
    <AppLogo style={{justifySelf:"center", alignSelf:"centeer", padding:"3px" ,height: "auto", width: "auto"}} />
    <p className="appNameLabel">NoNToxic - Sudoku</p>

    <ProgressBar progress={PROGRESS}/>
    <AccountLogo style={{marginRight: "10px", height: "100%", width: "auto"}} />

</div>
);
}
export default NavBar;