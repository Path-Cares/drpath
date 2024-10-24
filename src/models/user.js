import pool from '../config/dbconfig';

const User = {
  findByEmail: (email, callback) => {
    pool.query('SELECT * FROM users WHERE email = $1', [email], callback);
  }
};

export default User;
