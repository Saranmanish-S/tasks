import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/userSlice";
import {withNavigation} from "../utils/withNavigation";
import {Button, Input, Card } from "antd"
class LoginPage extends Component {
    state = { 
        email: "",
        pass: "",
        error: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {users} = this.props
        
        const foundUser = users.find(
            (user) =>
                user &&
                user.email === this.state.email &&
                user.pass === this.state.pass
        )

        if(foundUser){
            this.setState({error: ""})
            this.props.loginUser(foundUser)
            const from = this.props.location?.state?.from || "/table"
            this.props.navigate(from)
        }
        else{
            this.setState({
                error: "Invalid Email or Password"
            })
        }
    }

    render() {
        return (
            <Card
                title="Login Page"
                style={{
                    width: 350,
                    margin: "50px auto"
                }}
                >

                <form onSubmit={this.handleSubmit}>
                <Input
                    placeholder="Enter your email"
                    style={{ marginBottom: "20px" }}
                    onChange={(e)=>this.setState({email: e.target.value})}
                />
                <Input.Password
                    placeholder="Enter your password"
                    style={{ marginBottom: "20px" }}
                    onChange={(e)=>this.setState({pass: e.target.value})}
                />

                <Button type="primary" htmlType="submit" block>Login</Button>
                <p style={{ color: "red" }}>{this.state.error}</p>
                </form>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.user.users,
  });
  
  const mapDispatchToProps = {
    loginUser,
  };
  
  export default withNavigation(
    connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
)