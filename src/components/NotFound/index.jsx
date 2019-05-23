import React from 'react';

import NotFound from "./NotFound";
import NotFoundMobile from "./NotFoundMobile";

import { isMobile } from "../../util/device";


function Index(props) {
    if (isMobile) {
        return <NotFoundMobile {...props} />;
    } else {
        return <NotFound {...props} />;
    }
}

export default Index;