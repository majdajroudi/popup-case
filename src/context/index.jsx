import { createContext, useContext, useState } from "react"

const PopupContext = createContext(undefined);

export default function PopupContextProvider({ children }) {
    const [submitted, setSubmitted] = useState(false);
    const [headline, setHeadline] = useState(localStorage.getItem("headline") || "");
    const [description, setDescription] = useState(localStorage.getItem("description") || "");
    const [successMessage, setSuccessMessage] = useState(localStorage.getItem("successMessage") || "")
    const [formState, setFormState] = useState({
        name: {
            value: localStorage.getItem("name") || "",
            valid: true
        },
        email: {
            value: localStorage.getItem("email") || "",
            valid: true
        },
        font: {
            value: JSON.parse(localStorage.getItem("font")) || "",
            valid: true
        },
    })

    const handleSubmitForm = () => {
        localStorage.setItem("headline", headline)
        localStorage.setItem("description", description)
        localStorage.setItem("successMessage", successMessage)
        localStorage.setItem("name", formState.name.value)
        localStorage.setItem("email", formState.email.value)
        localStorage.setItem("font", JSON.stringify(formState.font.value))

        setSubmitted(true)
    }

    const value = {
        submitted,
        headline,
        description,
        successMessage,
        setSubmitted,
        setHeadline,
        setDescription,
        setSuccessMessage,
        formState,
        setFormState,
        handleSubmitForm
    }

    return (
        <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
    )
}

export const PopupContextConsumer = () => {
    const context = useContext(PopupContext);

    return context;
}

