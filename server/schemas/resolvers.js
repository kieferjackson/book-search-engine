const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

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
        createUser: async (parent, args) => { 
            const user = await User.create(args);

            if (!user) {
            return { message: 'Something is wrong!' };
            }

            const token = signToken(user);
            return User.create({ token, user }) 
        },
        saveBook: async(parent, args) => { return Book.create(args) },
        deleteBook: async(parent, { bookId }) => { return Book.findOneAndDelete({ _id: bookId }) }
    }
}

module.exports = resolvers;