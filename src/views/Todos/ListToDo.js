import React from "react";
import './ListTodo.scss';
import AddToDo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class ListToDo extends React.Component {

    state = {
        listTodo: [
            { id: 'todo1', tittle: 'Doing Homework' },
            { id: 'todo2', tittle: 'Making Video' },
            { id: 'todo3', tittle: 'Fixing Bug' }
        ],
        editTodo: {}
    }

    addNewTittle = (tittle) => {
        console.log(this.state)
        this.setState({
            listTodo: [...this.state.listTodo, tittle]
        })
        toast.success("Wow so easy!")

    }
    handleOnClickDelete = (tittle) => {
        let currentTodos = this.state.listTodo;
        currentTodos = currentTodos.filter(item => item.id !== tittle.id);
        this.setState({
            listTodo: currentTodos
        })
        toast.success('Delete success')

    }

    handleOnClickEdit = (tittle) => {
        let { editTodo, listTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        //Save
        if (isEmptyObj === false && editTodo.id === tittle.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex(item => item.id === tittle.id);
            listTodoCopy[objIndex].tittle = editTodo.tittle
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success('Update success')
            return;
        }
        //Edit
        this.setState({
            editTodo: tittle
        })

    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.tittle = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('check empty obj:', isEmptyObj)
        return (

            <>
                <p>
                    Simple TODO Apps with Dinomanh
                </p>
                <div className="List-todo-container">
                    <AddToDo addNewTittle={this.addNewTittle} />
                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} {item.tittle}  </span>
                                            :
                                            <> {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.tittle}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                </span>
                                                :
                                                <span>{index + 1} {item.tittle}  </span>
                                            }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleOnClickEdit(item)}
                                        >{
                                                isEmptyObj === false && editTodo.id === item.id ? 'Save' :
                                                    'Edit'}</button>
                                        <button className="delete"
                                            onClick={() => this.handleOnClickDelete(item)}>
                                            Delete</button>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </>
        )
    }

}

export default Color(ListToDo);