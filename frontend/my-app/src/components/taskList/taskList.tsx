import React, {useEffect, useState} from 'react';
import { Task } from '../task';
import './taskList.css'
import { ReactComponent as AddLogo } from '../../resources/add.svg'
import { ReactComponent as EditLogo } from '../../resources/edit.svg'

function TaskListItem({ task }: { task: Task }) {

    const title = task.title
    const color = task.color
    const deadline = task.deadline;

    return (
        <tr className="taskListItem">
            <td><div className="colorField" style={{ backgroundColor: color }} /></td>
            <td>{title}</td>
            <td>{deadline}</td>
            <td><input className="auswahlCheckbox" style={{ marginRight: "4px" }} type="checkbox"></input></td>
        </tr>
    );

}


function TaskControl() {
    return (
        <div className="controlbuttons">
            <button className="button" id="modify"><EditLogo /> Auswahl löschen</button>
            <button className="button" id="add"> <AddLogo /> Task hinzufügen</button>
        </div>
    )
}

function ScrollableTaskList() {
    const [tasks, setTasks] = useState([{}] as Task[]);

    useEffect(() => {
        fetch('http://localhost:2999/tasks', {mode:'cors'}).then(response => response.json()).then(data => setTasks(data));	
        }, []);
    
    return (
        <div>
            <h1>Tasks</h1>
            <div>
                <table>
                    <thead>
                        <tr className="taskListHeader">
                            <th style={{width:'20%'}}>Kategorie</th>
                            <th style={{width:'40%'}}>Titel</th>
                            <th style={{width:'20%'}}>Deadline</th>
                            <th style={{width:'20%'}}>Auswahl</th>
                        </tr>
                    </thead>
                </table>
                <div className='tableContainer'>
                    <table className="scrollableTaskList">
                        <thead>
                            <tr>
                                <th style={{width:'20%'}}></th>
                                <th style={{width:'40%'}}></th>
                                <th style={{width:'20%'}}></th>
                                <th style={{width:'20%'}}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((taskList) => <TaskListItem task={taskList} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="tableButtons">
                <TaskControl />
            </div>
        </div>
    )
}
export default ScrollableTaskList;


export function ScrollableTaskListShortened() {
    const [tasks, setTasks] = useState([{}] as Task[]);

    useEffect(() => {
        fetch('http://localhost:2999/tasks', {mode:'cors'}).then(response => response.json()).then(data => setTasks(data));	
        }, []);
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th style={{width:'10%'}}>Kategorie</th>
                    <th style={{width:'40%'}}>Titel</th>
                    <th style={{width:'35%'}}>XP</th>
                    <th style={{width:'10%'}}>Deadline</th>
                </tr>
            </thead>
            </table>
            <div className='tableContainerShortened'>
                <table className="scrollableTaskListShortened">
                    <thead>
                    <th style={{width:'10%'}}></th>
                    <th style={{width:'40%'}}></th>
                    <th style={{width:'35%'}}></th>
                    <th style={{width:'10%'}}></th>
                    </thead>
                <tbody>
                    {
                        tasks.map((taskList) => <TaskListItemShortened task={taskList} />)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
}

function TaskListItemShortened({ task }: { task: Task }) {
    const title = task.title;
    const color = task.color;
    const deadline = task.deadline;
    const xp = task.xp;

    return (
        <tr className="taskListItem" id="shortened">
            <td><div className="colorField" style={{ backgroundColor: color }} /></td>
            <td>{title}</td>
            <td>{xp}</td>
            <td>{deadline}</td>
        </tr>
    );
}