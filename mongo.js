
const mongoose = require("mongoose");

const User = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
            function(password)
            {
                console.log(password.lenght)
                return password.length > 9;
            },
            'El password deberia de ser mas largo'],
        select: false },
        })

// const Profile = new mongoose.Schema({
//     name: String,
//     surname: String,
//     dateOfBirth: Number,
//     comments: String,
//     rol: String
// })

// Profile.pre('save', function(next)
// {
//     console.log("Middelware de entrada");
//     if(this.dateOfBirth > 1982)
//     {
//         console.log("Has introducido una fecha muy antigua")
//         next();
//     }
//     else
//     console.log("Solo gente mas joven")
// });


// const Creedentials = new mongoose.Schema({
//     address: String,
//     phone: Number,
//     email: String
// })

module.exports = mongoose.model ( "User",User);
// module.exports = mongoose.model ("Profile", Profile);
// module.exports = mongoose.model ("Creedentials", Creedentials);