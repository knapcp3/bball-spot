"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC } from "react";

let client: ApolloClient | null = null;

const getApolloClient = () => {
  if (!client) {
    client = new ApolloClient({
      uri: "http://localhost:3333/graphql",
      cache: new InMemoryCache(),
    });
  }
  return client;
};

type Props = {
  children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <ApolloProvider client={getApolloClient()}>{children}</ApolloProvider>;
};
