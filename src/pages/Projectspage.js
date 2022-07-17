import React, {useState} from "react";
import Navbar from "../components/Navbar";

import Search from "../components/Search";
import {Button} from "antd";
import data from "../helper/ProjectList.json";
import "../Styles/Projectpage.css";
import "../Styles/Projects.css"


function Projectspage() {
    const [projects, setProject] = useState(data);
    return(<div className="projects">
        <div className="Navbar"> <Navbar></Navbar> </div>
        <h1 className="projecttitle">Projects</h1>
        <div className="searchProject"><Search></Search></div>
        <div >
            <table className="projectstable" border="1px">
                <thead>
            <tr>
                <th scope="col">Project id</th>
                <th scope="col">Project name</th>
                <th scope="col">Project Start Date</th>
                <th scope="col">Target End Date</th>
                <th scope="col">Actual End Date</th>
                <th scope="col">Created Date</th>
                <th scope="col">Created by</th>
                <th scope="col">Modified Date</th>
                <th scope="col">Modified by</th>
                <th scope="col">Delete</th>
            </tr>
                </thead>
                <tbody>
                {
                    projects.map((project)=>(
                        <tr> <td>{project.project_id}</td>
                            <td>{project.project_name}</td>
                            <td>{project.start_date}</td>
                            <td>{project.target_end_date}</td>
                            <td>{project.actual_end_date}</td>
                            <td>{project.created_on}</td>
                            <td>{project.created_by}</td>
                            <td>{project.modified_on}</td>
                            <td>{project.modified_by}</td>
                            <td><Button className="deleteproject"> Delete </Button></td>

                        </tr>
                    ))
                }
                </tbody>

        </table>
        </div>

        {/*    {*/}
        {/*    ProjectList.map((project,key) => {*/}
        {/*    return <Projects key={key}*/}
        {/*                     project_id={project.project_id}*/}
        {/*                     project_name={project.project_name}*/}
        {/*                     project_start_date={project.start_date}*/}
        {/*                     projecy_target_end_date = {project.target_end_date}*/}
        {/*                     project_actual_end_date = {project.actual_end_date}*/}
        {/*                     project_created_on = {project.created_on}*/}
        {/*                     project_created_by = {project.created_by}*/}
        {/*                     project_modified_on = {project.modified_on}*/}
        {/*                     project_modified_by = {project.modified_by}/>*/}
        {/*    // return(project.project_name)*/}
        {/*})}*/}
        <div  className="addprojectbutton"><Button>Add new Project</Button> </div>
    </div>)
}

export default Projectspage;