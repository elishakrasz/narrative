import { ResolverMap } from "../../../types/graphql-utils";
import { Message } from "../../../entity/Message";

export const resolvers: ResolverMap = {
  Message: {
    user: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    messages: async (_, { communityId }, { session }) => {
      return Message.find({
        where: {
          communityId,
          userId: session.userId
        }
      });
    }
  }
};