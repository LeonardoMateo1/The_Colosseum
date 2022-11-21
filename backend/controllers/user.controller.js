const User = require("../models/user.model");

module.exports = {
    createUser: (req, res) => {
        User.create(req.body)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getAllUsers: (req, res) => {
        User.find({}) 
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getOneUser: (req, res) => {
        User.findOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },

    updateUser: (req, res) => {
        User.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true,runValidators: true})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },

    deleteUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },
}