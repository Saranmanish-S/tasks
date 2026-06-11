const InputField = ({
    label,
    type,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    error
}) => {
    return (
        <div>
            <label>{label} :</label>

            <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            />
            {error && <p className="errors">{error}</p>}
            
        </div>
        
    )
}
export default InputField;