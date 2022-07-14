import React from "react"
import "./index.css"

export default function InputField({ value, label, onChange, type = "text", multiline = false, placeholder }) {

    return (
        <div className="input-wrapper">
            <label className="input-label" for="input-field">{label}</label>
            {
                multiline ?
                    <textarea
                        type={type}
                        id="input-field"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    /> :
                    <input
                        type={type}
                        id="input-field"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
            }

        </div>
    )
}