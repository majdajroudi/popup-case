import React from "react"
import InputField from "../InputField"
import SelectField from "../SelectField"
import "./index.css"

export default function Popup({ headline, description }) {
    return (
        <div className="popup">
            <h1 className="popup-headliner" style={{ color: headline ? "black" : "grey" }}>
                {headline ? headline : "(Add a headline)"}
            </h1>
            <p className="popup-description" style={{ color: description ? "black" : "grey" }}>
                {description ? description : "(Add a description)"}
            </p>

            <InputField
                // label="Your name"
                placeholder="Your name"
                className="popup-input-field"
                style={{ backgroundColor: "#E5E5E5", borderWidth: 0 }}
                wrapperStyle={{ width: "50%" }}
            />
            <InputField
                // label="Your name"
                placeholder="Email"
                className="popup-input-field"
                style={{ backgroundColor: "#E5E5E5", borderWidth: 0 }}
                wrapperStyle={{ width: "50%" }}
            />

            <SelectField />
        </div>
    )
}