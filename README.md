Hey, you! You're welcome!

Before you start it, make sure you have Node and NPM installed already.

If you don't, you can download and install it through the the links bellow:
 - NodeJs install: https://nodejs.org/en/download/
 - NPM install: https://www.npmjs.com/get-npm

Execute the following commands on main project source folder to run the project (graphql_nodejs/):

1. Run "npm install"

2. Run "node src/index.js"


Open the playground interface at:
http://localhost:4000/


Use the following queries to play with GraphQL:

// create 
mutation {
  post(url: "www.google.com", description: "Searching engine toll") {
  	id
  }
}

mutation {
  post(url: "www.linked.com", description: "Professional networking - social media") {
  	id
  }
}

----------------

//query
query {
  feed {
    description,
    url
  }
}

----------------

// update
mutation {
  updateLink(id: "?", description: "?", url: "?") {
    description,
    id
  }
}