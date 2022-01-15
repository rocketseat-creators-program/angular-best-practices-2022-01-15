import { Student } from "../students/student";

export interface Course {
    id: number;
    name: string;
    description: string;
    students: Student[];
}
