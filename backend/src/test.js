const sqlite3 = require('sqlite3').verbose();

// Create a new database connection
const db = new sqlite3.Database('./data/ukonn-x-ng.db');

// Define the SQL query to execute
const sql =`
SELECT
  type,
  AVG(strftime('%s', end_timestamp) - strftime('%s', start_timestamp)) AS avg_duration_sec,
  count(type)
FROM
  task
WHERE
  done = 1
GROUP BY
  type
ORDER BY
  avg_duration_sec DESC`;

const sql2 = `SELECT
type,
MAX(strftime('%s', end_timestamp) - strftime('%s', start_timestamp)) AS max_duration_sec,
MIN(strftime('%s', end_timestamp) - strftime('%s', start_timestamp)) AS min_duration_sec
FROM
task
WHERE
done = 1
GROUP BY
type`

// Execute the SQL query and output the results to the console
db.all(sql, [], (err, rows) => {

    console.table(rows);
})
db.all(sql2, [], (err, rows) => {

    console.table(rows);

    db.close()
})

;