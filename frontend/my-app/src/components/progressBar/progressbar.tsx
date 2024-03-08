import React from 'react';
import { Progress } from '../progress';
import './progressbar.css';



//{Progress}
export function ProgressBar({progress} : {progress:Progress}){
const currentXP = progress.current;
const maxXP = progress.max;
const lvl= progress.lvl;
const progressWidthPercent:string = ((currentXP / maxXP) * 100 < 15 ? 15 : (currentXP / maxXP) * 100) + "%";
const color:string = "#9f9f9f";

    //TODO: Man muss noch irgendwie erreichen, dass sich der Span maxXp nicht verschiebt, wenn progress zu groß wird
    return(
        <div className='progressBar'>
            <div className="level">{lvl}</div>
            <span className='bar' style={{backgroundColor: color}}>
                <span className="progress" style={{width: progressWidthPercent}}> &nbsp; {currentXP}</span>
                <span className="maxXp">{maxXP} XP &nbsp;</span>
            </span>
            
        </div>
    );
}
export default ProgressBar;