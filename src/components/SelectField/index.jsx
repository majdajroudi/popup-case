import React from "react";
import ErrorIcon from "../../images/error-icon.svg"
import "./index.css"

export default function SelectField({ options, value, handleChange, error = false, errorMessage = "Invalid selection" }) {
    return (
        <div className="select-field-wrapper">
            <select
                placeholder="Select Font"
                disabled={!options.length}
                value={value?.family}
                className="select-field"
                onChange={(e) => handleChange(e.target.value)}>
                {
                    options.length ?
                        (
                            <>
                                <option selected={!value} disabled>Select font</option>
                                {options.map((currOption, index) => <option key={index} value={currOption.family}>{currOption.family}</option>)}
                            </>
                        ) :
                        <option selected disabled>(No data)</option>
                }

            </select>
            {
                error &&
                <p className="error-message">
                    <span><img src={ErrorIcon} alt="error-icon" /> {errorMessage}</span>
                </p>
            }
        </div>
    )
}