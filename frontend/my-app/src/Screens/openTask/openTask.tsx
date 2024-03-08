import { random } from "lodash";
import EditTask from "../../components/editTask/EditTask";
import NavBar from "../../components/navbar/navbar";
import { TASKS } from "../../components/task";
import ScrollableTaskList from "../../components/taskList/taskList";
import './openTask.css';


export default function OpenTaskScreen(){
  /*ACHTUNG!: Ich habe das ! eingefügt, weil task sonst den Datentyp Task|undefined hat, aber nur Task haben darf. Noch gucken, wie man das korrigieren / umgehen kann*/
  const task = TASKS.at( Math.floor(Math.random() * 7) + 1)!;
    return (
        <div className="App">
          <span><NavBar /></span>
          <div className="tasks">
            <ScrollableTaskList />
          </div>
          <div className="calendar">
            <div className="editContainer">
            <EditTask task={task} />
          </div>
          </div>
        </div>
      );
    };