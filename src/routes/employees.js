const express=require('express');
const router= express.Router();

const mysqlConnection=require('../database.js');

// GET all Employees
router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employess',(error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});
// GET An Employee
router.get('/:id',(req,res)=>{
    const {id}=req.params
    mysqlConnection.query('SELECT * FROM employess WHERE id=?',[id],(error,rows,fiels)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
}); 

// INSERT An Employee
router.post('/', (req, res) => {
    const {id, name, salary} = req.body;
    console.log(id, name, salary);
    const query = `CALL employeeAddOrEdit(?,?,?);`;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Employeed Saved'});
      } else {
        console.log(err);
      }
    });
  });

  router.put('/:id', (req, res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = `
      CALL employeeAddOrEdit(?,?,?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Employee Updated'});
      } else {
        console.log(err);
      }
    });
  });

// DELETE An Employee
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM employess WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Deleted'});
    } else {
      console.log(err);
    }
  });
});
module.exports= router;
