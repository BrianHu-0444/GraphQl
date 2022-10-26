import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MissionKey from './MissionKey';
import { Link } from 'react-router-dom';

const POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id,
      author,
      body
    }
  }
`;

export class Posts extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Posts</h1>
        <MissionKey />
        <Query query={POSTS_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) console.log(error);
              return (
                <Fragment>
                  {
                    data.posts.map(post => {
                      return (
                        <div>
                          <Link to={`/post/${post.id}`} ><h4>{post.author}</h4></Link>
                          <p>{post.body}</p>
                        </div>
                      )
                    })
                  }
                </Fragment>
              )
            }
          }
        </Query>
        <button className='btn btn-secondary'>
              <a href={`/post/add`}>Add Post</a>
        </button>
      </Fragment>
    )
  }
}

export default Posts
