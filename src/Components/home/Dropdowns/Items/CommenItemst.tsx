import type { MenuProps } from "antd";
import CommentLabel from "../Labels/CommentLabel";
import React from "react";

export const commentItems: MenuProps["items"] = [
  {
    key: "1",
    label: <CommentLabel />,
  },
];
