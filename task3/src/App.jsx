import React, { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";

class App extends Component {

  constructor() {
    super();

    this.state = {
      formData: {
        fname: "",
        lname: "",
        email: "",
        pass: "",
        dob: "",
      },

      error: {},
    };
  }

    validateField = (name, value) => {

    let errors = "";
 
    
    if (name === "fname" || name === "lname") {
      if (value.trim() === "") {
        errors = "This field is required";
      }
    }

    if (name === "email") {

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value)) {
        errors = "Please enter valid mail id";
      }
    }

    
    if (name === "pass") {

      const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{6,}$/;

      if (!passPattern.test(value)) {
        errors = "Please enter strong password";
      }
    }

    
    if (name === "dob") {
      if (!value) {
        errors = "Date of Birth is required";
      }
    }

  
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        [name]: errors,
      },
    }));
  };

  
  handleChange = (event) => {

    const { name, value } = event.target;

    this.setState(
      (prevState) => ({
        formData: {
          ...prevState.formData,
          [name]: value,
        },
      }),

      () => {
        this.validateField(name, value);
      }
    );
  };


  handleBlur = (event) => {

    const { name, value } = event.target;

    this.validateField(name, value);
  };

 
  handleSubmit = (e) => {

    e.preventDefault();

    const { formData } = this.state;

    let newErrors = {};

    
    if (!formData.fname.trim()) {
      newErrors.fname = "First name is required";
    }

    
    if (!formData.lname.trim()) {
      newErrors.lname = "Last name is required";
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter valid mail id";
    }

    
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{6,}$/;

    if (!formData.pass.trim()) {
      newErrors.pass = "Password is required";
    }

    else if (!passPattern.test(formData.pass)) {
      newErrors.pass = "Password must be valid";
    }

    
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

   
    this.setState({
      error: newErrors,
    });

    
    if (Object.keys(newErrors).length > 0) {
      return;
    }

   
    alert("Form Submitted Successfully");

    
    this.setState({
      formData: {
        fname: "",
        lname: "",
        email: "",
        pass: "",
        dob: "",
      },

      error: {},
    });
  };

  render() {

    const { formData, error } = this.state;

    return (

      <div className="container">

        <h1>Form Validation</h1>

        <form onSubmit={this.handleSubmit}>

          <InputField
            label="Firstname"
            type="text"
            name="fname"
            value={formData.fname}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder="Enter your Firstname"
            error={error.fname}
          />

          <InputField
            label="Lastname"
            type="text"
            name="lname"
            value={formData.lname}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder="Enter your Lastname"
            error={error.lname}
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder="Enter your Email"
            error={error.email}
          />

          <InputField
            label="Password"
            type="password"
            name="pass"
            value={formData.pass}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder="Enter your Password"
            error={error.pass}
          />

          <InputField
            label="Date Of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={error.dob}
          />

          <br />

          <button type="submit">
            Submit
          </button>

        </form>

      </div>
    );
  }
}

export default App;

