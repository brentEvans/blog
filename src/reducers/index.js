import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});









// RULES OF REDUCERS

    // 1) must return ANY value besides 'undefined'

    // 2) produces 'state', or data to be used inside of your app using only previous state and the action 

    // 3) must not return reach 'out of itself' to decide what value to return (reducers are PURE)

    // 4) must not mutate its input 'state' argument
        // this rule is somewhat MISLEADING and possibly FALSE !!!!! 
            // just don't mutate arrays/objects directly (i.e., push, pop, changing values inside, etc)

        // TRUTH:
            // you can mutate it all day and not see any errors
                // easier to tell beginners 'dont ever mutate state' than to tell them when they can and can't
            // corner case where this rule is true: 
                // if you return the same value of the state argument (whether or not you mutated it), then no update will be made to the app 
                // when a reducer gets an array or object passed in as state, the state is a reference to the array or object.
                    // If you return that state, you're returning a reference to the same object - so even if you've changed a property or value on the state, it's still the same array/object.
                // in this case, if we mutate the original array/object, Redux will not update the app

        // REMEMBER: strings and numbers are immutable objects
            // we only have to worry about this rule when working with arrays/objects



// rule 2

    // when Redux first boots up, it runs each reducer one time during initialization 

        // receives 2 arguments:

            // 1) undefined
                // (no state value exists yet, which is why we have to default the reducer's action object argument equal to null or empty array/object/string etc)

            // 2) Action object #1
                // (initialization action object)

        //reducer takes these 2 arguments and returns some intial state value

    // second time reducer gets called:

        // first argument is now whatever the reducer returned the last time it ran
            // state v1

        // second argument is Action object #2


