const express = require("express");
// var app = express
var DB = require("./config/db");
const Guest = {};

Guest.queryExecutor = (
  // rowsToDisplay,
  // sortBy,
  // limit,
  // filterBy,
  // filterValue,
  query,
  callback
) => {
  //   let query = ''
  // if(rowsToDisplay){
  //   query += `SELECT ${rowsToDisplay} FROM guests`;
  // }
  // else{
  //   query += "SELECT * FROM guests";
  // }
  // if(filterBy && filterValue){
  //     const filters = {filterBy, filterValue};
  //     query += 'WHERE'
  //   filters.forEach((item, index) => {
  //       query += `WHERE ${item.filterBy} = '${item.filterValue}'`;
  //       if(index !== filters.length - 1){
  //           query += 'AND';
  //       }
  //   });
  // }
  // if(sortBy){
  //   query += `ORDER BY ${sortBy}`;
  // }
  // if(limit){
  //   query +=`LIMIT ${parseInt(limit)}`;
  // }

  DB.query(query, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results);
  });
};
module.exports = Guest;
