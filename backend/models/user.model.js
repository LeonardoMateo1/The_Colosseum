const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const PlayerSchema = new mongoose.Schema({
    fname: {
        type: String, 
        required: [true, "First Name is Required"],
        minLength: [3, "Name is required"]
    },
    lname: {
        type: String, 
        required: [true, "Last Name is Required"],
        minLength: [3, "Last Name is Required"]
    },
    position: {
        type: String, 
        required: [true, "Basketball Position is Required"],
        minLength: [1, "Basketball Position is Required"]
    },
    password: {
        type: String, 
        required: [true, "Password has to be at least 5 Characters"],
        minLength: [5, "Password has to be at least 5 Characters"]
    },
    phone: {
        type: String
    },
    email: {
        type: String, 
        required: [true, "Valid email is Required"]
    }
}, {timestamps: true});


PlayerSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})
const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player;