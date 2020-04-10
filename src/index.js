const { GraphQLServer } = require('graphql-yoga')

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length

const resolvers = {
    Query: {
        info: () => `GraphQL Tutorial`,
        feed: () => links,
        link: (parent, args) => links.filter( (link) => { 
            return link.id === args.id ? link : null;
        })[0]
    },

    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }

            links.push(link)
        
            return link
        },
        
        deleteLink: (parent, args) => {
            let deletedLink
            links = links.filter( (link) => {
                return link.id !== args.id ? link : deletedLink = link;
            });

            return deletedLink
        },

        updateLink: (parent, args) => {
            let link = links.filter( (link) => { 
                return link.id === args.id ? link : null;
            })[0]

            if (link) {
                link.url = args.url
                link.description = args.description
            }

            return link
        }
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))