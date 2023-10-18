import './inputfield.scss';

interface InputFieldProps {
    label: string;
    type: string;
    value?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField ({ label, type, onChange, disabled = false }: InputFieldProps) {


    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input 
            className="input-field"
            type={type} 
            onChange={onChange}
            disabled={disabled} />
        </div>
    );
};

export default InputField;