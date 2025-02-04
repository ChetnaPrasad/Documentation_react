import React from "react";
import "./Header.css"
import menubar from "../../Images/menubar.png"
// import { TfiAlignJustify } from "react-icons/tfi";
export default function Header(){
    return(
        <div>
            <div className="headerContainer">
                <header>
                    <div className="alignmentcontainer">
                        <ul className="verticallist">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </header>
                <div className="menuImageContainer">
                       <img src={menubar} alt="Menu"/>
                     {/* <TfiAlignJustify/> */}
                </div>
            </div>
        </div>
    )
}