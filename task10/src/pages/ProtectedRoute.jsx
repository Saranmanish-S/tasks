import React from "react"
import {connect} from "react-redux"
import {Navigate,Outlet,useLocation} from "react-router-dom"

const ProtectedRoute = ({loggedInUser}) => {
    const location = useLocation()
    if(!loggedInUser) {
        return <Navigate to="/login" 
        state={{ from : location.pathname}}
        replace />
    }
    return <Outlet />
}

const mapStateToProps = (state) => ({
    loggedInUser : state.user.loggedInUser
})

export default connect(mapStateToProps)(ProtectedRoute)