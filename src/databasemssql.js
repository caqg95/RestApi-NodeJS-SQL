const sql = require("mssql");

//Initiallising connection string
const dbConfig = {
    user:  "sa",
    password: "4dm!n!5tr4d0r",
    server: "LOCALHOST",
    database:"RHNOM"
};

//Function to connect to database and execute query
const  executeQuery = (res, query)=>{             
    sql.connect(dbConfig,(err)=>{
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
        else {
                        // create Request object
                        const request = new sql.Request();
                        // query to the database
                        request.query(query,(err, rows)=> {
                          if (err) {
                                     console.log("Error while querying database :- " + err);
                                     res.send(err);
                                    }
                                    else {
                                      res.json(rows);
                                           }
                              });
            }
     });           
}
module.exports=executeQuery;