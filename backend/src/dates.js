const sqlite3 = require('sqlite3').verbose();

// Create a new database connection
const db = new sqlite3.Database('./data/ukonn-x-ng.db');

// Define the SQL query to execute
const sql =`
SELECT
  id,
  project_id,
  type,
  done,
  strftime('%Y-%m-%d', start_timestamp) AS date,
  strftime('%H:%M:%S', start_timestamp) AS start_time,
  strftime('%Y-%m-%d', end_timestamp) AS end_date,
  strftime('%H:%M:%S', end_timestamp) AS end_time,  
  strftime('%s', end_timestamp) - strftime('%s', start_timestamp) AS time_needed
  FROM
  task`;

// Execute the SQL query and output the results to the console
db.all(sql, [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.table(rows);
  }

  // Close the database connection
  db.close();
});
