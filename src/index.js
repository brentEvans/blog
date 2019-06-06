import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';

const store =  createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);




// applyMiddleware function is how we connect a middlware like thunk to our Redux store itself
    // pass applyMiddleware into our createStore function



// APP SUMMARY:

    // inside our root index.js file (here), we imported REDUX-THUNK 
        // wired Redux-Thunk up to our Redux Store through the use of applyMiddleware(), a function from the Redux library
            // passed the result of this into the second argument of the createStore() call

        // when we apply that middleware of Redux-Thunk, anytime that we dispatch an action, that action will first be sent to Redux-Thunk as the middleware
            // after Redux-Thunk, that action will be sent off to all of our Reducers

        // when we wired up Redux-Thunk, it changed the rules of all of our action creators
            // inside of our action creators index.js file, we no longer had to create action creators that always returned an action object
                // we now may use action creators that optionally return a function 
                    // if we returned a function, it would be automatically called with the dispatch and getState arguments
                        // this essentially gave us total control over changing/retreiving information out of our Redux Store
                            // (anytime we expect to make an API request from an Action Creator, we'll always make use of something like Redux-Thunk)
                                // there are other options out there to let us use async behaviors, but Redux-Thunk is most popular
                    // when we return a function from our Action Creators, we use syntax where an outer function returns an inner function 
                        // alternate solution:
                            // create an Action Creator that calls other Action Creators
                                // and made sure that we still dispatch the result of calling those Action Creators

        // Reducers
            // first argument is STATE (whatever was returned by this Reducer the last time it ran)
            // we usually make use of Switch Case syntax inside our Reducers

            // anytime we return some data from a Reducer, we always have to return a NEW array/object or a different valued string/number if we expect Redux to recognize the change
                // if we ever return the exact same object/array, Redux only checks if it's the same object/array in memory and doesn't tell React to rerender


            




