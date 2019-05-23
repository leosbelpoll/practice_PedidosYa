import React from 'react';

import RestaurantDetail from "./RestaurantDetail";
import RestaurantDetailMobile from "./RestaurantDetailMobile";

import { isMobile } from "../../../util/device";


function Index(props) {
    if (isMobile) {
        return <RestaurantDetailMobile {...props} />;
    } else {
        return <RestaurantDetail {...props} />;
    }
}

export default Index;