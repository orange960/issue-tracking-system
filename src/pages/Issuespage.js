import React from "react";
import {useState} from "react";
import {Button} from "antd";
import Navbar from "../components/Navbar";
import data from "../helper/IssueList.json";
import "../Styles/Issues.css"

import SearchIssues from "../components/SearchIssues";
function Issuespage() {
    const [issues, setIssues] = useState(data);
    return(<div className="issues">
        <div className="Navbar"> <Navbar></Navbar> </div>
        <h1 className="issuestitle">Issues</h1>
        <div className="searchIssues"><SearchIssues></SearchIssues></div>
        <div className="issues">
            <table className="issuestable" border="1px">
                <thead>
                <tr>
                    <th scope="col">Issue id</th>
                    <th scope="col">Issue Summary</th>
                    <th scope="col">Issue Description</th>
                    <th scope="col">Identified by Person ID</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    issues.map((issue) => (
                        <tr>
                            <td>{issue.issue_id}</td>
                            <td>{issue.issue_summary}</td>
                            <td>{issue.issue_description}</td>
                            <td>{issue.identified_by_person_id}</td>
                            <td><Button className="deleteissue"> Delete </Button></td>
                        </tr>
                    ) )
                }
                </tbody>
            </table>
        </div>

        <div  className="addprojectbutton"><Button>Add new Issue</Button> </div>
    </div>)
}
export default Issuespage;