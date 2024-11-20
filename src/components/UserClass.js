
import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const { name, location } = this.props;
        return (
            <div className="user-card">
                <h3>{name}</h3>
                <h3>Count : {this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: ++this.state.count
                    })
                }}>Increase Count</button>
                <h3>{location}</h3>
                <h3>Contact : 9663571790</h3>
            </div>
        )
    }
}

export default UserClass;
