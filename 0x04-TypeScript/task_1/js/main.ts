export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

export interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}

export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

export interface StudentClassInterface {
    readonly firstName: string;
    readonly lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}
