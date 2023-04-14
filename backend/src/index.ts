import express from "express";
import sqlite3 from "sqlite3";

const app = express();

let db = new sqlite3.Database('../data/ukonn-x-ng.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
});

/*
db.run("CREATE TABLE lorem (info TEXT)");
    
        const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (let i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
    
        db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
            console.log(row.id + ": " + row.info);
        });
*/

app.get("/secondstocompletetasks", (req, res) => {
    db.all("SELECT task.id as task_id, ((JULIANDAY(end_timestamp) - JULIANDAY(start_timestamp)) * 86400) as seconds_to_complete FROM task JOIN connection ON task.connection_id = connection.id;", (err, rows) => {
        if (err) console.log(err);
        res.send(rows);
    })
})

app.get("/avgcableinstalltime", (req, res) => {
    db.all("SELECT C.cable_id, AVG((JULIANDAY(end_timestamp) - JULIANDAY(start_timestamp)) * 86400) as avg_installation_time FROM task T, connection C WHERE T.connection_id = C.id GROUP BY C.cable_id;", (err, rows) => {
        if (err) console.log(err);
        res.send(rows);
    })
})

app.listen(3001, () => {
    console.log("server is running.")
})