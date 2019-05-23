import React from 'react';

import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

import { isMobile } from "../../util/device";


function Index(props) {
    if (isMobile) {
        return <HeaderMobile {...props} />;
    } else {
        return <Header {...props} />;
    }
}

export default Index;