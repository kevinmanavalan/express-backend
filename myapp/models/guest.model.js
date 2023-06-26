const { query } = require("express");
var connection = require("./config/db");
const Guest = {};

Guest.getAll = (rowsToDisplay, sortBy, limit, filterBy, filterValue, callback) => {
    let query = ''
  if(rowsToDisplay){
    query += `SELECT ${rowsToDisplay} FROM guests`;
  }
  else{
    query += "SELECT * FROM guests";
  }
  if(filterBy && filterValue){
      const filters = {filterBy, filterValue};
      query += 'WHERE'
    filters.forEach((item, index) => {
        query += `WHERE ${item.filterBy} = ${item.filterValue}`;
        if(index !== filters.length - 1){
            query += 'AND';
        }
    });
  }
};
