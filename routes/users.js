var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function(req, res) {
    models.User.create({
        username: req.body.username
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:user_id/destroy', function(req, res) {
    models.User.destroy({
        where: {
            id: req.params.user_id
        }
    }).then(function() {
        res.redirect('/');
    });
});

router.post('/:user_id/tasks/create', function(req, res) {
    models.Task.create({
        title: req.body.title,
        UserId: req.params.user_id
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:user_id/tasks/:task_id/destroy', function(req, res) {
    models.Task.destroy({
        where: {
            id: req.params.task_id
        }
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/getAllUsers', function(req, res) {
    models.User.getAllUsers().then(function(users) {
        console.log("All Users response - ", users[0]);
        res.render('users', {
            title: 'Get All users by executing stored procedure',
            users: users[0]
        });
    });
});

module.exports = router;