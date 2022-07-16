import React, { useState, useEffect } from "react"
import { PopupContextConsumer } from "../../context";
import InputField from "../InputField"
import SelectField from "../SelectField"
import "./index.css"

export default function Popup({ headline, description }) {
    const [fontOptions, setFontOptions] = useState([]);
    const [selectedFont, setSelectedFont] = useState("")
    const { setSubmitted } = PopupContextConsumer();

    useEffect(() => {
        fetch("https://apiv2.popupsmart.com/api/googlefont")
            .then((response) => response.json())
            .then((data) => setFontOptions(data))
    }, [])

    useEffect(() => {
        console.log("selected", selectedFont)
    }, [selectedFont])

    const handleChange = (newValue) => {
        const newFontObject = fontOptions.find((currFont) => currFont.family === newValue)
        setSelectedFont(newFontObject)
    }

    return (
        <div className="popup">
            <div className="popup-header">
                <h1
                    className="popup-headliner"
                    style={{
                        color: headline ? "black" : "grey",
                    }}>
                    {headline ? headline : "(Add a headline)"}
                </h1>
                <p
                    className="popup-description"
                    style={{
                        color: description ? "black" : "grey"
                    }}>
                    {description ? description : "(Add a description)"}
                </p>
            </div>
            <div className="popup-body">
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

                <SelectField options={fontOptions} value={selectedFont} handleChange={handleChange} />

                <button className="submit-button" onClick={() => setSubmitted(true)}>
                    GET MY 30% OFF
                </button>
            </div>
        </div>
    )
}