// Require Apollo server
const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [Auth]
        description: String!
        title: String!
    }

    type Auth {
        user: [User]
    }
`;

// Export typeDefs
module.exports = typeDefs;