import React from "react"
import {Input} from "antd"

function InputField({
    label,
    type,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    error
}) {
    return (
        <div className="input-group">
            <label>{label} :</label>

            <Input 
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