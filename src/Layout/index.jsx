import React from "react";
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <Main />
        </div>
    )
}