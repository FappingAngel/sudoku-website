async function getUsers(db, filter) {
  cursor = await db.find(filter);
  return cursor.toArray();
}

async function getOneUser(db, filter) {
  user = await db.findOne(filter);
  return user;
}

async function fillDB(db){
  user = await db.insertOne(
    {
    "username": "admin",
    "password": "admin",
    "level": "5",
    "xp": "400"
  })
}

module.exports = {
  fillDB,
  getUsers,
  getOneUser
}