// import mysql from 'mysql2';
// import dotenv from 'dotenv';

// dotenv.config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// export default pool.promise();
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined, // Convert string to number
  ssl: {
    rejectUnauthorized: false, // Optional: Set this to `false` if you're connecting to a database with self-signed certificates.
  },
});

// Log a message when the pool successfully connects to the database
pool.on('connect', () => {
  console.log('Database connected successfully.');
});

// Optional: Log any errors that occur during the connection process
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;


