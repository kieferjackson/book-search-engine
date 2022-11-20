const { User, Book } = require('./models');

const resolvers =
{
    Query:
    {
        user: async (parent, { user_id }) => User.findOne({ _id: user_id }),
        login: async (parent, { email, password }) => {}
    },
    Mutation:
    {
        createUser: async (parent, args) => User.create(args),
        saveBook: async(parent, args) => Book.create(args),
        deleteBook: async(parent, { book_id }) => Book.findOneAndDelete({ _id: book_id })
    }
}

module.exports = resolvers;