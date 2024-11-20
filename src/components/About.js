import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="about-us">
                <h1>About</h1>
                <UserClass name="Awais (Class)" location="Bangalore" />
            </div>
        )
    }
}



export default About;
