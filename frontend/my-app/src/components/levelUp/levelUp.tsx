import React from "react";
import "./levelUp.css"
import ProgressBar from "../progressBar/progressbar";
import { PROGRESS } from "../../models/progress";


export function LevelUp(){
//TODO: Progress noch integrieren
    return(
        <div className="container">
            <div>Herzlichen Glückwunsch, du hast hast Level erreicht!</div>
            <ProgressBar progress={PROGRESS}/>
            <button className="button">Verstanden</button>
        </div>
    )
}