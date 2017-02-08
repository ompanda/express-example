"use strict";

module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        title: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // Using additional options like CASCADE etc for demonstration
                // Can also simply do Task.belongsTo(models.User);
                Task.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            },
            getTasksUsingStoredProcedure: function() {
                console.log("in get tasks SP method");
                return sequelize.query('GetAllTasks ;');
            }
        }
    });


    return Task;
};