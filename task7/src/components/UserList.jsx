import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers =  () => {
    
      axios.get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {setUsers(response.data)})

      .catch((error) => setError("Failed to Fetch Data"))
    
  };

  

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>Name : {user.name}</h3>
          <p>Email : {user.email}</p>
          <p>Phone : {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;



