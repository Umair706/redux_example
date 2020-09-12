import React from "react";

import { connect } from "react-redux";
// Bring in the asynchronous fetchPosts action
import {fetchPosts} from "../actions/postsActions"

import {Post} from './Post';

// Redux state is now in the props of the component
const PostsPage = ({loading, posts, hasErrors,fetchPosts}) => {

 
  React.useEffect(() => {

    fetchPosts()
  }, [fetchPosts]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
};

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
  
});
const mapDispatchToProps = {
  //normally it is an object full of action creators
fetchPosts

}

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage);
