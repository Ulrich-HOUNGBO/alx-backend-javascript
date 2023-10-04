import Teacher = Subjects.Teacher;
import Subject = Subjects.Subject;
import  Cpp = Subjects.Cpp;
import  React  = Subjects.React;

// Create and export constants for subjects
export const cpp = new Cpp(undefined); // No teacher initially
export const java = new Subjects.Subject(); // No teacher initially
export const react = new Subjects.React(undefined); // No teacher initially

// Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// For Cpp subject
console.log('Cpp:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
