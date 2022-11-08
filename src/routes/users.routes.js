const { Router } = require("express");
const { 
    getAllUsers, 
    getUserById, 
    getUserWithAddress, 
    getUserWithTasks, 
    createUser
} = require("../controllers/users.controllers");

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

router.get("/users/:id/address", getUserWithAddress);

router.get("/users/:id/tasks", getUserWithTasks);

router.post("/users", createUser);

module.exports = router;
