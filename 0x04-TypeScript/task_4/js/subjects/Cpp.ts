namespace Subjects {
    // Extend the Teacher interface using declaration merging
    export interface Teacher {
        experienceTeachingC?: number;
    }

    // Create the Cpp class extending from Subject
    export class Cpp extends Subject {

        // Method to get the requirements for C++
        getRequirements(): string {
            return "Here is the list of requirements for C++";
        }

        // Method to get the available teacher for C++
        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingC !== undefined) {
                if (this.teacher.experienceTeachingC > 0) {
                    return `Available Teacher: ${this.teacher.firstName}`;
                } else {
                    return "No available teacher";
                }
            } else {
                return "No available teacher";
            }
        }
    }
}
