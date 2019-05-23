import React from 'react';

import Dashboard from "./Dashboard";
import DashboardMobile from "./DashboardMobile";

import { isMobile } from "../../util/device";


function Index() {
    if (isMobile) {
        return <DashboardMobile/>;
    } else {
        return <Dashboard/>;
    }
}

export default Index;