import React, {Component} from 'react';

class RestaurantDetailMobile extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <>
                <h1>{id}</h1>
                Detail R Mobile
            </>
        );
    }
}

export default RestaurantDetailMobile;