export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

export type PropsTypes = {
    title: string;
    tasks: TaskType[];
};

export type ButtonProps = {
    label: string;
};
