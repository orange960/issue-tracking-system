import React, {useState} from "react";
import Navbar from "../components/Navbar";
import SearchUsers from "../components/SearchUsers";
import {Button} from "antd";
import data from "../helper/UserList.json"
import "../Styles/Users.css"
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Reportspage from "./Reportspage";


function Userspage() {
    const [users, setUsers] = useState(data);
    return(<div className="users">
        <div className="Navbar"> <Navbar></Navbar> </div>
        <h1 className="titles">Users</h1>
        <div className="searchUsers"><SearchUsers></SearchUsers></div>

        <div className="users">
            <table className="userstable" border="1px">
                <thead>
                <tr>
                    <th scope="col">Person ID</th>
                    <th scope="col">Person Name</th>
                    <th scope="col">Person Email</th>
                    <th scope="col">Person Role</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Assigned Project</th>
                    <th scope="col">Created on</th>
                    <th scope="col">Created by</th>
                    <th scope="col">Modified on</th>
                    <th scope="col">Modified by</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user)=>(
                        <tr> <td>{user.person_id}</td>
                            <td>{user.person_name}</td>
                            <td>{user.person_email}</td>
                            <td>{user.person_role}</td>
                            <td>{user.user_name}</td>
                            <td>{user.assigned_project}</td>
                            <td>{user.created_on}</td>
                            <td>{user.created_by}</td>
                            <td>{user.modified_on}</td>
                            <td>{user.modified_by}</td>
                            <td><Button className="deleteusers">
                                Delete
                            </Button></td>

                        </tr>
                    ))
                }
                </tbody>
            </table>

        </div>
        <div  className="addprojectbutton"><Button>
            <Link to="Users/UserDetails">Add new User</Link></Button> </div>
    </div>)
}
export default Userspage