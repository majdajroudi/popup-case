import React from "react";
import "./index.css"

export default function SelectField({ options, value, handleChange }) {
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
                                <option selected disabled>Select font</option>
                                {options.map((currOption) => <option value={currOption.family}>{currOption.family}</option>)}
                            </>
                        ) :
                        <option selected disabled>(No data)</option>
                }

            </select>
        </div>
    )
}