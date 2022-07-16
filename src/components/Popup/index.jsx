import React, { useState, useEffect } from "react"
import { PopupContextConsumer } from "../../context";
import InputField from "../InputField"
import SelectField from "../SelectField"
import CloseIcon from "../../images/close-icon.svg"
import "./index.css"
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

export default function Popup({ headline, description }) {
    const [fontOptions, setFontOptions] = useState([]);
    const [selectedFont, setSelectedFont] = useState("")
    const { setSubmitted } = PopupContextConsumer();

    useEffect(() => {
        fetch("https://apiv2.popupsmart.com/api/googlefont")
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((currFont) => currFont.category !== "monospace");
                filteredData.sort(function (a, b) {
                    const textA = a.family.toUpperCase();
                    const textB = b.family.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
                setFontOptions(filteredData)
            })
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
            <button className="close-button">
                <img className="close-icon" src={CloseIcon} alt="close-icon" />
            </button>
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
                    placeholder="Your name"
                    className="popup-input-field"
                    style={{ backgroundColor: "#E5E5E5", borderWidth: 0 }}
                    wrapperStyle={{ width: "50%" }}
                    error={false}
                    errorMessage="Invalid name"
                />
                <InputField
                    placeholder="Email"
                    className="popup-input-field"
                    style={{ backgroundColor: "#E5E5E5", borderWidth: 0 }}
                    wrapperStyle={{ width: "50%" }}
                    error={false}
                    errorMessage="Invalid name"
                />

                <SelectField
                    options={fontOptions}
                    value={selectedFont}
                    handleChange={handleChange}
                    error={false}
                    errorMessage="Invalid name"
                />

                <button className="submit-button" onClick={() => setSubmitted(true)}>
                    GET MY 30% OFF
                </button>
            </div>
        </div>
    )
}