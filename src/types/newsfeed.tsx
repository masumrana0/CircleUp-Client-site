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
  Images?: string[];
  createdAt?: string;
}

export interface IComment {
  _id?: string;
  user?: IUser | IUserSpecificField;
  post?: string;
  comment: string;
}

export interface IReaction {
  _id?: string;
  user?: IUserSpecificField | IUser;
  post?: string;
  reaction: "like" | "love" | "haha" | "sad" | "wow" | "angry";
}
