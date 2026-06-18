import React from "react";
import "../App.css";
import{addUser} from "../redux/userSlice";
import {Link} from "react-router-dom"
import {Button, Card, Form, Input, DatePicker, Space, message} from "antd"
import {useForm, Controller} from "react-hook-form"
import {useDispatch} from "react-redux"


function FormPage() {
  const dispatch = useDispatch()
  const{control,handleSubmit,reset,watch} = useForm({
    mode: "onChange"
  })
  const password = watch("pass")
  
  const onSubmit = (data) => {
    const userData = {
      ...data,
      dob: data.dob.format("YYYY-MM-DD")
    }
    dispatch(addUser(userData))

    message.success("Form Submitted Successfully")

    reset();
  }

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
                onFinish={handleSubmit(onSubmit)}            
            >

          <Form.Item label="First name">
            <Controller
            name="fname"
            control={control}
            rules={
              {
                required: "First name required",

                minLength: {
                    value: 3,
                    message: "Firstname must be more than 3 Characters"
                },

                maxLength: {
                  value: 20,
                  message: "Firstname must be less than 20 Characters"
                }
              }
            }  

            render={({field,fieldState}) => (
              <>
              <Input 
                {...field}
                placeholder="Enter First Name"
              />
              <p style={{color: "red"}}>
              {fieldState.error?.message}
              </p>
              </>
            )}

          />
          </Form.Item>


          <Form.Item label="Last Name">
            <Controller
            name="lname"
            control={control}
            rules={
              {
                required: "Last name required"
              }
            }  

            render={({field,fieldState}) => (
              <>
              <Input 
                {...field}
                placeholder="Enter Last Name"
              />
              <p style={{color: "red"}}>
              {fieldState.error?.message}
              </p>
              </>
            )}

          />
          </Form.Item>


          <Form.Item label="Email">
            <Controller
            name="email"
            control={control}
            rules={{
              required: "Email required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter valid email"
              }
            }}

            render={({field,fieldState}) => (
              <>
              <Input 
                {...field}
                placeholder="Enter Email id"
              />
              <p style={{color: "red"}}>
              {fieldState.error?.message}
              </p>
              </>
            )}
          />
          </Form.Item>

          <Form.Item label="Password">
            <Controller
            control={control}
            name="pass"
            rules={
              {
                required: true,
                pattern:{

                 value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{6,}$/,
                message:
                  "Password must contain uppercase, lowercase, number and special character",
              },
            }}
            render={({field,fieldState}) => (
              <>
              <Input.Password 
                {...field}
                placeholder="Enter Password"
              />
              <p style={{color: "red"}}>
              {fieldState.error?.message}
              </p>
              </>
            )}

          />
          </Form.Item>

          <Form.Item label="Confirm Password">
            <Controller
            control={control}
            name="confirmPass"
            rules={
              {
                required: true,
                validate: (value) => value === password || "Password doesnot Match"
              }}
            render={({field,fieldState}) => (
              <>
              <Input.Password 
                {...field}
                placeholder="Enter Password"
              />
              <p style={{color: "red"}}>
              {fieldState.error?.message}
              </p>
              </>
            )}

          />
          </Form.Item>


          <Form.Item label="Date of Birth">
            <Controller
            name="dob"
            control={control}
            rules={[
              {
                required: true,
                message: "Date Of Birth is required",
              },
            ]}
            render={({ field, fieldState }) => (
              <>
                <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    style={{ width: "100%" }}
                />
                <p style={{ color: "red" }}>
                  {fieldState.error?.message}
                </p>
              </>
            )}
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
export default FormPage