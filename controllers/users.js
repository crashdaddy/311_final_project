const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM customers", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {

  let userId = req.params.id;
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "select * from ?? where id = ?";
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql,["customers", userId])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createUser = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "insert into ?? (first_name,last_name,email_address,phone) values (?,?,?,?)"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["customers",req.body.first_name,req.body.last_name,req.body.email_address,req.body.phone]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateUserById = (req, res) => {
  // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
  let sql = "UPDATE ?? SET first_name = ?, last_name = ? WHERE id = ?;"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["customers",req.body.first_name,req.body.last_name,req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteUserByFirstName = (req, res) => {
  // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
  let sql = "delete from ?? where ?? = ?";
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["customers","first_name",req.body.first_name]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserByFirstName
}