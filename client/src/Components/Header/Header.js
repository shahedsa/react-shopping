import React from 'react';
import "../../css/Header/Header.css";
import { staticdata } from "../../staticdata";

function Header() {
    return (
        <header>
            {staticdata.headerTitle}
        </header>
    )
}


export default Header;