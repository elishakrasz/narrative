import { ResolverMap } from "../../../types/graphql-utils";
import { Community } from "../../../entity/Community";
import { processUpload } from "../shared/processUpload";
import { communityCacheKey } from "../../../constants";
// import { isAuthenticated } from "../../shared/isAuthenticated";

// house.png
// aseq2-house.png
// image/png
// image/jpeg
// ['image', 'jpeg']
// 'jpeg'

export const resolvers: ResolverMap = {
  Mutation: {
    createCommunity: async (
      _,
      { input: { picture, ...data } },
      { session, redis }
    ) => {
      // isAuthenticated(session);
      const pictureUrl = picture ? await processUpload(picture) : null;

      const community = await Community.create({
        ...data,
        pictureUrl,
        userId: session.userId
      }).save();

      redis.lpush(communityCacheKey, JSON.stringify(community));

      return true;
    }
  }
};
