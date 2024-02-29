import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            }
        }
        console.log(this.props.name + " - constructor");
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/iamutk4");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
        console.log(this.props.name + " - componentDidMount");
    }

    componentDidUpdate() {
        console.log(this.props.name + " - componentDidUpdate");
    }

    componentWillUnmount() {
        console.log(this.props.name + " - componentWillUnmount");
    }

    render() {
        const { count } = this.state;
        console.log(this.props.name + " - render");
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this?.state?.userInfo?.avatar_url} alt="User Avatar" />
                <h2>Name: {this?.state?.userInfo?.name}</h2>
                <h2>Location: {this?.state?.userInfo?.location}</h2>
            </div>
        );
    };
};

export default Profile;