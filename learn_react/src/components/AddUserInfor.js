import React, { useState } from "react";
import './DisplayInfor.scss'
const AddUserInfor = (props) => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('Minh mang')
    const [age, setAge] = useState('')

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }


    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }
    return (
        <div>
            My name is {name} and I {age} years old
            <form action="" onSubmit={(event) => handleOnSubmit(event)}>
                <label htmlFor="">Your name:</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handleOnChangeName(event) }} />

                <label htmlFor="">Your Age:</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handleOnChangeAge(event) }} />
                <button >Submit</button>
            </form>
        </div>
    );

}

export default AddUserInfor