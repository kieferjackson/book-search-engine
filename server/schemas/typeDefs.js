const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Query {
        user(user_id: ID!): [User]
        login(email: String!, password: String!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        saveBook(authors: [String], description: String, bookId: String, image: String, link: String, title: String): Book
        deleteBook(book_id: ID!): Book
    }
`;

module.exports = typeDefs;