import { createContext, useContext, useState } from "react"

const PopupContext = createContext(undefined);

export default function PopupContextProvider({ children }) {
    const [submitted, setSubmitted] = useState(false);
    const [headline, setHeadline] = useState("");
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState("")

    const value = {
        submitted,
        headline,
        description,
        successMessage,
        setSubmitted,
        setHeadline,
        setDescription,
        setSuccessMessage
    }

    return (
        <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
    )
}

export const PopupContextConsumer = () => {
    const context = useContext(PopupContext);

    return context;
}

