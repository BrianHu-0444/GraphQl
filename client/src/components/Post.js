import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const POST_QUERY = gql`
  query PostQuery($id: Int) {
    post(id: $id) {
      id,
      author,
      body
    }
  }
`;

export class Post extends Component {
  render() {
    let { id } = this.props.match.params;
    id = parseInt(id);
    return (
      <Fragment>
        <Query
          query={POST_QUERY}
          variables={{ id }}> 
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) return <h3>Error</h3>
              const {post} = data;
                return (
                  <div className=''>
                    <h2>{post.author}</h2>
                    <p>{post.body}</p>
                  </div>
                )
            } 
          }
        </Query>
      </Fragment>
    )
  }
}

export default Post
