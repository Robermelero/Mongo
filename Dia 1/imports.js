let mongoose = require("mongoose");
let User = require("./mongo");
// let Profile = require("./mongo");
// let Creedentials = require("./mongo");

mongoose.connect('mongodb+srv://robermelero:administrador@cluster0.rrqe2fn.mongodb.net/',
                    {useNewUrlParser: false, useUnifiedTopology: false})

    let uUser = new User({
        login: "robermel",
        password: "1234567354534"
    });

    // let userProfile = new Profile({
    //     name: "Juan",
    //     surname: "Lecter",
    //     dateOfBirth: 1984,
    //     comments: "Comecerebros",
    //     rol: "asesino"
    // });

    // let userCreedentials = new Creedentials({
    //     address: "calle del pijo 10",
    //     phone: 699569396,
    //     email: "juanito@gmail.com"
    // });



uUser.save()
.then ((data) => 
{
    console.log(data);
})
.catch((err) => 
console.log(err)
)

// userCreedentials.save()
// .then ((data) => 
// {
//     console.log(data);

// })
// .catch((err) => 
// console.log(err)
// )
// userProfile.save()
// .then ((data) => 
// {
//     console.log(data);
// })
// .catch((err) => 
// console.log(err)
// )

