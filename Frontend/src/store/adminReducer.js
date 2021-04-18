const initialState = {
    LoggedUser: ""
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGGED_USER':
            const LoggedUser = action.payload;
            return { ...state, LoggedUser }

        default:
            return state;
    }
}

export default adminReducer;