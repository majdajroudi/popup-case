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
    maxLength = "5000",
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
        maxLength: maxLength,
        className: className
    }

    return (
        <div className="input-wrapper" style={{ ...wrapperStyle }}>
            {label && <label className="input-label" htmlFor="input-field">{label}</label>}
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