
import React from "react";

class SplitComponents extends React.Component {
    state = {
        name: '',
        salary: ''
    }
    handleChangename = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSumbit = (event) => {
        event.preventDefault()
        if (!this.state.name || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('>>>> check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            salary: this.state.salary
        })

        this.setState({
            name: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label htmlFor='FName'> Name:</label><br />
                <input
                    type='text'
                    value={this.state.name}
                    onChange={(event) => this.handleChangename(event)} /><br />
                <label htmlFor='LName'>Salary:</label>
                <br />
                <input type='text' value={this.state.salary} onChange={(event) => this.handleChangesalary(event)} /><br />
                <input type='submit' onClick={(event) => this.handleSumbit(event)}></input>
            </form>
        )
    }
}

export default SplitComponents