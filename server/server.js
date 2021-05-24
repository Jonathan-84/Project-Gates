const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");


const path = require("path");
const db = require("./config/connection");


const { typeDefs, resolvers } = require("./schemas");

import sslRedirect from 'heroku-ssl-redirect';

const app = express();

// enable ssl redirect
app.use(sslRedirect());

const PORT = process.env.PORT || 3001;
//console.log(process.env.NODE_ENV);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Listening on localhost:${PORT}${server.graphqlPath}`)
  );
});
