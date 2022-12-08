import React from "react";
import "./ListTodo.scss";
import { toast } from 'react-toastify';
class AddToDo extends React.Component {
    state = {
        tittle: ''
    }
    handleChangeTittle = (event) => {
        this.setState({
            tittle: event.target.value
        })
    }
    handleAddTittle = (event) => {
        event.preventDefault()
        if (!this.state.tittle) {
            toast.error('Missing tittle')
            return;
        }
        this.props.addNewTittle({
            id: Math.floor(Math.random() * 1001),
            tittle: this.state.tittle
        })
        this.setState({
            tittle: ''
        })
    }
    render() {
        let { tittle } = this.state
        return (
            <>
                {
                    <div className="add-todo">
                        <input type='text'
                            value={tittle}
                            onChange={(event) => this.handleChangeTittle(event)}
                        ></input>
                        <button type='button' className="add" onClick={(event) => this.handleAddTittle(event)}>Add</button>
                    </div>
                }</>
        )
    }
}

export default AddToDo