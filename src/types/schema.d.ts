// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
uploads: Array<IFile> | null;
messages: Array<IMessage>;
notifications: Array<INotification> | null;
me: IUser | null;
}

interface IMessagesOnQueryArguments {
communityId: string;
}

interface IFile {
__typename: "File";
filename: string;
mimetype: string;
encoding: string;
}

interface IMessage {
__typename: "Message";
text: string;
user: IUser;
communityId: string;
}

interface IUser {
__typename: "User";
id: string;
email: string;
firstName: string | null;
lastName: string | null;
}

interface INotification {
__typename: "Notification";
label: string | null;
}

interface IMutation {
__typename: "Mutation";
createCommunity: boolean;
updateCommunity: boolean;
singleUpload: IFile;
createMessage: boolean;
pushNotification: INotification | null;
sendForgotPasswordEmail: boolean | null;
forgotPasswordChange: Array<IError>;
login: ILoginResponse;
logout: boolean | null;
register: Array<IError>;
}

interface ICreateCommunityOnMutationArguments {
input: ICreateCommunityInput;
}

interface IUpdateCommunityOnMutationArguments {
communityId: string;
input: IUpdateCommunityInput;
}

interface ISingleUploadOnMutationArguments {
file: any;
}

interface ICreateMessageOnMutationArguments {
message: IMessageInput;
}

interface IPushNotificationOnMutationArguments {
label: string;
}

interface ISendForgotPasswordEmailOnMutationArguments {
email: string;
}

interface IForgotPasswordChangeOnMutationArguments {
newPassword: string;
key: string;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
}

interface IRegisterOnMutationArguments {
firstName: string;
lastName: string;
email: string;
password: string;
}

interface ICreateCommunityInput {
name: string;
picture?: any | null;
description: string;
country: string;
latitude: number;
longitude: number;
}

interface IUpdateCommunityInput {
name: string;
picture?: any | null;
category: string;
country: string;
latitude: number;
longitude: number;
}

interface IMessageInput {
text: string;
communityId: string;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}

interface ILoginResponse {
__typename: "LoginResponse";
errors: Array<IError>;
sessionId: string | null;
user: IUser | null;
}

interface ISubscription {
__typename: "Subscription";
newMessage: IMessage;
newNotification: INotification | null;
user: Array<IUser> | null;
}

interface INewMessageOnSubscriptionArguments {
communityId: string;
}
}

// tslint:enable
