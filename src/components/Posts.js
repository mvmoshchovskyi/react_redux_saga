import React from 'react';
import Post from "./Post";
import {connect} from 'react-redux'


const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className='text-center'>No posts yet </p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)

}
const mapStateToprops=(state)=>{
    return {
        syncPosts:state.posts.posts}
}
export default connect(mapStateToprops,)(Posts)
