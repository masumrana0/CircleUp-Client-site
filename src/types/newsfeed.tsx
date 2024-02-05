export interface IPost {
  _id?: string;
  user?: string;
  postText: string;
  Images?: string[];
}

export interface IComment {
  _id?: string;
  user?: string;
  post?: string;
  comment: string;
}

export interface IReaction {
  _id?: string;
  user?: string;
  post?: string;
  reaction: "like" | "love" | "haha" | "sad" | "wow" | "angry";
}
