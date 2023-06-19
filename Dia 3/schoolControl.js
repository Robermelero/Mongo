let mongoose = require("mongoose");



mongoose.connect('mongodb+srv://robermelero:administrador@cluster0.rrqe2fn.mongodb.net/School', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const teachers = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
  });
  const marks = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teachers]
  });
  
  let TeacherModel = mongoose.model ( "teachers",teachers);
  let MarksModel = mongoose.model ("marks", marks);

let teacher1 = new TeacherModel({teacher_first_name: "Sofia", teacher_last_name: "Angel"})
let teacher2 = new TeacherModel({teacher_first_name: "Elena", teacher_last_name: "Gayo"})
let teacher3 = new TeacherModel({teacher_first_name: "Teresa", teacher_last_name: "de Miguel"})
let teacher4 = new TeacherModel({teacher_first_name: "Aitor", teacher_last_name: "Goyenechea"})
let teacher5 = new TeacherModel({teacher_first_name: "Silvia", teacher_last_name: "Recarte"})
let teacher6 = new TeacherModel({teacher_first_name: "Laura", teacher_last_name: "Calle"})
let teacher7 = new TeacherModel({teacher_first_name: "Ines", teacher_last_name: "Muñoz"})
let teacher8 = new TeacherModel({teacher_first_name: "Roberto", teacher_last_name: "Melero"})
let teacher9 = new TeacherModel({teacher_first_name: "Alejandro", teacher_last_name: "Planelles"})
let teacher10 = new TeacherModel({teacher_first_name: "Menchu", teacher_last_name: "Angel"})

let mark1 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Lucia", student_last_name: "Lopez", group_name: "azul", subject_name: "Castellano", teachers: [teacher1, teacher2]})
let mark2 = new MarksModel({date: "2022-06-23", mark: 5, student_first_name: "Jorge", student_last_name: "Lopez", group_name: "azul", subject_name: "Catalán", teachers: [teacher2, teacher3]})
let mark3 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Maria", student_last_name: "García", group_name: "verde", subject_name: "Matemáticas", teachers: [teacher3, teacher4]})
let mark4 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Jose", student_last_name: "Martinez", group_name: "lila", subject_name: "Castellano", teachers: [teacher4, teacher5]})
let mark5 = new MarksModel({date: "2022-06-23", mark: 7, student_first_name: "Natalia", student_last_name: "Alberti", group_name: "amarillo", subject_name: "Catalán", teachers: [teacher5, teacher6]})
let mark6 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Monica", student_last_name: "Carlon", group_name: "rojo", subject_name: "Matemáticas", teachers: [teacher7, teacher8]})
let mark7 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Lucia", student_last_name: "Montoya", group_name: "amarillo", subject_name: "Castellano", teachers: [teacher9, teacher10]})
let mark8 = new MarksModel({date: "2022-06-23", mark: 2, student_first_name: "Pedro", student_last_name: "Garau", group_name: "verde", subject_name: "Economía", teachers: [teacher10, teacher2]})
let mark9 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Carmela", student_last_name: "de Mingo", group_name: "azul", subject_name: "Economía", teachers: [teacher9, teacher3]})
let mark10 = new MarksModel({date: "2022-06-23", mark: 1, student_first_name: "Paula", student_last_name: "Martorell", group_name: "lila", subject_name: "Castellano", teachers: [teacher8, teacher4]})

// mark1.save()
// .then((result)=>{
//     console.log("Mark1 guardado");
//     return mark2.save()
// })
// .then((result)=>{
//     console.log("Mark2 guardado");
//     return mark3.save()
// })
// .then((result)=>{
//     console.log("Mark3 guardado");
//     return mark4.save()
// })
// .then((result)=>{
//     console.log("Mark4 guardado");
//     return mark5.save()
// })
// .then((result)=>{
//     console.log("Mark5 guardado");
//     return mark6.save()
// })
// .then((result)=>{
//     console.log("Mark6 guardado");
//     return mark7.save()
// })
// .then((result)=>{
//     console.log("Mark7 guardado");
//     return mark8.save()
// })
// .then((result)=>{
//     console.log("Mark9 guardado");
//     return mark9.save()
// })
// .then((result)=>{
//     console.log("Mark9 guardado");
//     return mark10.save()
// })
// .then((result)=>{
//     console.log("Mark10 guardado");
//     return teacher1.save()
// })
// teacher1.save()
// .then((result)=>{
//     console.log("Teacher1 guardado");
//     return teacher2.save()
// })
// .then((result)=>{
//     console.log("Teacher2 guardado");
//     return teacher3.save()
// })
// .then((result)=>{
//     console.log("Teacher3 guardado");
//     return teacher4.save()
// })
// .then((result)=>{
//     console.log("Teacher4 guardado");
//     return teacher5.save()
// })
// .then((result)=>{
//     console.log("Teacher5 guardado");
//     return teacher6.save()
// })
// .then((result)=>{
//     console.log("Teacher6 guardado");
//     return teacher7.save()
// })
// .then((result)=>{
//     console.log("Teacher7 guardado");
//     return teacher8.save()
// })
// .then((result)=>{
//     console.log("Teacher8 guardado");
//     return teacher9.save()
// })
// .then((result)=>{
//     console.log("Teacher9 guardado");
//     return teacher10.save()
// })
// .catch((error)=>{
//     console.log(error)
// })


function avg (asignatura){

    MarksModel.aggregate([{$group : {_id: asignatura, avg:{$avg:"$mark"}}}])
    .then((result) => {
        console.log(result)
    })
    .catch ((err) => {
    console.log(err)})}
    
// avg("Matematicas")

function alumnos(){
    MarksModel.aggregate([{$count:"alumnos"}])
    .then((result) => {
        console.log(result)
    })
    .catch ((err) => {
    console.log(err)})}

    // alumnos()

function nombres(){
    MarksModel.aggregate([{$project: {
                                    _id:0,
                                    student_first_name:1,
                                    student_last_name:1
    }}])
    .then((result) => {
        console.log(result)
    })
    .catch ((err) => {
    console.log(err)})}

// nombres();

function profesores(){
    TeacherModel.aggregate([{$project: {
                                    _id:0,
                                    teacher_first_name:1,
                                    teacher_last_name:1
    }}])
    .then((result) => {
        console.log(result)
    })
    .catch ((err) => {
    console.log(err)})}

// profesores();

function getByGroup(){
    MarksModel.aggregate
    ([{ $group: { _id: "$group_name", count: { $sum: 1 } } },
                                    { $sort: { _id: -1 } }])
        .then((result) => {
            console.log(result)
        })
        .catch ((err) => {
        console.log(err)})}

        // getByGroup()

function top(){
    MarksModel.aggregate
                ([{ $group: { _id: "$subject_name", avg: { $avg: "$mark" } } },
                { $match: { avg: { "$gte": 5 } } },
                { $sort: { avg: -1 } },
                { $limit: 5 }])
    .then((result) => {
        console.log(result)
    })
    .catch ((err) => {
    console.log(err)})}

// top()

function countTeachers(){
    MarksModel.aggregate
    ([{$unwind : "$teachers"},
    { $group: { _id: "$subject_name", count: { $sum: 1 }}}])
                                   
        .then((result) => {
            console.log(result)
        })
        .catch ((err) => {
        console.log(err)})}

// countTeachers()

function nameSurname() {
    let lastYear = new Date().getFullYear() - 1;

        MarksModel.aggregate([
        {
        $project: {
        _id: 0,
        student_first_name: 1,
        student_last_name: 1,
        mark: 1,
        date: 1
        }},
            {$match: {
            $or: [
            { mark: { $gt: 8 } },
            { date: { $lt: new Date(lastYear, 0, 1) } }
            ]}}
            ])
    .then((result) => {
    console.log(result);
    })
    .catch((err) => {
    console.error("Error al obtener los alumnos", err);
    });
    }

// nameSurname();

function notaMedia() {
    let lastYear = new Date().getFullYear() - 1;
  
    MarksModel.aggregate([
      { $match: { date: { $gte: new Date(lastYear, 0, 1) } } },
      { $group: { _id: "$subject_name", average: { $avg: "$mark" } } }
    ])
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error("Error al calcular la nota media", err);
      });
  }

//   notaMedia()

function aritmetica(){
let lastYear = new Date().getFullYear() - 1;

MarksModel.aggregate([
  { $match: { date: { $gte: new Date(lastYear, 0, 1) } } },
  { $group: { _id: { first_name: "$student_first_name", last_name: "$student_last_name" }, average: { $avg: "$mark" } } }
])
.then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Error al calcular la nota media", err);
  });
}
// aritmetica()

function asignaturas(){
MarksModel.aggregate([
  { $unwind: "$teachers" },
  { $match: { "teachers.teacher_last_name": "Planelles" } },
  { $group: { _id: { first_name: "$student_first_name", last_name: "$student_last_name" }, count: { $sum: 1 } } }
])
.then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Error al calcular la nota media", err);
  });
}
asignaturas();


