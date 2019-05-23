const mysql= require('mysql');

const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'4dm!n!5tr4d0r',
    database:'company'
});

mysqlConnection.connect(function(error){
    if(error){
        console.log(error);
        return;
    }else{
        console.log('Db is connected');
    }

});

module.exports=mysqlConnection;