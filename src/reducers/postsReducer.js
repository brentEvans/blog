export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};



// first argument to reducer is by convention 'state' (can be called whatever you want)

// second argument is the action object 

