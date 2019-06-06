import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        if (!user){
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {

    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);


// memoized function:
    // if the memoized function was previously called, the result of this function call is returned whenever the memoized function is called again !!!!!! 
        // speeds up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again
    // comes from _ library 
        // ex: const memoizedGetUser = _.memoize(getUser)


