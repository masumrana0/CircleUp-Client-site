import { getUserInfo } from "@/service/auth.service";
import { IReaction, IUserSpecificField } from "@/types/newsfeed";

export const getUserReaction = (
  reactions: IReaction[]
): Promise<IReaction | null> => {
  const userInfo = getUserInfo();

  const reaction = reactions.find(
    (Reaction) =>
      (Reaction.user as IUserSpecificField).userId === userInfo?.userid
  );
  return reaction as IReaction;
};
