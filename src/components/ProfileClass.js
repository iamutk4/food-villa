import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
        console.log(this.props.name + " - constructor");
    };

    componentDidMount() {
        console.log(this.props.name + " - componentDidMount");
    }

    render() {
        const { count } = this.state;
        console.log(this.props.name + " - render");
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>Count: {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: 1,
                    });
                }}>setCount</button>
            </div>
        );
    };
};

export default Profile;