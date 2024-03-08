
async function getTasks(db, filter) {
    cursor = await db.find(filter);
    return cursor.toArray();
}

async function getOneTask(db, filter) {
    tasks = await db.findOne(filter);
    return tasks;
}

async function createTask(db, task) {
    tasks = await db.insertOne(task);
    return tasks;
}

async function updateTask(db, task, id) {
    tasks = await db.updateOne({ _id: id },  { $set: { title: task.title, description: task.description, priority: task.priority, xp: task.xp, color: task.color, deadline: task.deadline}});
    return tasks;
}

async function deleteTasks(db, tasks){
    for(let i=0; i<tasks.length; i++){
    taskReturn[i] = await db.deleteMany({ _id: tasks[i]._id });
    }
    return taskReturn;
}

//helps if we need to reset database
async function fillDB(db){
    user = await db.insertMany(
        [{
            "title": "Wohnung putzen",
            "description": "räum auf!",
            "priority": 3,
            "xp": 40,
            "color": "#90EE90",
            "deadline": "02.01.2024",
            "owner": "6594585f030785514340b69d"
          },
          {
            "title": "mit Katze rausgehen",
            "description": "katze muss mal",
            "priority": 5,
            "xp": 10,
            "color": "#90EE90",
            "deadline": "23.12.2024",
            "owner": "6594585f030785514340b69d"
          },
          {
            "title": "Hausaufgaben machen",
            "description": "Hausaufgaben machen",
            "priority": 1,
            "xp": 40,
            "color": "#90EE90",
            "deadline": "02.01.2024",
            "owner": "6594585f030785514340b69d"
          },
          {
            "title": "Wäsche waschen",
            "description": "Wäsche waschen",
            "priority": 5,
            "xp": 10,
            "color": "#ADD8E6",
            "deadline": "15.05.2034",
            "owner": "6594585f030785514340b69d"
          },
          {
            "title": "Einkaufen gehen",
            "description": "Einkaufen gehen",
            "priority": 3,
            "xp": 40,
            "color": "#90EE90",
            "deadline": "29.09.2023",
            "owner": "6594585f030785514340b69d"
          },
          {
            "title": "Geschenk kaufen",
            "description": "Geschenk kaufen",
            "priority": 5,
            "xp": 10,
            "color": "#ADD8E6",
            "deadline": "23.12.2023",
            "owner": "6594585f030785514340b69d"
          },
          {
            "title": "Wohnung putzen",
            "description": "räum auf!",
            "priority": 3,
            "xp": 40,
            "color": "#90EE90",
            "deadline": "23.08.2024",
            "owner": "6594585f030785514340b69d"
          },
          {
            "title": "mit Katze rausgehen",
            "description": "Katze muss mal",
            "priority": 5,
            "xp": 10,
            "color": "#ADD8E6",
            "deadline": "31.04.2024",
            "owner": "6594585f030785514340b69d"
          }])
  }

module.exports = {
    getTasks,
    getOneTask,
    createTask,
    updateTask,
    fillDB
}