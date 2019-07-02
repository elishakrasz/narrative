import { ResolverMap } from "../../types/graphql-utils";
import { Notification } from "../../../entity/User";
import { createMiddleware } from "../../../utils/createMiddleware";
import middleware from "./middleware";
// import { PubSub } from 'graphql-subscriptions'
import { PubSub } from 'graphql-yoga'

const pubsub = new PubSub();
const NOTIFICATION_SUBSCRIPTION_TOPIC = 'newNotifications';

// const notifications = [];
export const resolvers: ResolverMap = {
  Query: {
   notifications: () => notifications
  },
  Mutation: {
    pushNotification: async (_, { notifications }, { pubsub, session}) => {
    //   const newNotification = { label: notifications.label };
    //   notifications.push(newNotification);

      const newNotification = await Notification.create({
          ...notifications,
          userId: session.userId
      }).save();

      return newNotification;
    },
},
Subscription: {
    newNotification: {
        subscribe: (_, { notifications }, { pubsub }) => {
            return pubsub.asyncIterator(notifications)
        }
    }
  },
}

