const Employee = require('../models/employee')
const employeeCtrl = {};


employeeCtrl.getEmployess = async (req,res) => {
   const employess = await Employee.find();
   res.json(employess);
}
    

employeeCtrl.createEmployee  = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save()
    console.log(employee);
    res.json({
        'status': 'Employee Saved'
    });
    
}

employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.json(employee);
}

employeeCtrl.editEmployee = async (req,res) => {
    const {id} = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'});
    
}

employeeCtrl.deleteEmployee = async (req, res) => {
    const {id} = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({status: 'Employee delete'});
}

module.exports = employeeCtrl;