import { Redis } from "ioredis";
import { userLoader } from "../loaders/UserLoader";
import { PubSub } from "graphql-yoga";

export interface Session extends Express.Session {
  userId?: string;
}

export interface Context {
  redis: Redis;
  url: string;
  session: Session;
  req: Express.Request;
  userLoader: ReturnType<typeof userLoader>;
  pubsub: PubSub;
}

export type Resolver = (
  parent: any,
  subscribe: any,
  args: any,
  context: Context,
  info: any
) => any;

export type GraphQLMiddlewareFunc = (
  resolver: Resolver,
  parent: any,
  args: any,
  context: Context,
  subscribe: any,
  info: any
) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
