import StudentService from "./StudentService";
import Student from "../model/Student";
import StudentRepository from "../dao/StudentRepository";
import StudentDto from "../dto/StudentDto";

export default class StudentServiceImpl implements StudentService {
    private studentRepository = new StudentRepository<Student>()

    addStudent(student: Student): boolean {
        const students = this.studentRepository.readAll();
        if (students.filter(s => {return s.id === student.id}).length > 0) {
            throw new Error('Student already exist');
        }
        students.push(student);
        return this.studentRepository.writeAll(students);
    }
}