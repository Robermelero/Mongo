const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://robermelero:administrador@cluster0.rrqe2fn.mongodb.net/Codenotch', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const studentSchema = new mongoose.Schema({
  name: String,
  lastName: String,
});
const markSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
});
const subjectSchema = new mongoose.Schema({
  title: String,
  marks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mark' }],
});
const teacherSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  groups: [String],
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
});

const Student = mongoose.model('Student', studentSchema);
const Mark = mongoose.model('Mark', markSchema);
const Subject = mongoose.model('Subject', subjectSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);

const insertDocuments = async () => {
    try {
      let student1 = new Student({ name: 'Juan', lastName: 'Gómez' });
      let student2 = new Student({ name: 'María', lastName: 'González' });
      let student3 = new Student({ name: 'Pedro', lastName: 'Rodríguez' });
      let student4 = new Student({ name: 'Ana', lastName: 'López' });
      await Promise.all([student1.save(), student2.save(), student3.save(), student4.save()]);
  
      let subject1 = new Subject({ title: 'Matemáticas' });
      let subject2 = new Subject({ title: 'Historia' });
      let subject3 = new Subject({ title: 'Inglés' });
      let subject4 = new Subject({ title: 'Ciencias' });
      let subject5 = new Subject({ title: 'Arte' });
      await Promise.all([subject1.save(), subject2.save(), subject3.save(), subject4.save(), subject5.save()]);
  
      let mark1 = new Mark({ date: new Date('2023-01-15'), mark: 9, student: student1._id, subject: subject1._id });
      let mark2 = new Mark({ date: new Date('2023-01-30'), mark: 8, student: student1._id, subject: subject2._id });
      let mark3 = new Mark({ date: new Date('2023-02-10'), mark: 10, student: student2._id, subject: subject3._id });
      let mark4 = new Mark({ date: new Date('2023-02-20'), mark: 7, student: student3._id, subject: subject4._id });
      let mark5 = new Mark({ date: new Date('2023-03-05'), mark: 9, student: student4._id, subject: subject5._id });
      await Promise.all([mark1.save(), mark2.save(), mark3.save(), mark4.save(), mark5.save()]);
  
      let teacher1 = new Teacher({ name: 'Mariano', lastName: 'López', groups: ['A', 'B'], subjects: [subject1._id] });
      let teacher2 = new Teacher({ name: 'Lisa', lastName: 'Martínez', groups: ['A'], subjects: [subject1._id] });
      let teacher3 = new Teacher({ name: 'Eduardo', lastName: 'Sánchez', groups: ['B'], subjects: [subject3._id] });
      let teacher4 = new Teacher({ name: 'Miguel', lastName: 'Gómez', groups: ['C'], subjects: [subject4._id] });
      let teacher5 = new Teacher({ name: 'Rita', lastName: 'Hernández', groups: ['A', 'B', 'C'], subjects: [subject5._id] });
      await Promise.all([teacher1.save(), teacher2.save(), teacher3.save(), teacher4.save(), teacher5.save()]);
  
      console.log('Datos insertados correctamente.');
    } catch (error) {
      console.error('Error al insertar los datos:', error);
    }
  };

// insertDocuments();

const showStudentMarks = async (studentName) => {
    try {
      let student = await Student.findOne({ name: studentName });
      if (student) {
        let marks = await Mark.find({ student: student._id }).populate('student');
        console.log(`Notas de ${student.name} ${student.lastName}:`);
        marks.forEach((mark) => {
          console.log(`- Fecha: ${mark.date}, Nota: ${mark.mark}`);
        });
      } else {
        console.log('No se encontró al alumno.');
      }
    } catch (error) {
      console.error('Error al mostrar las notas del alumno:', error);
    }
  };
  
  const showStudentSubjects = async (studentName) => {
    try {
      let student = await Student.findOne({ name: studentName });
      if (student) {
        let marks = await Mark.find({ student: student._id }).populate('subject');
        let subjectIds = marks.map((mark) => mark.subject);
        let subjects = await Subject.find({ _id: { $in: subjectIds } });
        console.log(`Asignaturas de ${student.name} ${student.lastName}:`);
        subjects.forEach((subject) => {
          console.log(`- Asignatura: ${subject.title}`);
        });
      } else {
        console.log('No se encontró al alumno.');
      }
    } catch (error) {
      console.error('Error al mostrar las asignaturas del alumno:', error);
    }
  };
  
  const showStudentTeachers = async (studentName) => {
    try {
      let student = await Student.findOne({ name: studentName });
      if (student) {
        let marks = await Mark.find({ student: student._id }).populate('subject');
        let subjectIds = marks.map((mark) => mark.subject._id);
        let teachers = await Teacher.find({ subjects: { $in: subjectIds } });
        console.log(`Profesores de ${student.name} ${student.lastName}:`);
        if (teachers.length > 0) {
          teachers.forEach((teacher) => {
            console.log(`- Profesor: ${teacher.name} ${teacher.lastName}`);
          });
        } else {
          console.log('No se encontraron profesores para las asignaturas del alumno.');
        }
      } else {
        console.log('No se encontró al alumno.');
      }
    } catch (error) {
      console.error('Error al mostrar los profesores del alumno:', error);
    }
  };
  
  showStudentMarks("Juan");
  showStudentSubjects("Juan");
  showStudentTeachers("Pedro");
