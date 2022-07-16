import React, { useState, useEffect } from "react"
import { PopupContextConsumer } from "../../context";
import InputField from "../InputField"
import SelectField from "../SelectField"
import CloseIcon from "../../images/close-icon.svg"
import "./index.css"

export default function Popup({ headline, description }) {
    const [fontOptions, setFontOptions] = useState([]);
    const [formState, setFormState] = useState({
        name: {
            value: "",
            valid: true
        },
        email: {
            value: "",
            valid: true
        },
        font: {
            value: "",
            valid: true
        },

    })
    const { setSubmitted } = PopupContextConsumer();
    const EMAIL_VALIDATION_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

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

    const handleFontChange = (newValue) => {
        const newFontObject = fontOptions.find((currFont) => currFont.family === newValue)
        handleFieldChange("font", newFontObject)
    }

    const handleFieldChange = (field, newValue) => {
        setFormState({ ...formState, [field]: { value: newValue, valid: true } })
    }

    const handleValidation = () => {
        const invalidFields = [];
        if (formState.name.value.length === 0) {
            invalidFields.push("name")
        }
        if (!EMAIL_VALIDATION_REGEX.test(formState.email.value)) {
            invalidFields.push("email")
        }
        if (!formState.font.value) {
            invalidFields.push("font")
        }

        if (invalidFields.length > 0) {
            const _formState = { ...formState }
            invalidFields.forEach(currField => {
                _formState[currField].valid = false;
            })
            setFormState({ ..._formState })
        } else {
            setSubmitted(true)
        }
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
                    value={formState.name.value}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    className="popup-input-field"
                    style={{ backgroundColor: "#E5E5E5", borderWidth: 0 }}
                    wrapperStyle={{ width: "50%" }}
                    error={!formState.name.valid}
                    errorMessage="Invalid name"
                />
                <InputField
                    placeholder="Email"
                    className="popup-input-field"
                    value={formState.email.value}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    style={{ backgroundColor: "#E5E5E5", borderWidth: 0 }}
                    wrapperStyle={{ width: "50%" }}
                    error={!formState.email.valid}
                    errorMessage="Invalid email"
                />

                <SelectField
                    options={fontOptions}
                    value={formState.font.value}
                    handleChange={handleFontChange}
                    error={!formState.font.valid}
                    errorMessage="Invalid selection"
                />

                <button className="submit-button" onClick={() => handleValidation()}>
                    GET MY 30% OFF
                </button>
            </div>
        </div>
    )
}