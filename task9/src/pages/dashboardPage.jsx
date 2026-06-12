import React from "react"
import {Link} from  "react-router-dom"
import {Button} from "antd"

function DashboardPage() {
    return  (
        <div>
            <h1>Dashboard Page</h1>

            <h3>Welcome User</h3>

            <Link to="/table">
            <Button type="primary">UserDetails</Button>
            </Link>

            <Link to="/">
            <Button type="primary">Home Page</Button>
            </Link>
        </div>
    )
}

export default DashboardPage