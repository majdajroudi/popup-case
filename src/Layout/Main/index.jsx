import React from "react"
import "./index.css"
import Popup from "../../components/Popup"
import { PopupContextConsumer } from "../../context/index"
import SuccessPopup from "../../components/SuccessPopup";

export default function Main() {
    const { headline, description, submitted } = PopupContextConsumer();

    return (
        <div className="main">
            {
                submitted ?
                    <SuccessPopup /> :
                    <Popup headline={headline} description={description} />

            }
        </div>
    )
}