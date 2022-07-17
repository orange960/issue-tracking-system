import React from "react";
import Navbar from "../components/Navbar";
import "../Styles/Homepage.css";
import MainMenu from "../components/MainMenu";
import {MenuList} from "../helper/MenuList";


 function Homepage() {
  return(
      <div className="Homepage">
          <div className="Navbar"> <Navbar></Navbar> </div>
          <h1 className="menuTitle">Use this application to track issues</h1>
          <div className="menuList">{MenuList.map((menuItem,key) => {
              return <MainMenu key={key}
                               image={menuItem.image}
                               name={menuItem.name}/>
          })}</div>
      </div>)
}

export default Homepage;