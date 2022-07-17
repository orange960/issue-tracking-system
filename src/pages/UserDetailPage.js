import React, {useState} from "react";
import {Button, Form} from "antd";

const UserDetailPage = () => {
    return(
        <div className="userDetails">
            <h2>Add Users</h2>
        <div className="inputUserDetailForm">
        <Form>
            <input
                type="number"
                name = "userid"
                required="required"
                placeholder="enter user id"
            />
        </Form>
            <Form>
                <input
                    type="text"
                    name = "personname"
                    required="required"
                    placeholder="enter person name"
                />
            </Form>
            <Form>
                <input
                    type="text"
                    name = "email"
                    required="required"
                    placeholder="enter user email"
                />
            </Form>
            <Form>
                <input
                    type="text"
                    name = "role"
                    required="required"
                    placeholder="enter user role"
                />
            </Form>
            <Form>
                <input
                    type="text"
                    name = "userid"
                    required="required"
                    placeholder="enter user name"
                />
            </Form>
            <Form>
                <input
                    type="number"
                    name = "assigned_project"
                    required="required"
                    placeholder="assigned project"
                />
            </Form>
            <Form>
                <input
                    type="date"
                    name = "created_on"
                    required="required"
                    placeholder="created date"
                />
            </Form>
            <Form>
                <input
                    type="text"
                    name = "created_by"
                    required="required"
                    placeholder="created by"
                />
            </Form>
            <Form>
                <input
                    type="date"
                    name = "modified_on"
                    required="required"
                    placeholder="modified date"
                />
            </Form>
            <Form>
                <input
                    type="text"
                    name = "modified_by"
                    required="required"
                    placeholder="modified by"
                />
            </Form>
            <Button>Add New User</Button>
        </div>
    </div>
    )
}
export default UserDetailPage;