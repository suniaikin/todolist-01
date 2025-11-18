type ButtonProps = {
    label: string;
    onClickHandler?: () => void;
};

export const Button = ({ label, onClickHandler }: ButtonProps) => {
    return <button onClick={onClickHandler}>{label}</button>;
};






