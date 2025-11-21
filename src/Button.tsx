type ButtonProps = {
    label: string;
    onClickHandler?: () => void;
    disabled?: boolean
};

export const Button = ({ label, onClickHandler, disabled}: ButtonProps) => {
    return (
        <button onClick={onClickHandler} disabled={disabled}>
            {label}
        </button>
    );
};






