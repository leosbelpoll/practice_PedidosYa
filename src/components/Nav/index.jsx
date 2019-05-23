import React from 'react';

import Nav from "./Nav";
import NavMobile from "./NavMobile";

import { isMobile } from "../../util/device";


function Index(props) {
    if (isMobile) {
        return <NavMobile {...props} />;
    } else {
        return <Nav {...props} />;
    }
}

export default Index;