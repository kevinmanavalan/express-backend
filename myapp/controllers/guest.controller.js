const Guest = require("../models/guest.model");

class GuestController{
    static getAllGuests(req, res){
        const{ rowsToDisplay, sortBy, limit, filterBy, filterValue} = req.query;
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
              query += `WHERE ${item.filterBy} = '${item.filterValue}'`;
              if(index !== filters.length - 1){
                  query += 'AND';
              }
          });
        }
        if(sortBy){
          query += `ORDER BY ${sortBy}`;
        }
        if(limit){
          query +=`LIMIT ${parseInt(limit)}`;
        }

        Guest.queryExecutor(query, (error, guests)=>{
            if(error){
                return res.status(500).json({error:'internal server error'});
            }
            res.json(guests)
        })
    }
}
module.exports = GuestController;
