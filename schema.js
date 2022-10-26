const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

// Launch Type

const Posts = [{id:0,author: "John DOe", body: "Helllo world"},
{id:1,author: "Jane Doe", body: "Hi, planet!"}]

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLInt },
    author: { type: GraphQLString },
    body: { type: GraphQLString },
  })
});


// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Posts
      }
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent,args) {
        return Posts[args.id]
      },
    },
   
    
  } 
  }
)

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: () => ({
    addPost:{
      type:GraphQLList(PostType),
      args:{
        author:{type:GraphQLString},
        body:{type:GraphQLString}
      },
      resolve(parent,args) {
        const newPost = {
          id:Posts.length+1,
          author,
          body
        }
        Posts.push(newPost);
        return Posts
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation:RootMutation
});



