let mongoose = require("mongoose");
const { db } = require("../../Dia 2/photo");



mongoose.connect('mongodb+srv://robermelero:administrador@cluster0.rrqe2fn.mongodb.net/Codenotch', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error)
})