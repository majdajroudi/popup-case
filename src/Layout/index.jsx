import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main/index.jsx";
import "./index.css"

export default function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <Main />
        </div>
    )
}