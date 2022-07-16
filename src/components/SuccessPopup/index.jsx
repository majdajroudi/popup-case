import React from "react"
import { PopupContextConsumer } from "../../context"
import SuccessIcon from "../../images/success-icon.svg"
import "./index.css"

export default function SuccessPopup() {
    const { successMessage } = PopupContextConsumer()

    return (
        <div className="popup success-popup">
            <img className="success-icon" src={SuccessIcon} alt="success-icon" />
            <p className="success-message">{successMessage ? successMessage : "Success"}</p>
        </div>
    )
}