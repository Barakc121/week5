import mysql from "mysql2/promise";

// יוצר בריכת חיבורים ,יוצר לי חיבור שאני פותח שאילתה
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "test",
  conctionLimit: 10,
});
// מקבלת תוצאות
// const result = await pool.execute(`
//     create table if not exists users(
//         id int primary key auto_increment,
//         username varchar(30) unique,
//         password varchar(100) not null
//     )
// `)

// console.log(result)

// // דרך להוספת משתמש
// const arr= await pool.execute(`insert into users (username,password) values(?,?)`,["yosi","5678"])
// console.log(arr)
// // דרך להוספת משתמש דרך פונקציה
// async function create(username,password) {
// const result= await pool.execute(`insert into users (username,password) values(?,?)`,[username,password])
// }
// console.log(await create("hanan","1234"))

async function update(id, data) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  let query = "";
  for (const key of keys) {
    query += `${key} = ?, `;
  }
  return await pool.execute(
    `update users set ${query.slice(0, query.length - 2)} where id = ? `,
    [...values, id]
  );
}
console.log(await update (1,{username:"hanank",password:"1235"}))
pool.end();
