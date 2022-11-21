const UserController = require("../controllers/user.controller"); 

module.exports = (app)=>{
    // Read 
    app.get("/api/users/:id", UserController.getOneUser);
    app.get("/api/users", UserController.getAllUsers);

    // Create
    app.post("/api/users", UserController.createUser);

    // Update
    app.put("/api/users/:id", UserController.updateUser);

    // Delete
    app.delete("/api/users/:id", UserController.deleteUser);
}