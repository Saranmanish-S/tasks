import React from "react"
import {connect} from  "react-redux"
import {Link} from "react-router-dom"
import {Button} from "antd"
import {Table} from "antd"

class UserTable extends React.Component {
    render() {
        const {loggedInUser} = this.props 

                const columns = [
                    {
                        title: "First Name",
                        dataIndex: "fname"
                    },
                    {
                        title : "Last name",
                        dataIndex: "lname"
                    },
                    {
                        title : "Email",
                        dataIndex: "email"
                    },
                    {
                        title : "Password",
                        dataIndex: "pass"
                    },
                    {
                        title : "Password",
                        dataIndex: "pass"
                    }
                    
                ]

                const data = loggedInUser ? [loggedInUser] : []

                return(
                    <div>
                        <h1>User Details</h1> 

                        <Table 
                            columns={columns}
                            dataSource={data}
                            rowKey="email"
                        />
                        <Link to={"/"}>
                        <Button type="primary">Homepage</Button>
                        </Link>

                     
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedInUser: state.user.loggedInUser,
  });
  
  export default connect(mapStateToProps)(UserTable);