const { User, Book } = require('../models');

const resolvers =
{
    Query:
    {
        user: async (parent, { userId }) => { 
            const userToFind = await User.findOne({ _id: userId });
          
              if (!userToFind) {
                return ({ message: 'Cannot find a user with this id!' });
              }
          
              return userToFind;
        },
        login: async (parent, { email, password }) => { return {} }
    },
    Mutation:
    {
        createUser: async (parent, args) => { return User.create(args) },
        saveBook: async(parent, args) => { return Book.create(args) },
        deleteBook: async(parent, { bookId }) => { return Book.findOneAndDelete({ _id: bookId }) }
    }
}

module.exports = resolvers;