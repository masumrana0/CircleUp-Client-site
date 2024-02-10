import type { MenuProps } from "antd";
import SuggestedFriendsLabel from "../Labels/SuggestedFriendsLabel";

const SuggestedFriendsItems: MenuProps["items"] = [
  {
    key: "1",
    label: <SuggestedFriendsLabel />,
  },
];

export default SuggestedFriendsItems;
