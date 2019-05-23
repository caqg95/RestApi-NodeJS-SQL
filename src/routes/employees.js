const express=require('express');
const router= express.Router();

const mysqlConnection=require('../database');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employess',(error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});

module.exports= router;
