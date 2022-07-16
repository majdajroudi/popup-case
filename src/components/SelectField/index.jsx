import React from "react";
import "./index.css"

export default function SelectField() {
    return (
        <div className="select-field-wrapper">
            <select name="dynamic" className="select-field">
                <option selected disabled>Choose a book format</option>
                <option value="pdf">PDF</option>
                <option value="txt">TXT</option>
                <option value="epub">ePub</option>
                <option value="fb2">fb2</option>

            </select>
        </div>
    )
}