import React from "react";
import "../Styles/Search.css";
import {Button} from "antd";

const SearchIssues = ({search, onSearch}) => {
    return(
        <div className="search">
            Input Issue:
            <input value={search} onChange={onSearch} placeholder="input issue" />
            <Button type="primary" id = "searchissue"> search </Button>
        </div>
    )
}

export default SearchIssues;