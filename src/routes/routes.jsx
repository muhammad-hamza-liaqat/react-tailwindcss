import React from "react"
import { Route, Routes } from "react-router-dom"
import Profile from "../pages/Profile"

const MyRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Profile />} />
        </Routes>
    )
}



export default MyRoute