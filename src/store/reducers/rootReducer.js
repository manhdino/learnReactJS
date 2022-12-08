

//initState using when you turn ReactJS on, the data is already displayed
const initState = {
    users: [
        { id: 1, name: 'Dinomanh' },
        { id: 2, name: 'Eric' },
        { id: 3, name: 'Hoang' },
        { id: 4, name: 'Hoang4' },
    ],

    post: []
}
//state(Redux) - action(from React) - create a reducer(worker)
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case 'CREATE_USER':
            console.log('>>> run into create user', action);
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;