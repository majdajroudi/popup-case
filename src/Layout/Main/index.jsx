import React from "react"
import "./index.css"
import Popup from "../../components/Popup"
import { PopupContextConsumer } from "../../context/index"

export default function Main() {
    const { headline, description } = PopupContextConsumer();

    return (
        <div className="main">
            <Popup headline={headline} description={description} />
        </div>
    )
}