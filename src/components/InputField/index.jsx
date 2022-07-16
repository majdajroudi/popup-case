import React from "react"
import ErrorIcon from "../../images/error-icon.svg"
import "./index.css"

export default function InputField({
    value,
    label,
    onChange,
    type = "text",
    multiline = false,
    placeholder,
    style = {},
    wrapperStyle = {},
    className = "",
    maxlength = "5000",
    error = false,
    errorMessage = "Invalid input"
}) {

    const inputProps = {
        type: type,
        id: "input-field",
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        style: { ...style },
        maxlength: maxlength,
        className: className
    }

    return (
        <div className="input-wrapper" style={{ ...wrapperStyle }}>
            {label && <label className="input-label" for="input-field">{label}</label>}
            {
                multiline ?
                    <textarea {...inputProps} /> :
                    <input {...inputProps} />
            }
            {
                error &&
                <p className="error-message">
                    <span><img src={ErrorIcon} alt="error-icon" /> {errorMessage}</span>
                </p>
            }
        </div>
    )
}