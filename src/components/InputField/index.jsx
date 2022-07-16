import React from "react"
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
    maxlength = "5000"
}) {
    console.log("max", maxlength)

    return (
        <div className="input-wrapper" style={{ ...wrapperStyle }}>
            {label && <label className="input-label" for="input-field">{label}</label>}
            {
                multiline ?
                    <textarea
                        type={type}
                        id="input-field"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        style={{ ...style }}
                        maxlength={maxlength}
                        className={className}
                    /> :
                    <input
                        type={type}
                        id="input-field"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        style={{ ...style }}
                        className={className}
                        maxlength={maxlength}
                    />
            }

        </div>
    )
}