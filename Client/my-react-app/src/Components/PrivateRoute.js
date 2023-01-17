import React from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute() {
    const navigate = useNavigate();
    if (localStorage.getItem("token")) {
        return true
    }
    else {
        return false
    }

}

export default PrivateRoute