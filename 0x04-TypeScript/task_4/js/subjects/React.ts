// React.ts

namespace Subjects {
    // Extend the Teacher interface using declaration merging
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    // Create the React class
    export class React {
        constructor(private teacher: Teacher | undefined) {}

        // Method to get the requirements for React
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        // Method to get the available teacher for React
        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact !== undefined) {
                if (this.teacher.experienceTeachingReact > 0) {
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
