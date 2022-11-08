const Address = require('./addresses.models');
const Users = require('./users.models');
const Tasks = require("./tasks.models");
const Categories = require("./categories.models");
const TaskCategories = require("./taskcategories.models"); 

const initModels = () => {
    TaskCategories; 

    Address.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});
    
    Users.hasOne(Address, {as: 'home', foreignKey: 'user_id'});

    Users.hasMany(Tasks, {as: 'todo', foreignKey: 'user_id'});

    Tasks.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});

    /* Tasks.belongsToMany(Categories, {
        through: 'task_categories',
        foreignKey: "category_id",
    });

    Categories.belongsToMany(Tasks, {
        through: 'task_categories',
        foreignKey: "task_id",
    }); */ 

    Tasks.hasMany(TaskCategories, { as: "categories", foreignKey: "task_id" });
    TaskCategories.belongsTo(Tasks, {as: "todo", foreignKey: "task_id"});

    Categories.hasMany(TaskCategories, { as: 'todos', foreignKey: 'category_id'});
    TaskCategories.belongsTo(Categories, { as: 'categories', foreignKey: 'category_id'});

};

module.exports = initModels;