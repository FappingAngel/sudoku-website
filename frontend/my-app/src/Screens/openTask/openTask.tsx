import React from "react";
import NavBar from "../../components/navbar/navbar";
import './openTask.css';


export default function OpenTaskScreen(){
  /*ACHTUNG!: Ich habe das ! eingefügt, weil task sonst den Datentyp Task|undefined hat, aber nur Task haben darf. Noch gucken, wie man das korrigieren / umgehen kann*/
    return (
        <div className="App">
          <span><NavBar /></span>
        </div>
      );
    };