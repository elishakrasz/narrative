import { ResolverMap } from "../../../types/graphql-utils";
import { Community } from "../../../entity/Community";
import { processUpload } from "../shared/processUpload";
import { getConnection } from "typeorm";
import { communityCacheKey } from "../../../constants";
// import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers: ResolverMap = {
  Mutation: {
    updateCommunity: async (
      _,
      { communityId, input: { picture, ...data } },
      { redis }
    ) => {
      // isAuthenticated(session);
      // 1. user uploads a new picture
      if (picture) {
        data.pictureUrl = await processUpload(picture);
      }

      // 2. user remove picture
      // 3. do nothing

      const {
        raw: [newCommunity]
      } = await getConnection()
        .createQueryBuilder()
        .update(Community)
        .set(data)
        .where("id = :id", { id: communityId })
        .returning("*")
        .execute();

      const community = await redis.lrange(communityCacheKey, 0, -1);
      const idx = community.findIndex(
        (x: string) => JSON.parse(x).id === communityId
      );
      await redis.lset(communityCacheKey, idx, JSON.stringify(newCommunity));

      return true;
    }
  }
};
