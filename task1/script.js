
        function validateForm(event) {
            event.preventDefault();

            let fname = document.getElementById("fname").value.trim();
            let lname = document.getElementById("lname").value.trim();
            let email = document.getElementById("email").value.trim();
            let pass = document.getElementById("pass").value.trim();
           

            if(fname==="" || lname===""){
                alert("First name and Last name cannot be empty");
                return false;
            }

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                
            if(!emailPattern.test(email)){
                alert("Email must be valid");
                return false;
            }

            let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{6,}$/;
            if(!passPattern.test(pass)){
                alert("Enter valid Password");
                return false;
            }

            
            alert("Form submitted successfully");
            document.getElementById("myForm").reset();
            return true;
        }