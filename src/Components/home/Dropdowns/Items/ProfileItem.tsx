import type { MenuProps } from "antd";
import ProfileLabel from "../Labels/ProfileLabel";

const ProfileDrwopDownItem: MenuProps["items"] = [
  {
    key: "1",
    label: <ProfileLabel />,
  },
];

export default ProfileDrwopDownItem;
