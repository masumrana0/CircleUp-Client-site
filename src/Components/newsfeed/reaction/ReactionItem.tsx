"use client";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import ReactionLabel from "./Reaction";
export const reactionItem: MenuProps["items"] = [
  {
    key: "1",
    label: <ReactionLabel />,
  },
];
