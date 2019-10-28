import React, { Component } from 'react';
import axios from 'axios';

const PostsContext = React.createContext();
export const PostsConsumer = PostsContext.consumer;


class PostsProvider extends Component {
    state = { 
        posts: []
     }

    componentDidMount() {
        this.obtenerPosts();
    }

    obtenerPosts = async () => {
        // Para produccion poner window.local
        let url = `http://54.153.122.87/wp-json/wp/v2/posts`;
        let posts = await axios.get(url);
        this.setState({
            posts: posts.data
        })
    }
    render() { 
        return ( 
        <PostsContext.Provider
        value={{
            posts: this.state.posts
        }}
        > {this.props.children}
        </PostsContext.Provider> 
        );
    }
}
 
export default PostsProvider;