import { IName, IUser } from "./auth";

export type IUserSpecificField = {
  userId: string;
  name: {
    firstName: string;
    lastName?: string;
  };
  profilePicture?: string;
};

export interface IPost {
  _id?: string;
  user?: IUser | IUserSpecificField;
  postText: string;
  images?: string[];
  createdAt?: string;
}

export interface IComment {
  _id?: string;
  user?: IUser | IUserSpecificField;
  post?: string;
  comment: string;
}
export interface IComment_reply {
  _id?: string;
  user?: IUser | IUserSpecificField;
  comment: string;
  comment_reply: string;
}

export interface IReaction {
  _id?: string;
  user?: IUserSpecificField | IUser;
  post?: string;
  reaction: "like" | "love" | "haha" | "sad" | "wow" | "angry";
}

export type IStory = {
  user?: IUserSpecificField | IUser;
  story: string;
};
