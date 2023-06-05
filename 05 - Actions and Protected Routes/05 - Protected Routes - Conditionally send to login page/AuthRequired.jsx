import React from "react"
import { Outlet } from "react-router-dom"

export default function AuthRequired() {
    // Fake auth
    // If the user is not logged in
        // Redirect them to the /login route
    // Otherwise:
    if(Math.random()>.5)
        return <Outlet />
}