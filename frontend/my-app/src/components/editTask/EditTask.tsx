import moment from 'moment';
import { Task } from '../task';
import './EditTask.css';


export default function EditTask({ task }: { task: Task }) {
    const title = task.title;
    const description = task.description;
    const priority = task.priority;
    const deadline = task.deadline;
    const xp = task.xp;
    const color = task.color;

    return (
        <form className="inputForm">
            {/*HTMLFor für Labels einfügen*/}
            <label htmlFor='title'>Titel:</label><br />
            <input type="text" id="title" defaultValue={title}></input><br />
            <label htmlFor='description'>Beschreibung:</label><br />
            <textarea id="description">{description}</textarea><br />

            <div className="shortInputs">
                <div className="inputRow">
                    <label htmlFor='priority'>Priorität:</label>
                    <label htmlFor='deadline'>Fälligkeitstermin:</label>
                    <label htmlFor='xp'>XP bei Erfolg:</label>
                    <label htmlFor='color'>Farbe:</label><br />
                </div>
                {/*TODO: HINTERGRUNDFARBE NOCH SETZEN, MENÜ BEI KLICK ÖFFNEN*/}
                <div className="inputRow">
                    <select className="dropbtn" id="priority" defaultValue={priority}>
                        <option value="5">Höchste</option>
                        <option value="4">Hoch</option>
                        <option value="3">Mittel</option>
                        <option value="2">Niedrig</option>
                        <option value="1">Niedrigste</option>
                    </select>

                    <input type="date" id="deadline" defaultValue={deadline}></input>
                    <input type="number" id="xp" defaultValue={xp}></input>
                    <input type="color" id="color" defaultValue={color}></input><br />
                </div>
            </div>


            {/*<button className="colorField" style={{backgroundColor: "pink"}}/>*/}
            <input type="submit" value="Bestätigen" />
            <input type="submit" value="Als fertig markieren" />
            <input type="reset" value="Abbrechen" />
        </form>
    );
};