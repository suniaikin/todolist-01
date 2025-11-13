import { ButtonProps } from "./Types";

export const Button = ({ label }: ButtonProps) => {
    return <button onClick={() => alert("Hey")}>{label}</button>;
};
