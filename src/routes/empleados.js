const express=require('express');
const router= express.Router();

const executeQuery=require('../databasemssql.js');

//GET API
router.get("/",(req , res)=>{
    const query = "EXEC sp_cat_ListarEmpleados";
    executeQuery (res, query);
});

module.exports= router;