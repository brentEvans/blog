import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader'; 

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render(){
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(
    mapStateToProps, 
    { fetchPostsAndUsers: fetchPostsAndUsers }
)(PostList);








// if we don't have any state data we want to pass into the component, pass in 'null' as first argument to connect function


// GENERAL DATA LOADING WITH REDUX:

    // 1) component gets rendered onto the screen

    // 2) component's 'componentDidMount' lifecycle method gets called

    // 3) we call action creator from 'componentDidMount'

    // 4) action creator runs code to make an API request

    // 5) action creator runs code to make an API request

    // 6) API responds with data

    // 7) action creator returns an 'action' with the fetched data on the 'payload' property

    // 8) some reducer sees the action, returns the data off the 'payload'

    // 9) because we generated some new state object, redux/react-redux cause our React app to be rerendered
