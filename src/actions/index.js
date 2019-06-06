import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// memoized version of this approach: 
    // export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
    // const _fetchUser = _.memoize(async (id, dispatch) => {
    //     const response = await jsonPlaceholder.get(`/users/${id}`);

    //     dispatch({ type: 'FETCH_USER', payload: response.data });
    // });





// action creators must return plain JS objects with a type property
    // REMEMBER: all JS code is transpiled into ES2015 syntax prior to being run in the browser
        // because we're using the async/await syntax, our action creator isn't working as expected

// by the time our action gets to a reducer, we won't have fetched our data!
    // this is why promise syntax doesn't work either...


// must use MIDDLEWARE to make use of Asynchronous Action Creators !! 
    // --> redux-thunk !!!!
        // after dispatch, all actions are forwarded through this middleware before being sent to reducers






// notes on MIDDLEWARE in Redux
    // plain function that gets called with every action we dispatch
    // has the ability to STOP (prevent from going to reducers), MODIFY, or otherwise mess around (i.e., console.log any actions we dispatch) with actions 
    // tons of open source middleware exist
    // most popular use of middleware is for dealing with async actions
    // we'll use middleware called Redux-Thunk to solve our async issues
        // this is likely the most commonly used middleware !!!!


// Redux-Thunk relaxes the normal rules governing action creators
    // normal rules: 
        // action creators must return action objects
        // actions must have a type property
        // actions can optionally have a 'payload' property

    // Redux-Thunk is an all purpose middleware that allows us to deal with async action creators, but also allows us to do many other things
        // handling action creators is not its primary purpose

            // "action creators must return action objects"
                // --> OR (with Redux-Thunk) 
                    // action creators can return FUNCTIONS 

                        // if you return a function from an action creator, Redux-Thunk invokes that function immediately
                            // function invoked with 'dispatch' function and 'getState' function as arguments
                                // these 2 arguments that our function receives are essentially unlimited power over everything that goes on inside of our Redux app
                                    // through dispatch, we can change any data we want 
                                    // through getState we can read/access any data we want

                            // we wait for our request to finish

                            // once request is complete, we use dispatch funciton to manually dispatch action 
                                // manually dispatching an action is the entire point of this process...






