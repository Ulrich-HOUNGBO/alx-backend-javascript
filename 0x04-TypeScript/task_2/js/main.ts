export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }

    return new Director();
}

export const isDirector = (employee: Director | Teacher): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

export const executeWork = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }

    return employee.workTeacherTasks();
}

const Subjects = ['Math', 'History'];

export const teachClass = (todayClass: string): string => {
    if (todayClass === Subjects[0]) {
        return 'Teaching Math';
    } else if (todayClass === Subjects[1]) {
        return 'Teaching History';
    }
}


