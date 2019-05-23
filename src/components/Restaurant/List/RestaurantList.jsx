import React, {Component} from 'react';
import { Link } from "react-router-dom";

class RestaurantList extends Component {
    render() {
        return (
            <>
                List R Desktop
                <Link to="/restaurants/1">Go detail</Link>
            </>
        );
    }
}

export default RestaurantList;