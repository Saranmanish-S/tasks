import React, { Component } from "react";
import "../App.css";
import InputField from "../components/InputField";
import {connect} from "react-redux";
import{addUser} from "../redux/userSlice";
import {Link} from "react-router-dom"
import {Button, Card, Form, Input, DatePicker, Space, message} from "antd"

class Formpage extends Component {

    onFinish = (values) => {
      const userData = {
        fname: values.fname,
        lname: values.lname,
        email: values.email,
        pass: values.pass,
        dob: values.dob.format("YYYY-MM-DD"),
      };
      this.props.addUser(userData);

      message.success("Form Submitted Successfully");

    }

  render() {

    return (

          <Card
            title="User Registration"
            style={{
              width: 600,
              margin: "30px auto"
            }}
          >

            <Form
                layout="vertical"
                onFinish={this.onFinish}            
            >

          <Form.Item
            label="Firstname"
            name="fname"
            rules={[
              {
                required: true,
                message: "First name required"
              }
            ]}  
          >
          <Input placeholder="Enter First Name" />
          </Form.Item>


          <Form.Item
            label="Lastname"
            name="lname"
            rules={[
              {
                required: true,
                message: "Last name required"
              }
            ]}  
          >
          <Input placeholder="Enter Last Name" />
          </Form.Item>


          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "email required"
              },
              {
                type: "email",
                message: "Enter valid email",
              }
            ]}  
          >
          <Input placeholder="Enter Email id" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="pass"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{6,}$/,
                message:
                  "Password must contain uppercase, lowercase, number and special character",
              },
            ]}
          >
          <Input.Password placeholder="Enter Password" />
          </Form.Item>

          <Form.Item
            label="Date Of Birth"
            name="dob"
            rules={[
              {
                required: true,
                message: "Date Of Birth is required",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>

              <Link to="/login">
                <Button type="default">
                  View
                </Button>
              </Link>
            </Space>
          </Form.Item>

        </Form>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  addUser,
};

export default connect(
  null,
  mapDispatchToProps
)(Formpage);