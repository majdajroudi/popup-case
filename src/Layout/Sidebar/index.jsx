import React from "react";
import InputField from "../../components/InputField";
import { PopupContextConsumer } from "../../context";
import "./index.css"

export default function Sidebar() {
    const { headline,
        description,
        successMessage,
        setHeadline,
        setDescription,
        setSuccessMessage } = PopupContextConsumer();

    return (
        <div className="sidebar">
            <h4 className="sidebar-header">General Settings</h4>

            <InputField
                label="Headline"
                placeholder="Headline"
                value={headline}
                maxLength="17"
                onChange={(e) => setHeadline(e.target.value)}
            />

            <InputField
                label="Description"
                placeholder="Description"
                value={description}
                maxLength="80"
                onChange={(e) => setDescription(e.target.value)}
                multiline
            />

            <InputField
                label="Success message"
                placeholder="Success message"
                value={successMessage}
                maxLength="50"
                onChange={(e) => setSuccessMessage(e.target.value)}
            />
        </div>
    )
}