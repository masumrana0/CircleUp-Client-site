"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar as AntAvatar } from "antd";

const Avatar = ({ src }: { src?: string }) => {
  return (
    <div>
      <AntAvatar src={src} size="large" icon={<UserOutlined />} />
    </div>
  );
};

export default Avatar;
