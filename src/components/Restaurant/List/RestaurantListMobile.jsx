import React, {Component} from 'react';
import { Link } from "react-router-dom";

class RestaurantListMobile extends Component {
    render() {
        return (
            <>
                List R Mobile
                <Link to="/restaurants/1">Go detail</Link>
            </>
        );
    }
}

export default RestaurantListMobile;