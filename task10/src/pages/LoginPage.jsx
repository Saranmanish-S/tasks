import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/userSlice";
import {withNavigation} from "../utils/withNavigation";
import {Button, Input, Card, Form} from "antd"
import {useForm, Controller} from "react-hook-form"

function LoginPage(props) {

    const {control,watch,handleSubmit} = useForm()
    const email = watch("email", "")
    const[error, setError] = useState("")

    const onSubmit = (data) => {
        
        const foundUser = props.users.find(
            (user) =>
                user &&
                user.email === data.email &&
                user.pass === data.pass
        )

        if(foundUser){
            setError("")
            props.loginUser(foundUser)
            const from = props.location?.state?.from || "/table"
            props.navigate(from)
        }
        else{
            setError(
                "Invalid Email or Password"
            )
        }
    }

    
        return (
            <>
                <Card
                    title="User Registration"
                    style={{
                    width: 600,
                    margin: "30px auto"
                    }}
                >

                <Form onFinish = {handleSubmit(onSubmit)}>
                
                <Form.Item label="Email">
                <Controller
                    name="email"
                    control={control}
                    render={({field}) => (
                        <Input {...field} />
                     )}
                />
                </Form.Item>

                
                {email && (
                    <Form.Item label="Pass">
                    <Controller
                        name="pass"
                        control={control}
                        render={({field}) => (
                            <Input.Password {...field} />
                         )}
                    />
                    </Form.Item>
                )}
                

                <Button type="primary" htmlType="submit" block>Login</Button>
                <p style={{ color: "red" }}>{error}</p>

                </Form>
                </Card>
                </>
                
        )
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