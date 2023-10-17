import './inputfield.scss';

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField ({ label, type, value, onChange }: InputFieldProps) {
    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input 
            className="input-field"
            type={type} 
            value={value} 
            onChange={onChange} />
        </div>
    );
};

export default InputField;