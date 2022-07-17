import React from "react";
import "../Styles/Search.css";
import {Button} from "antd";

const SearchUsers = ({search, onSearch}) => {
    return(
        <div className="search">
            Input Issue:
            <input value={search} onChange={onSearch} placeholder="input user" />
            <Button type="primary" id = "searchuser"> search </Button>
        </div>
    )
}

export default SearchUsers;