export interface Project {
    id: number;
    name: string;
    description: string;
    tasks: Task[]; // Array<Task>
}
