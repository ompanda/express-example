"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Task)
            },
            getAllUsers: function() {
                console.log("in get all users SP method");
                return sequelize.query('GetAllUsers ;');
            }
        }
    });

    return User;
};