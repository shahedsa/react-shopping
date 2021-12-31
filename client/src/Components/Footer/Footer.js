import React from 'react';
import "../../css/Footer/Footer.css";
import { staticdata } from "../../staticdata"

function Footer() {
    return (
        <footer>
            {staticdata.footerTitle}
        </footer>
    )
}

export default Footer;