import React, {Component} from 'react';

class RestaurantDetail extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <>
                <h1>{id}</h1>
                Detail R Desktop
            </>
        );
    }
}

export default RestaurantDetail;