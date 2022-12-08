
import React from "react";
// import { withRouter } from 'react-router';
import Color from "../HOC/Color";
import logo from '../../assets/images/img_react_js.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    handleDeleteUser = (user) => {
        console.log('check user delete', user);
        this.props.deleleUserRedux(user)
    }
    handleCreateUser = () => {
        console.log('check add user');
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props: ', this.props.dataRedux);
        let listUsers = this.props.dataRedux;

        return (
            <>
                <div>
                    This is from Homepage
                </div>
                <div>
                    <img src={logo}></img>
                </div>

                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <span onClick={() => this.handleDeleteUser(item)}>      x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new user</button>
                </div>
            </>
        )
    }
}

//clone data from State Redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }

}

//call Redux using dispatch actions
const mapDispatchToProps = (dispatch) => {
    return {
        deleleUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER',
            payload: userDelete
        }),

        addUserRedux: () => dispatch({
            type: 'CREATE_USER'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));