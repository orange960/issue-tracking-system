import React from "react";
import "../Styles/Navbar.css";

// const MainMenu = MenuList.map((item) => {
//   return <div>{item.image}</div>;
// })
function MainMenu({image, name}) {
    return (
        <div className="menuItem">
           <div style={{backgroundImage : `url(${image})`}}></div>
            <h1>{name}</h1>
        </div>
    )
}
export default MainMenu;