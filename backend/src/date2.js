const sqlite3 = require('sqlite3').verbose();
const Chart = require('chart.js');

// Create a new database connection
const db = new sqlite3.Database('./data/ukonn-x-ng.db');

// Define the SQL query to execute
const sql =`
SELECT
  type,
  AVG(strftime('%s', end_timestamp) - strftime('%s', start_timestamp)) AS avg_time_needed
FROM
  task
GROUP BY
  type`;

// Execute the SQL query and output the results to the console
db.all(sql, [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    // Prepare the data for the chart
    const labels = rows.map(row => row.type);
    const data = rows.map(row => row.avg_time_needed);

    // Create a new chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Average Time Needed',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  // Close the database connection
  db.close();
});
