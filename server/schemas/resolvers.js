// Require models
const {User, Book} = require("../models");

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        },
    },
    Mutation: {
        login: async (parent, {email, password}) = {
        },
        addUser: async (parent, {username, email, password}) => {
            const user = await User.create();
        }
    }
};

// Export resolvers
module.exports = resolvers;