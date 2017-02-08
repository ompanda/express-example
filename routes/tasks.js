var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/alltasks', function(req, res) {
    models.Task.getTasksUsingStoredProcedure().then(function(tasks) {
        console.log("Tasks response - ", tasks[0]);
        res.render('tasks', {
            title: 'Sequelize: Express Example using MS SQL Server. Getting data by executing stored procedure',
            tasks: tasks[0]
        });
    });
});


module.exports = router;