import { useState } from 'react'
import './App.css'
import InputField from './components/InputField';

function App() {
  const [formData, setFormData] = useState({
    fname : "",
    lname : "",
    email : "",
    pass : "",
    dob : "",
  })

  const [error,setError] = useState({})

  const validateField = (name , value) => {
    let errors = "";

    if(name === "fname" || name === "lname"){
      if(value.trim() === ""){
        errors = "This field is required"
      } 
    }

    if(name === "email"){
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(value)){
        errors = "Please enter valid mail id"
      }
    }

    if(name === "pass"){
      const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{6,}$/;
      if(!passPattern.test(value)){
        errors = "Please enter a strong password"
      }
    }

    setError((prev) =>({
      ...prev,
      [name] : errors
    }))
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [event.target.name] : event.target.value, 
    })
    validateField(name,value)
  }

  const handleBlur = (event) => {
    const{name , value} = event.target;
    validateField(name,value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if(!formData.fname.trim()){
      newErrors.fname = "First name is required"
    }
    
    if(!formData.lname.trim()){
      newErrors.lname = "last name is required"
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    if(!formData.email.trim()){
      newErrors.email = "Email is required"
    }

    if(!emailPattern.test(formData.email)){
      newErrors.email = "Please enter valid mail id"
    }

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{6,}$/;
    if(!formData.pass.trim()){
      newErrors.pass = "Password is required"
    }

    if(!passPattern.test(formData.pass)){
      newErrors.pass = "Password must be valid"
    }

  
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

  
    setError(newErrors);

  
    if (Object.keys(newErrors).length > 0) {
      return;
    }


    alert("Form Submitted Succesfully");

    setFormData({
    fname : "",
    lname : "",
    email : "",
    pass : "",
    dob : "",
    })
    setError({})
  }
  return (
    <div className='container'>
      <h1>Form Validation</h1>

      <form onSubmit={handleSubmit}>
        <InputField
        label="Firstname"
        type="text"
        name='fname'
        value={formData.fname}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your Firstname'
        error = {error.fname}
        />
      
        
      <InputField
        label="Lastname"
        type="text"
        name='lname'
        value={formData.lname}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your Lastname' 
        error = {error.lname}
        />
        
      
      
      <InputField
        label="Email"
        type="email"
        name='email'
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your email' 
        error = {error.email}
        />
        


      <InputField
        label="Password"
        type="password"
        name='pass'
        value={formData.pass}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your Password'
        error = {error.pass} 
        />


        <InputField
        label="Date Of Birth"
        type="date"
        name='dob'
        value={formData.dob}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your Date of Birth' 
        required
        />
        
        <br />
      <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default App
