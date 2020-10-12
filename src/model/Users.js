
const getAll = (con, callback) =>  {
  con.query('SELECT * FROM users', callback);
};

const getUserById = (con, id, callback) =>  {
  con.query(`SELECT * FROM users WHERE  id = ${id}`, callback);
};

const createNew = (con, data, callback) =>  {
  con.query('INSERT INTO users SET ?', data , callback);
};

const updateUser = (con, data, id, callback) =>  {
  con.query(`UPDATE users SET user_name = '${data.user_name}', email_addr = '${data.email_addr}',WHERE id = ${id}`,callback);
};

const deleteById = (con, id, callback) =>  {
  con.query(`DELETE FROM users WHERE id = ${id}`, callback);
};

module.exports = { 
    get: getAll ,
    getById: getUserById,
    create: createNew,
    update: updateUser,
    destroy: deleteById
};

/*
module.exports = {
  get: function(con, callback) {
    con.query('SELECT * FROM users', callback);
  },
  getById: function(con, id, callback) {
    con.query(`SELECT * FROM users WHERE  id = ${id}`, callback);
  },
  create: function(con, data, callback) {
    con.query('INSERT INTO users SET ?', data , callback);
  },
  update: function(con, data, id, callback) {
    con.query(`UPDATE users SET user_name = '${data.user_name}', email_addr = '${data.email_addr}',WHERE id = ${id}`,callback);
  },
  destroy: function(con, id, callback) {
    con.query(`DELETE FROM users WHERE id = ${id}`, callback);
  }
};
*/
