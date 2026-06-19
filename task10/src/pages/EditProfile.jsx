import React, { useEffect } from "react";
import {Card,Form,Input,Button,message} from "antd";
import {useForm,Controller} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import { updateUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function EditProfile() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(
    (state) => state.user.loggedInUser
  );

  const {
    control,
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {

    if (loggedInUser) {

      reset(loggedInUser)
    }

  }, [loggedInUser, reset]);

  const onSubmit = (data) => {

    dispatch(
      updateUser({
        ...data,
        oldEmail:
          loggedInUser.email,
      })
    );

    message.success("Profile Updated Successfully")
    navigate("/table")
  };

  return (
    <Card
      title="Edit Profile"
      style={{
        width: 500,
        margin: "30px auto",
      }}
    >
      <Form
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
      >

        <Form.Item label="First Name">
          <Controller
            name="fname"
            control={control}
            render={({ field }) => (
              <Input {...field} />
            )}
          />
        </Form.Item>

        <Form.Item label="Last Name">
          <Controller
            name="lname"
            control={control}
            render={({ field }) => (
              <Input {...field} />
            )}
          />
        </Form.Item>

        <Form.Item label="Email">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} />
            )}
          />
        </Form.Item>

        <Form.Item label="Password">
          <Controller
            name="pass"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
              />
            )}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
        >
          Save Changes
        </Button>

      </Form>
    </Card>
  );
}

export default EditProfile;