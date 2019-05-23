import React from 'react';

import RestaurantList from "./RestaurantList";
import RestaurantListMobile from "./RestaurantListMobile";

import { isMobile } from "../../../util/device";


function Index() {
    if (isMobile) {
        return <RestaurantListMobile/>;
    } else {
        return <RestaurantList/>;
    }
}

export default Index;