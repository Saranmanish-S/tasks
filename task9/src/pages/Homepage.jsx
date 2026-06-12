import {Link} from "react-router-dom"
import React, { Component } from "react";
import {Button} from "antd"

class Homepage extends React.Component {

render() {
    return(
        <div>

        <h1>Home Page</h1>
        <Link to={"/form"}>
        <Button type="primary">FormPage</Button>
        </Link>

        <Link to={"/login"}>
          <Button type="primary">View</Button>
          </Link>

        </div>
    )
}
    
}

export default Homepage