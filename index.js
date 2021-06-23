import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server=new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers:resolvers
});

server.start(()=>{
    console.log("그래픽큐엘 서버 스타트");
});