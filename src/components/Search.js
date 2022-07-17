import React from "react";
import "../Styles/Search.css";
import {Button} from "antd";

const Search = ({search, onSearch}) => {
    return(
        <div className="search">
            Input project name:
            <input value={search} onChange={onSearch} placeholder="input project name" />
            <Button type="primary" id = "searchproject"> search </Button>
        </div>
    )
}

export default Search;