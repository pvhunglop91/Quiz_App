import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Super',
        address: 'Minh mang',
        age: 20
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I {this.state.age} years old
                <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label htmlFor="">Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeName(event) }} />

                    <label htmlFor="">Your Age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }} />
                    <button >Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor