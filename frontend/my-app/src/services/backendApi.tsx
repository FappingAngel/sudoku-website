import React from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import { Task } from '../components/task';



function createNewTask(task: Task){
}

function updateTask(task: Task){}

function checkUserLogin(){}

//updatePassword?

function getAllTasksFromUser(){}

function deleteTasks(){


fetch('http://localhost:2999/tasks/')
        .then((res) => {
            console.log(res.json());
        })


        fetch('http://localhost:2999/users/')
        .then((res) => {
            console.log(res.json());
        })

    }