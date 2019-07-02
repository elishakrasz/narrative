import { Resolver, GraphQLMiddlewareFunc } from "../types/graphql-utils";

export const createMiddleware = (
  middlewareFunc: GraphQLMiddlewareFunc,
  resolverFunc: Resolver
) => (parent: any, args: any, context: any, info: any, subscribe: any) =>
  middlewareFunc(resolverFunc, parent, args, context, info, subscribe);
